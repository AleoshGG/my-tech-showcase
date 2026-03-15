import { motion } from "framer-motion";

interface RepositoryCardProps {
  name: string;
  description: string;
  index: number;
  url: string;
}

const RepositoryCard = ({ name, description, index, url }: RepositoryCardProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15 + index * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="glass-surface-hover rounded-lg p-4 cursor-pointer block"
  >
    <h4 className="font-mono text-xs font-semibold text-foreground tracking-wide">{name}</h4>
    <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">{description}</p>
  </motion.a>
);

export default RepositoryCard;
