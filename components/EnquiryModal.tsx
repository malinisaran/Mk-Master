"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export default function EnquiryModal() {
  const { isOpen, closeModal } = useEnquiryModal();

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Enquiry Form</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              {/* Modal Body - Iframe */}
              <div className="flex-1 overflow-hidden p-2 sm:p-4 md:p-6">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
                  <iframe
                    aria-label="Enquiry Form"
                    frameBorder="0"
                    style={{
                      height: '100%',
                      width: '100%',
                      border: 'none'
                    }}
                    src="https://forms.zohopublic.in/manoharkannandynamictechnolog1/form/EnquiryForm/formperma/_BdnILSWlUMVcE0dg9DaGLhYZXSmUHVllIzxQ_ZPJ1U"
                    className="w-full h-full rounded-lg"
                    allow="fullscreen"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

