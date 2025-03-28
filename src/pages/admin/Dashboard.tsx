
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  LogOut, 
  Eye, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  Trash2, 
  AlertCircle 
} from "lucide-react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Database } from "@/integrations/supabase/types";

type ContactStatus = Database["public"]["Enums"]["contact_status"];

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: ContactStatus;
  read: boolean;
};

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
      return;
    }

    fetchContacts();
  }, [user, navigate]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      console.log("Fetching contacts...");
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching contacts:", error);
        throw error;
      }

      console.log("Contacts fetched:", data);
      setContacts(data || []);
    } catch (error: any) {
      console.error("Error in fetchContacts:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to fetch contacts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      navigate("/admin/login");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to log out",
        variant: "destructive",
      });
    }
  };

  const viewContact = async (contact: Contact) => {
    console.log("Viewing contact:", contact);
    setSelectedContact(contact);
    setIsDialogOpen(true);

    // Mark as read if not already
    if (!contact.read) {
      try {
        const { error } = await supabase
          .from("contacts")
          .update({ read: true })
          .eq("id", contact.id);

        if (error) {
          console.error("Error marking as read:", error);
          throw error;
        }

        // Update local state
        setContacts(
          contacts.map((c) => 
            c.id === contact.id ? { ...c, read: true } : c
          )
        );
      } catch (error: any) {
        console.error("Error in viewContact:", error);
        toast({
          title: "Error",
          description: error.message || "Failed to mark as read",
          variant: "destructive",
        });
      }
    }
  };

  const updateContactStatus = async (contactId: string, status: ContactStatus) => {
    try {
      console.log(`Updating contact ${contactId} status to ${status}`);
      const { error } = await supabase
        .from("contacts")
        .update({ status })
        .eq("id", contactId);

      if (error) {
        console.error("Error updating status:", error);
        throw error;
      }

      // Update local state
      setContacts(
        contacts.map((c) => 
          c.id === contactId ? { ...c, status } : c
        )
      );
      
      toast({
        title: "Success",
        description: `Contact marked as ${status}`,
      });
      
      // Close dialog if open
      if (isDialogOpen && selectedContact?.id === contactId) {
        setSelectedContact((prev) => prev ? {...prev, status} : null);
      }
    } catch (error: any) {
      console.error("Error in updateContactStatus:", error);
      toast({
        title: "Error",
        description: error.message || `Failed to update status to ${status}`,
        variant: "destructive",
      });
    }
  };

  const handleDeleteContact = (contact: Contact) => {
    console.log("Preparing to delete contact:", contact);
    setSelectedContact(contact);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteContact = async () => {
    if (!selectedContact) return;
    
    try {
      setIsDeleting(true);
      console.log("Deleting contact:", selectedContact.id);
      const { error } = await supabase
        .from("contacts")
        .delete()
        .eq("id", selectedContact.id);

      if (error) {
        console.error("Error deleting contact:", error);
        throw error;
      }

      // Update local state safely - prevent state update issues after deletion
      const contactId = selectedContact.id;
      setContacts((prevContacts) => prevContacts.filter((c) => c.id !== contactId));
      
      toast({
        title: "Success",
        description: "Contact deleted successfully",
      });
      
      // Close dialogs
      setIsDeleteDialogOpen(false);
      setIsDialogOpen(false);
      // Clear selected contact after closing dialogs
      setSelectedContact(null);
    } catch (error: any) {
      console.error("Error in confirmDeleteContact:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete contact",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'responded':
        return "bg-green-500/20 text-green-500";
      case 'rejected':
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-yellow-500/20 text-yellow-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'responded':
        return "Accepted";
      case 'rejected':
        return "Rejected";
      default:
        return "Pending";
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-mediarch-dark">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-mediarch">Admin Dashboard</h1>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={fetchContacts}
                  className="flex items-center gap-2 border-mediarch/30 text-mediarch"
                >
                  <RefreshCw size={16} />
                  Refresh
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="flex items-center gap-2 border-white/30 text-white"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </div>

            <Card className="backdrop-blur-md bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Enquiries</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage and respond to user contact submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mediarch mx-auto mb-4"></div>
                    <p className="text-gray-300">Loading contacts...</p>
                  </div>
                ) : contacts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-300">No contact enquiries found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableCaption>A list of all contact enquiries</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Status</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow 
                            key={contact.id}
                            className={!contact.read ? "bg-mediarch/10" : ""}
                          >
                            <TableCell>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                getStatusBadgeClass(contact.status || 'pending')
                              }`}>
                                {getStatusLabel(contact.status || 'pending')}
                              </span>
                            </TableCell>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{formatDate(contact.created_at)}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-mediarch hover:text-mediarch/80"
                                  onClick={() => viewContact(contact)}
                                >
                                  <Eye size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-green-500 hover:text-green-600"
                                  onClick={() => updateContactStatus(contact.id, 'responded')}
                                  title="Accept"
                                >
                                  <CheckCircle size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-red-500 hover:text-red-600"
                                  onClick={() => updateContactStatus(contact.id, 'rejected')}
                                  title="Reject"
                                >
                                  <XCircle size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-gray-500 hover:text-gray-600"
                                  onClick={() => handleDeleteContact(contact)}
                                  title="Delete"
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      
      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        if (!isDeleting) setIsDialogOpen(open);
      }}>
        <DialogContent className="bg-mediarch-dark border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-mediarch">Contact Enquiry Details</DialogTitle>
            <DialogDescription className="text-gray-300">
              Submitted on {selectedContact && formatDate(selectedContact.created_at)}
            </DialogDescription>
          </DialogHeader>
          
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400">Status</h4>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                  getStatusBadgeClass(selectedContact.status || 'pending')
                }`}>
                  {getStatusLabel(selectedContact.status || 'pending')}
                </span>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Name</h4>
                <p className="text-white">{selectedContact.name}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Email</h4>
                <p className="text-white">{selectedContact.email}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Message</h4>
                <div className="mt-1 p-3 rounded-md bg-white/5 border border-white/10">
                  <p className="whitespace-pre-wrap text-gray-200">{selectedContact.message}</p>
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <div className="flex gap-2">
                  <Button
                    onClick={() => updateContactStatus(selectedContact.id, 'responded')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                    disabled={isDeleting}
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Accept
                  </Button>
                  <Button
                    onClick={() => updateContactStatus(selectedContact.id, 'rejected')}
                    variant="outline"
                    className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                    disabled={isDeleting}
                  >
                    <XCircle size={16} className="mr-2" />
                    Reject
                  </Button>
                </div>
                <Button
                  onClick={() => handleDeleteContact(selectedContact)}
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/5"
                  disabled={isDeleting}
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={(open) => {
        if (!isDeleting) setIsDeleteDialogOpen(open);
      }}>
        <AlertDialogContent className="bg-mediarch-dark border border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center gap-2">
              <AlertCircle className="text-red-500" size={20} />
              Confirm Deletion
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Are you sure you want to delete this contact enquiry? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              className="bg-transparent border-white/10 text-white hover:bg-white/5"
              disabled={isDeleting}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={(e) => {
                e.preventDefault();
                confirmDeleteContact();
              }}
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
