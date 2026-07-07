import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

type Toast = {
  id: number;
  message: string;
};

let toastId = 0;
const listeners = new Set<(toast: Toast) => void>();

export function showToast(message: string) {
  const toast: Toast = { id: ++toastId, message };
  listeners.forEach((fn) => fn(toast));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3000);
    };
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  return (
    <div className="fixed bottom-24 md:bottom-6 start-1/2 -translate-x-1/2 z-[70] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-stone-900 text-white px-5 py-3 rounded-full shadow-xl shadow-stone-900/30 flex items-center gap-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-xl"
          >
            <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
