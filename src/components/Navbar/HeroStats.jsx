import "./Hero.css";
import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    title: "Projects"
  },
  {
    number: "20+",
    title: "Clients"
  },
  {
    number: "100%",
    title: "Quality"
  },
  {
    number: "24/7",
    title: "Support"
  }
];

export default function HeroStats() {
  return (
    <motion.div
      className="hero-stats"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="stat-card"
          whileHover={{
            scale: 1.08,
            y: -8
          }}
          transition={{
            type: "spring",
            stiffness: 250
          }}
        >
          <h2>{item.number}</h2>

          <p>{item.title}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
