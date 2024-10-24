import React from 'react';
import { motion } from 'framer-motion';

function Slide({ children }: { children: React.ReactNode })
{
    return (
        <motion.div
            className="h-full w-full flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

export default Slide;
