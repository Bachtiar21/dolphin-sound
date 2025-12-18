"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function MotionSection({ children, delay = 0 }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
