import { motion } from "framer-motion";

/** Fade + rise into view once. Respects reduced motion via MotionConfig. */
const Reveal = ({ children, delay = 0, y = 16, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
