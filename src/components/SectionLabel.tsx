interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <h2 className="font-mono text-sm uppercase tracking-[0.25em] text-primary mb-10 border-b border-primary/30 pb-3 inline-block">
    {children}
  </h2>
);

export default SectionLabel;
