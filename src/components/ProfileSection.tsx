import { motion } from "framer-motion";
import DarkSection from "./DarkSection";
import SectionLabel from "./SectionLabel";
import TechGraph from "./TechGraph";
import RepositoryCard from "./RepositoryCard";
import { Github } from "lucide-react";

const repos = [
  { name: "Nombre del repositorio", description: "Esta es la descripción del repositorio en cuestión, es muy bonito pienso yo." },
  { name: "Nombre del repositorio", description: "Esta es la descripción del repositorio en cuestión, es muy bonito pienso yo." },
  { name: "Nombre del repositorio", description: "Esta es la descripción del repositorio en cuestión, es muy bonito pienso yo." },
  { name: "Nombre del repositorio", description: "Esta es la descripción del repositorio en cuestión, es muy bonito pienso yo." },
  { name: "Nombre del repositorio", description: "Esta es la descripción del repositorio en cuestión, es muy bonito pienso yo." },
];

const ProfileSection = () => (
  <DarkSection id="about" className="py-[15vh]">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <SectionLabel>Perfil Profesional</SectionLabel>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mt-8">
      {/* Left: Repositories - slide left to right, staggered */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">Top Repositories</span>
        </motion.div>
        <motion.a
          href="https://github.com/AleoshGG"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-6"
        >
          <Github className="w-4 h-4" />
          <span className="font-mono text-xs">github.com/AleoshGG</span>
        </motion.a>
        <div className="flex flex-col gap-3">
          {repos.map((repo, i) => (
            <RepositoryCard key={i} name={repo.name} description={repo.description} index={i} />
          ))}
        </div>
      </div>

      {/* Right: Tech Graph - slide right to left */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        <TechGraph />
      </motion.div>
    </div>
  </DarkSection>
);

export default ProfileSection;
