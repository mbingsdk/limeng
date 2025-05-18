import { motion } from 'framer-motion'

// Animasi dasar
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const scaleIn = {
  hidden: { scale: 0.95 },
  visible: { scale: 1 }
}

// Variants untuk stagger effect
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Hologram effect
export const hologramEffect = {
  hidden: { opacity: 0, rotateX: 5 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  }
}

// Glitch effect
export const glitchEffect = {
  hidden: { x: 0 },
  visible: {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1]
    }
  }
}

// Komponen motion yang sudah dikonfigurasi
export const FadeInUp = ({ children, ...props }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    {...props}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, ...props }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={scaleIn}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, ...props }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerChild = ({ children, ...props }) => (
  <motion.div variants={staggerItem} {...props}>
    {children}
  </motion.div>
)