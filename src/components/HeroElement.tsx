import { motion } from "framer-motion";

export default function HeroElement() {
    return (
        <motion.div
            className="absolute top-[-250px] md:top-[-300px] right-[-550px] xs:right-[-500px] rotate-[320deg] flex flex-col gap-8 z-0 scale-50 xs:scale-75 md:scale-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
            <div className="hero-element" />
            <div className="hero-element -translate-x-[100px]" />
            <div className="hero-element" />
        </motion.div>
    );
}
