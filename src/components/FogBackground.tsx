import { motion } from 'motion/react';

export function FogBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Fog layer 1 - Fast moving */}
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, rgba(34, 197, 94, 0) 70%)',
          filter: 'blur(60px)',
          top: '-20%',
          left: '-20%',
        }}
        animate={{
          x: [0, '100vw', 0],
          y: [0, '50vh', 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fog layer 2 - Medium speed */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.7) 0%, rgba(74, 222, 128, 0) 70%)',
          filter: 'blur(70px)',
          top: '40%',
          right: '-20%',
        }}
        animate={{
          x: [0, '-80vw', 0],
          y: [0, '-30vh', 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fog layer 3 - Diagonal movement */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(65px)',
          bottom: '-10%',
          left: '20%',
        }}
        animate={{
          x: ['0vw', '60vw', '0vw'],
          y: ['0vh', '-80vh', '0vh'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fog layer 4 - Slow large movement */}
      <motion.div
        className="absolute w-[1400px] h-[1400px] rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(134, 239, 172, 0.6) 0%, rgba(134, 239, 172, 0) 70%)',
          filter: 'blur(80px)',
          top: '60%',
          left: '50%',
        }}
        animate={{
          x: ['-50vw', '30vw', '-50vw'],
          y: ['-40vh', '20vh', '-40vh'],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fog layer 5 - Top center */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-55"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0) 65%)',
          filter: 'blur(50px)',
          top: '10%',
          left: '50%',
        }}
        animate={{
          x: ['-40vw', '40vw', '-40vw'],
          y: [0, '40vh', 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fog layer 6 - Bottom right */}
      <motion.div
        className="absolute w-[1100px] h-[1100px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(22, 163, 74, 0.7) 0%, rgba(22, 163, 74, 0) 70%)',
          filter: 'blur(75px)',
          bottom: '0%',
          right: '0%',
        }}
        animate={{
          x: [0, '-50vw', 0],
          y: [0, '-60vh', 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fog layer 7 - Pulsing center */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, rgba(74, 222, 128, 0) 70%)',
          filter: 'blur(90px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
