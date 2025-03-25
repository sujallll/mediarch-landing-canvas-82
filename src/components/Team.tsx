
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    designation: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sarah Miller",
    designation: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    designation: "Head of Marketing",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function Team() {
  return (
    <section className="bg-mediarch-dark py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-mediarch sm:text-4xl">OUR TEAM</h2>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white/80 text-center max-w-3xl mb-10">
            Our passionate team brings together industry-leading expertise, 
            creative innovation, and a deep commitment to helping creators excel 
            in the digital landscape.
          </p>
          <AnimatedTooltip items={teamMembers} className="gap-8" />
          <div className="mt-16 text-center">
            <p className="text-white/70 max-w-2xl mx-auto">
              Backed by years of experience in content creation, marketing, and community 
              building, our team is dedicated to elevating creator voices and expanding 
              their reach across global audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
