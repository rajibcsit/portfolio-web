import { motion } from "framer-motion";

const variants = {
  default: { width: 0, opacity: 0 },
  active: { width: "100%", opacity: 1 },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        active ? "text-purple-600" : "text-gray-700"
      } hover:text-purple-500 focus:outline-none`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-purple-500 rounded-lg shadow-md"
        style={{ borderRadius: "4px" }}
      ></motion.div>
    </button>
  );
};

export default TabButton;
