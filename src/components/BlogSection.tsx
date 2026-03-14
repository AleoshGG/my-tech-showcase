import DarkSection from "./DarkSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const blogPosts = [
  { title: "Artículo de Blog #1", imageSrc: "" },
  { title: "Artículo de Blog #2", imageSrc: "" },
  { title: "Artículo de Blog #3", imageSrc: "" },
];

const BlogSection = () => (
  <DarkSection className="py-[15vh] pb-[20vh]">
    <SectionLabel>Blog</SectionLabel>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      {blogPosts.map((post, i) => (
        <motion.a
          key={i}
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-surface-hover rounded-lg overflow-hidden group block"
        >
          <div className="aspect-video bg-secondary/50 overflow-hidden">
            {post.imageSrc ? (
              <img src={post.imageSrc} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">Imagen</span>
              </div>
            )}
          </div>
          <div className="p-3">
            <p className="font-mono text-[10px] text-muted-foreground truncate">{post.title}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </DarkSection>
);

export default BlogSection;
