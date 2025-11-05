'use client'

import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";

interface ToastItem {
    id: number;
    message: string;
    success: boolean | null;
}

interface ToastContainerProps {
    toasts: ToastItem[];
    dict: any;
}

export default function ToastContainer({ toasts, dict }: ToastContainerProps) {
    return (
        <div className="fixed bottom-0 left-0 sm:left-auto sm:bottom-6 sm:right-6 flex flex-col gap-0 sm:gap-4 z-[99] w-full sm:w-auto">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        message={toast.message}
                        success={toast.success}
                        dict={dict}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
