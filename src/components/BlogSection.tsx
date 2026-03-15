import { motion } from "framer-motion";
import DarkSection from "./DarkSection";
import SectionLabel from "./SectionLabel";

// Reemplaza los strings vacíos con el ID de tu video.
// Ejemplo: Para https://www.youtube.com/watch?v=dQw4w9WgXcQ, el ID es "dQw4w9WgXcQ"
const blogPosts = [
  { title: "Brokers", videoId: "IZh8wB9PSqo" },
  { title: "Clean Architecture", videoId: "X-fiPnrFFPE" },
  { title: "Patrones de Diseño", videoId: "q3YQy1lJutw" },
];

const BlogSection = () => (
  <DarkSection className="py-[15vh] pb-[20vh]">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <SectionLabel>Blog</SectionLabel>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      {blogPosts.map((post, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-surface-hover rounded-lg overflow-hidden group block"
        >
          <div className="aspect-video bg-secondary/50 overflow-hidden relative">
            {post.videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${post.videoId}?rel=0`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">Video</span>
              </div>
            )}
          </div>
          <div className="p-3">
            <p className="font-mono text-[10px] text-muted-foreground truncate">{post.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </DarkSection>
);

export default BlogSection;