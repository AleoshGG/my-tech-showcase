import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Github, Send, Linkedin, MessageCircle, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "#", label: "Email" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image with mask */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Developer workspace"
          className="w-full h-full object-cover hero-mask opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 max-w-6xl mx-auto w-full">
        <a href="#about" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300">
          Sobre mí
        </a>
        <a
          href="#"
          className="glass-surface-hover px-5 py-2 rounded-md font-mono text-xs uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors duration-300"
        >
          Descargar CV
        </a>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-6xl mx-auto w-full px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-end">
          {/* Left: Title */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6"
            >
              aleosh.online
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] text-foreground"
            >
              INGENIERO
              <br />
              <span className="text-gradient-primary">DE</span>
              <br />
              SOFTWARE
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10"
            >
              <p className="text-foreground font-medium text-lg">Alexis Guzmán</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                +52 9671920196 | aleoguzman092@gmail.com
              </p>
            </motion.div>
          </div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <p className="text-3xl md:text-4xl italic font-light text-foreground/80 font-serif">
              contacto
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-lg glass-surface-hover flex items-center justify-center group"
                >
                  {/* Placeholder: replace with real brand icons/images */}
                  <Icon className="w-5 h-5 text-muted-foreground grayscale group-hover:grayscale-0 group-hover:text-primary transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
