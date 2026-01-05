"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PopupPoster() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/popupposter.jpg"
                  alt="Exclusive Offer - Website Development"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

