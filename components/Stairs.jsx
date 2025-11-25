import { animate, delay, motion } from "framer-motion"



const stairAnimation = {
  initial: {
    scaleX: 1,
  },
  animate: (index) => {
    // Center indices are 3 and 4 for 8 steps
    // We want center to animate first (open)
    const center = 3.5;
    const delay = Math.abs(index - center) * 0.1;
    
    return {
      scaleX: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay: delay,
      },
    };
  },
  exit: (index) => {
    // We want outside to animate first (close)
    const center = 3.5;
    // Max distance is 3.5. Reverse it.
    const delay = (3.5 - Math.abs(index - center)) * 0.1;
    
    return {
      scaleX: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay: delay,
      },
    };
  },
};

const Stairs = () => {
  return (
    <>
      {/*render 8 motion divs ,each representing a step of the stairs*/}

      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={index}
            className="h-full w-full bg-black relative"
            style={{
                transformOrigin: index < 4 ? "left" : "right"
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs