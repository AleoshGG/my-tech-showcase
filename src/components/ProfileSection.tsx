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
    <SectionLabel>Perfil Profesional</SectionLabel>

    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mt-8">
      {/* Left: Repositories */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">Top Repositories</span>
        </div>
        <a
          href="https://github.com/AleoshGG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-6"
        >
          <Github className="w-4 h-4" />
          <span className="font-mono text-xs">github.com/AleoshGG</span>
        </a>
        <div className="flex flex-col gap-3">
          {repos.map((repo, i) => (
            <RepositoryCard key={i} name={repo.name} description={repo.description} index={i} />
          ))}
        </div>
      </div>

      {/* Right: Tech Graph */}
      <div className="flex items-center justify-center">
        <TechGraph />
      </div>
    </div>
  </DarkSection>
);

export default ProfileSection;
