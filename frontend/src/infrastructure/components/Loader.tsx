import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-blue-500 rounded-full"
            animate={{ y: ["0%", "-20%"], opacity: [1, 0.5, 1] }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.2,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
