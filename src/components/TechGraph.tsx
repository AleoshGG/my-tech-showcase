import TechNode from "./TechNode";

const technologies = [
  { name: "JavaScript", initials: "JS", x: 30, y: 12, glow: "48 96% 53%" },
  { name: "TypeScript", initials: "TS", x: 48, y: 8, glow: "211 60% 48%" },
  { name: "React", initials: "Re", x: 65, y: 10, glow: "193 95% 58%" },
  { name: "Angular", initials: "Ng", x: 80, y: 16, glow: "0 70% 50%" },
  { name: "Next.js", initials: "Nx", x: 90, y: 28, glow: "0 0% 70%" },
  { name: "Java", initials: "Ja", x: 92, y: 44, glow: "15 80% 50%" },
  { name: "Kotlin", initials: "Kt", x: 90, y: 60, glow: "270 60% 55%" },
  { name: "Python", initials: "Py", x: 84, y: 74, glow: "210 60% 50%" },
  { name: "Go", initials: "Go", x: 75, y: 85, glow: "192 70% 50%" },
  { name: "Flask", initials: "Fl", x: 62, y: 92, glow: "0 0% 60%" },
  { name: "Node.js", initials: "No", x: 46, y: 94, glow: "120 50% 45%" },
  { name: "Docker", initials: "Dk", x: 32, y: 90, glow: "210 80% 55%" },
  { name: "AWS", initials: "AW", x: 20, y: 82, glow: "33 90% 50%" },
  { name: "Azure", initials: "Az", x: 12, y: 70, glow: "210 80% 55%" },
  { name: "MySQL", initials: "My", x: 8, y: 55, glow: "200 70% 45%" },
  { name: "PostgreSQL", initials: "Pg", x: 8, y: 40, glow: "210 60% 50%" },
  { name: "MongoDB", initials: "Mg", x: 12, y: 26, glow: "140 55% 42%" },
  { name: "Git", initials: "Gi", x: 20, y: 15, glow: "12 80% 50%" },
  { name: "RabbitMQ", initials: "RQ", x: 38, y: 30, glow: "25 90% 50%" },
  { name: "Redis", initials: "Rd", x: 62, y: 28, glow: "0 70% 50%" },
  { name: "GraphQL", initials: "GQ", x: 72, y: 38, glow: "320 70% 55%" },
  { name: "Terraform", initials: "Tf", x: 38, y: 72, glow: "265 60% 55%" },
  { name: "Kubernetes", initials: "K8", x: 62, y: 72, glow: "220 70% 55%" },
];

const centerX = 50;
const centerY = 50;

const TechGraph = () => {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
      {/* Connection lines — using viewBox percentages so lines go center-to-center of nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {technologies.map((tech, i) => (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={tech.x}
            y2={tech.y}
            stroke="hsl(240 5% 20%)"
            strokeWidth="0.15"
            strokeDasharray="1 1"
            className="animate-dash-flow"
          />
        ))}
      </svg>

      {/* Center label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-[hsl(var(--surface-glass)/0.1)] bg-[hsl(var(--surface-glass)/0.03)] backdrop-blur-md flex items-center justify-center">
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center leading-relaxed">
            Stack
            <br />
            Tecnológico
          </span>
        </div>
      </div>

      {/* Tech nodes */}
      {technologies.map((tech, i) => (
        <TechNode
          key={tech.name}
          name={tech.name}
          initials={tech.initials}
          x={tech.x}
          y={tech.y}
          delay={i * 0.04}
          glowColor={tech.glow}
        />
      ))}
    </div>
  );
};

export default TechGraph;
