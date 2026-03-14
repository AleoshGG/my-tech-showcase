import { useRef, useEffect, useState } from "react";
import TechNode from "./TechNode";

const technologies = [
  { name: "JavaScript", initials: "JS", x: 42, y: 18 },
  { name: "TypeScript", initials: "TS", x: 55, y: 15 },
  { name: "React", initials: "Re", x: 68, y: 12 },
  { name: "Angular", initials: "Ng", x: 78, y: 20 },
  { name: "Java", initials: "Ja", x: 85, y: 30 },
  { name: "Python", initials: "Py", x: 22, y: 55 },
  { name: "Go", initials: "Go", x: 88, y: 50 },
  { name: "Node.js", initials: "No", x: 15, y: 35 },
  { name: "Docker", initials: "Dk", x: 80, y: 70 },
  { name: "AWS", initials: "AW", x: 85, y: 85 },
  { name: "MySQL", initials: "My", x: 20, y: 70 },
  { name: "PostgreSQL", initials: "Pg", x: 30, y: 82 },
  { name: "Flask", initials: "Fl", x: 40, y: 90 },
  { name: "Next.js", initials: "Nx", x: 55, y: 88 },
  { name: "Git", initials: "Gi", x: 30, y: 25 },
  { name: "RabbitMQ", initials: "RQ", x: 12, y: 48 },
  { name: "Azure", initials: "Az", x: 75, y: 82 },
  { name: "Kotlin", initials: "Kt", x: 90, y: 42 },
];

const centerX = 50;
const centerY = 50;

const TechGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
      {/* Connection lines */}
      <svg
        ref={svgRef}
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
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[hsl(var(--surface-glass)/0.1)] bg-[hsl(var(--surface-glass)/0.03)] backdrop-blur-md flex items-center justify-center">
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
          delay={i * 0.05}
        />
      ))}
    </div>
  );
};

export default TechGraph;
