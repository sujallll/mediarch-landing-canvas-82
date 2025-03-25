
import Navbar from "@/components/Navbar";
import { About as AboutSection } from "@/components/About";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-mediarch-dark">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-8 text-4xl font-bold text-mediarch">About Us</h1>
          <p className="mb-6 text-lg text-gray-300">
            Mediarch was founded with a vision to transform the gaming landscape by bridging
            the gap between casual gaming and professional esports. Our platform serves as a
            hub for gamers of all skill levels to learn, compete, and grow together.
          </p>
          <p className="mb-12 text-lg text-gray-300">
            From hosting tournaments to providing expert-led courses, we're committed to
            elevating the gaming experience for everyone involved. Join us in shaping the
            future of gaming.
          </p>
        </div>
        <AboutSection />
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

export default About;
