import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  year: string;
  description: string;
  duration: string;
  role: string;
  /** Placeholder for a real project screenshot */
  imageSrc?: string;
  index: number;
}

const ExperienceCard = ({ company, year, description, duration, role, imageSrc, index }: ExperienceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="glass-surface-hover rounded-lg overflow-hidden group"
  >
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-foreground">{company}</span>
        <span className="font-mono-label">{year}</span>
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed mb-3">{description}</p>
      <div className="space-y-1">
        <p className="font-mono text-[10px] text-muted-foreground">
          <span className="text-foreground/70">Duración:</span> {duration}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          <span className="text-foreground/70">Rol:</span> {role}
        </p>
      </div>
    </div>
    {/* Image placeholder */}
    <div className="h-32 bg-secondary/50 overflow-hidden">
      {imageSrc ? (
        <img src={imageSrc} alt={company} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">Imagen del proyecto</span>
        </div>
      )}
    </div>
  </motion.div>
);

export default ExperienceCard;
