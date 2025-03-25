
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
import { LogOut, Eye, RefreshCw } from "lucide-react";

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
  read: boolean;
};

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setContacts(data || []);
    } catch (error: any) {
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
    await signOut();
    navigate("/admin/login");
  };

  const viewContact = async (contact: Contact) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);

    // Mark as read if not already
    if (!contact.read) {
      try {
        const { error } = await supabase
          .from("contacts")
          .update({ read: true })
          .eq("id", contact.id);

        if (error) throw error;

        // Update local state
        setContacts(
          contacts.map((c) => 
            c.id === contact.id ? { ...c, read: true } : c
          )
        );
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to mark as read",
          variant: "destructive",
        });
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
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
                                !contact.read 
                                  ? "bg-mediarch/20 text-mediarch" 
                                  : "bg-green-500/20 text-green-500"
                              }`}>
                                {!contact.read ? "New" : "Read"}
                              </span>
                            </TableCell>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{formatDate(contact.created_at)}</TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-mediarch hover:text-mediarch/80"
                                onClick={() => viewContact(contact)}
                              >
                                <Eye size={16} className="mr-1" />
                                View
                              </Button>
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
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
