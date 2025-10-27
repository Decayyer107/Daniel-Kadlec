'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
    success: null | boolean;
}

export default function Toast({ message, show, onClose, success }: ToastProps) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => onClose(), 3000);
            return () => clearTimeout(timer);
        }
    }, [show, 3000, onClose]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className={`
                        fixed z-50
                        bottom-6 right-6
                        px-6 py-4 rounded-xl shadow-lg text-sm
                        ${message.includes("success") ? "bg-green-primary text-black" : "bg-red-error text-white"}
                  `}
                >
                    {message}
                </motion.div>

            )}
        </AnimatePresence>
    );
}
