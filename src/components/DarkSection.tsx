import { ReactNode } from "react";

interface DarkSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const DarkSection = ({ children, className = "", id }: DarkSectionProps) => (
  <section id={id} className={`relative bg-background overflow-hidden ${className}`}>
    <div className="absolute inset-0 noise-overlay pointer-events-none" />
    <div className="absolute inset-0 section-glow pointer-events-none" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      {children}
    </div>
  </section>
);

export default DarkSection;
