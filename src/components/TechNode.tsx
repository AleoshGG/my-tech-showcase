import { motion } from "framer-motion";

interface TechNodeProps {
  name: string;
  iconSrc?: string;
  initials?: string;
  x: number;
  y: number;
  delay?: number;
  glowColor?: string;
}

const TechNode = ({ name, iconSrc, initials, x, y, delay = 0, glowColor = "217 91% 60%" }: TechNodeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ x: 8, y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className="absolute group cursor-pointer"
    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
  >
    {/* Glow layer behind the node */}
    <div
      className="absolute inset-0 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 scale-150"
      style={{ background: `radial-gradient(circle, hsl(${glowColor} / 0.6) 0%, hsl(${glowColor} / 0.15) 50%, transparent 70%)` }}
    />

    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[hsl(var(--surface-glass)/0.15)] bg-[hsl(var(--surface-glass)/0.06)] flex items-center justify-center overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_10px_30px_-10px_rgba(0,0,0,0.5)]">
      {iconSrc ? (
        <img
          src={iconSrc}
          alt={name}
          className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {initials || name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>

    {/* Tooltip popup */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none scale-90 group-hover:scale-100 z-10">
      <div className="bg-card border border-[hsl(var(--surface-glass)/0.1)] backdrop-blur-xl px-3 py-1.5 rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_10px_30px_-10px_rgba(0,0,0,0.5)]">
        <span className="font-mono-label whitespace-nowrap">{name}</span>
      </div>
    </div>
  </motion.div>
);

export default TechNode;
