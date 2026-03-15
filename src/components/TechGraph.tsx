import TechNode from "./TechNode";

const technologies = [
  // Nodos desplazados hacia los bordes para aumentar el radio
  { name: "JavaScript", initials: "JS", x: 26, y: 5, glow: "48 96% 53%", iconSrc:"/src/assets/js.webp" },
  { name: "TypeScript", initials: "TS", x: 48, y: 2, glow: "211 60% 48%", iconSrc:"/src/assets/ts.webp" },
  { name: "React", initials: "Re", x: 68, y: 2, glow: "193 95% 58%", iconSrc:"/src/assets/react.webp" },
  { name: "Angular", initials: "Ng", x: 86, y: 10, glow: "0 70% 50%", iconSrc:"/src/assets/angular.webp" },
  { name: "Next.js", initials: "Nx", x: 96, y: 25, glow: "0 0% 70%", iconSrc:"/src/assets/nestjs.webp" },
  { name: "Java", initials: "Ja", x: 98, y: 43, glow: "15 80% 50%", iconSrc:"/src/assets/java.webp" },
  { name: "Kotlin", initials: "Kt", x: 96, y: 61, glow: "270 60% 55%", iconSrc:"/src/assets/kotlin.webp" },
  { name: "Python", initials: "Py", x: 90, y: 78, glow: "210 60% 50%", iconSrc:"/src/assets/python.webp" },
  { name: "Go", initials: "Go", x: 80, y: 92, glow: "192 70% 50%", iconSrc:"/src/assets/go.webp" },
  { name: "Flask", initials: "Fl", x: 64, y: 98, glow: "0 0% 60%", iconSrc:"/src/assets/flask.webp" },
  { name: "Express", initials: "No", x: 45, y: 96, glow: "120 50% 45%", iconSrc:"/src/assets/express.webp" },
  { name: "Docker", initials: "Dk", x: 29, y: 98, glow: "210 80% 55%", iconSrc:"/src/assets/docker.webp" },
  { name: "AWS", initials: "AW", x: 14, y: 88, glow: "33 90% 50%", iconSrc:"/src/assets/aws.webp" },
  { name: "Jetpack Compose", initials: "Az", x: 5, y: 74, glow: "210 80% 55%", iconSrc:"/src/assets/jetpackcompose.webp" },
  { name: "MySQL", initials: "My", x: 2, y: 56, glow: "200 70% 45%", iconSrc:"/src/assets/mysql.webp" },
  { name: "PostgreSQL", initials: "Pg", x: 2, y: 39, glow: "210 60% 50%", iconSrc:"/src/assets/postgres.webp" },
  { name: "MongoDB", initials: "Mg", x: 5, y: 22, glow: "140 55% 42%", iconSrc:"/src/assets/mongo.webp" },
  { name: "Git", initials: "Gi", x: 14, y: 8, glow: "12 80% 50%", iconSrc:"/src/assets/git.webp"},
  
  // Nodos del anillo interior también expandidos
  { name: "RabbitMQ", initials: "RQ", x: 32, y: 20, glow: "25 90% 50%", iconSrc:"/src/assets/rabbitmq.webp" },
  { name: "Fast Api", initials: "Rd", x: 68, y: 17, glow: "0 70% 50%", iconSrc:"/src/assets/fastapi.webp" },
  { name: "NGINX", initials: "GQ", x: 80, y: 34, glow: "320 70% 55%", iconSrc:"/src/assets/nginx.webp" },
  { name: "Spring", initials: "Tf", x: 32, y: 83, glow: "265 60% 55%", iconSrc:"/src/assets/spring.webp" },
  { name: "Gin", initials: "K8", x: 68, y: 83, glow: "220 70% 55%", iconSrc:"/src/assets/gin.webp" },
];

const centerX = 50;
const centerY = 50;

const TechGraph = () => {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
      {/* Connection lines */}
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
          iconSrc={tech.iconSrc}
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