import { motion } from "framer-motion";
import DarkSection from "./DarkSection";
import SectionLabel from "./SectionLabel";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "AmberLab",
    year: "2024",
    description: "Sistema de gestión administrativa de un laboratorio de análisis clínicos",
    duration: "4 meses",
    role: "Líder del proyecto y líder del equipo de desarrollo Backend.",
    imgeSrc: "/src/assets/lab.webp"
  },
  {
    company: "PyBot",
    year: "2025",
    description: "Desarrollo de un sistema robótico autónomi limpiador y seleccionador de residuos plástico y de aluminio.",
    duration: "4 meses",
    role: "Liderl del equipo Bakckend, Arquitectura de Software, DevOps.",
    imgeSrc: "/src/assets/py.webp"
  },
  {
    company: "LearnSS",
    year: "2026",
    description: "Aplicación móvil que responde a la necesidad de crear apps que sirvan para bien, en este caso habre la puesta para que niños puedan explorar el Sistema Solar, una app de divulgación científica.",
    duration: "4 meses",
    role: "Desarrollador Móvil",
    imgeSrc: "/src/assets/ss.webp"
  },
  {
    company: "Unidos por la Sangre",
    year: "2024",
    description: "Sistema de gestión de donadores de sangre y personas que buscan donar su sangre. Una aplicación itermediaria para encontrar esperanza de vida en personas que tienen el corazón de colaborar.",
    duration: "4 meses",
    role: "Desarrollador Backend.",
    imgeSrc: "/src/assets/ups.webp"
  },
];

const ExperienceSection = () => (
  <DarkSection className="py-[15vh]">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <SectionLabel>Experiencia</SectionLabel>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mt-8">
      {/* Left: Description - slide from left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-muted-foreground text-sm leading-relaxed uppercase font-semibold tracking-wide">
          Full Stack Developer con experiencia en el desarrollo de APIs en JavaScript, Java, Python, Go, entre otros lenguajes. Enfocado en usar arquitecturas limpias, gestión de versiones con Git/GitHub, uso de contenedores con Docker, despliegues en AWS, y Azure, bases de datos relacionales y no relacionales, brokers como RabbitMQ. Dedicado también a desarrollar aplicaciones web usando frameworks como Angular y React.
        </p>
      </motion.div>

      {/* Right: Cards grid - slide from right, staggered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} index={i} imageSrc={exp.imgeSrc}/>
        ))}
      </div>
    </div>
  </DarkSection>
);

export default ExperienceSection;
