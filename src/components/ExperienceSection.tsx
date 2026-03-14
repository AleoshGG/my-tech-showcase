import DarkSection from "./DarkSection";
import SectionLabel from "./SectionLabel";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "AmberLab",
    year: "2024",
    description: "Sistema de gestión administrativa de un laboratorio de análisis clínicos",
    duration: "4 meses",
    role: "Líder del proyecto y líder del equipo de desarrollo Backend.",
  },
  {
    company: "PyBot",
    year: "2025",
    description: "Sistema de gestión administrativa de un laboratorio de análisis clínicos",
    duration: "4 meses",
    role: "Líder del proyecto y líder del equipo de desarrollo Backend.",
  },
  {
    company: "AmberLab",
    year: "2024",
    description: "Sistema de gestión administrativa de un laboratorio de análisis clínicos",
    duration: "4 meses",
    role: "Líder del proyecto y líder del equipo de desarrollo Backend.",
  },
  {
    company: "AmberLab",
    year: "2024",
    description: "Sistema de gestión administrativa de un laboratorio de análisis clínicos",
    duration: "4 meses",
    role: "Líder del proyecto y líder del equipo de desarrollo Backend.",
  },
];

const ExperienceSection = () => (
  <DarkSection className="py-[15vh]">
    <SectionLabel>Experiencia</SectionLabel>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mt-8">
      {/* Left: Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-muted-foreground text-sm leading-relaxed uppercase font-semibold tracking-wide">
          Full Stack Developer con experiencia en el desarrollo de APIs en JavaScript, Java, Python, Go, entre otros lenguajes. Enfocado en usar arquitecturas limpias, gestión de versiones con Git/GitHub, uso de contenedores con Docker, despliegues en AWS, y Azure, bases de datos relacionales y no relacionales, brokers como RabbitMQ. Dedicado también a desarrollar aplicaciones web usando frameworks como Angular y React.
        </p>
      </motion.div>

      {/* Right: Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} index={i} />
        ))}
      </div>
    </div>
  </DarkSection>
);

export default ExperienceSection;
