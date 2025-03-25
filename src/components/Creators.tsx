
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Creators() {
  return (
    <section className="relative overflow-hidden bg-mediarch-red py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-tr from-mediarch-dark via-mediarch-red to-mediarch-red/80"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            FOR CREATORS
          </h2>
          <p className="mb-12 text-xl text-white/80">
            BOOST YOUR CONTENT'S IMPACT
          </p>
          
          <div className="mb-16 mx-auto max-w-3xl rounded-xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="mb-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
              Unlock your potential
            </h3>
            <p className="mb-2 text-xl text-white">
              and join our community of creators
            </p>
            <p className="text-xl font-semibold text-mediarch">
              making waves in the gaming industry
            </p>
          </div>
          
          <Button className="bg-white text-mediarch-red hover:bg-white/90" size="lg">
            Join the Creator Program
            <Icons.ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
