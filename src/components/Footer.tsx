
import { Facebook, Instagram, Twitter, Youtube, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-mediarch-dark py-20">
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-mediarch/5 to-mediarch-red/5 backdrop-blur-xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-mediarch">MEDIARCH</h2>
            <p className="mt-4 max-w-md text-sm text-gray-400">
              Bridging casual gaming and competitive esports through innovative 
              tournaments, skill development programs, and a vibrant community.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <SocialButton icon={<Facebook size={18} />} />
              <SocialButton icon={<Twitter size={18} />} />
              <SocialButton icon={<Instagram size={18} />} />
              <SocialButton icon={<Youtube size={18} />} />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Platform
            </h3>
            <FooterLinks 
              links={[
                { name: "Tournaments", href: "#" },
                { name: "Leaderboards", href: "#" },
                { name: "Achievements", href: "#" },
                { name: "Rewards", href: "#" },
              ]} 
            />
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h3>
            <FooterLinks 
              links={[
                { name: "About", href: "/about" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Contact", href: "/contact" },
              ]} 
            />
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h3>
            <FooterLinks 
              links={[
                { name: "Documentation", href: "#" },
                { name: "Guides", href: "#" },
                { name: "Help Center", href: "#" },
                { name: "FAQs", href: "#" },
              ]} 
            />
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-gray-400">
              Stay updated with our latest tournaments and community events.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-500 backdrop-blur-sm focus:border-mediarch focus:outline-none"
              />
              <Button className="rounded-l-none rounded-r-md bg-mediarch hover:bg-mediarch-red">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Mediarch. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a href="#" className="text-xs text-gray-500 hover:text-mediarch">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-mediarch">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-mediarch">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm transition-colors hover:border-mediarch/30 hover:bg-white/10 hover:text-mediarch"
    >
      {icon}
    </a>
  );
}

function FooterLinks({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-sm text-gray-300 transition-colors hover:text-mediarch"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
