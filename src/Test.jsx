import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.3 } }),
    hidden: { opacity: 0, y: -100 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate={open ? 'visible' : 'hidden'} variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <button onClick={() => setOpen(prev => !prev)}>Click</button>
    </div>
  );
};

export default Test;