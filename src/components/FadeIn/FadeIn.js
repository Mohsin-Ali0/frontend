import { motion } from "framer-motion";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  initialY = 20,
  animateY = 0,
  as = "div",
  once = true, // Only animate once
  threshold = 0.2, // Percentage of element visible to trigger
  ...props
}) => {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: animateY }}
      viewport={{ once: once, margin: "-20%", threshold: threshold }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
