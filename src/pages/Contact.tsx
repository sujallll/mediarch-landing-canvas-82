
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col bg-mediarch-dark">
      <Navbar />
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-8 text-4xl font-bold text-mediarch">Contact Us</h1>
              <p className="mb-6 text-lg text-gray-300">
                Have questions about Mediarch? We're here to help! Fill out the form
                and our team will get back to you as soon as possible.
              </p>
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-white">Our Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-mediarch" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <span className="text-gray-300">contact@mediarch.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-mediarch" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-mediarch" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <span className="text-gray-300">123 Gaming Street, Suite 100, Esports City, EC 12345</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-md border border-white/10 bg-mediarch-dark/80 px-4 py-2 text-white placeholder-gray-500 focus:border-mediarch focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-md border border-white/10 bg-mediarch-dark/80 px-4 py-2 text-white placeholder-gray-500 focus:border-mediarch focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-white/10 bg-mediarch-dark/80 px-4 py-2 text-white placeholder-gray-500 focus:border-mediarch focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-white/10 bg-mediarch-dark/80 px-4 py-2 text-white placeholder-gray-500 focus:border-mediarch focus:outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-mediarch text-mediarch-dark hover:bg-mediarch/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-mediarch-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mediarch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
