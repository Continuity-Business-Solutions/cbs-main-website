"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeInViewProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export default function FadeInView({
  children,
  delay = 0,
  className = "",
  ...props
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
