import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
        <motion.div
            className="page-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease:"easeInOut", duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
