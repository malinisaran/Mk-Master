"use client";

import { EnquiryModalProvider } from "@/contexts/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryModalProvider>
      {children}
      <EnquiryModal />
    </EnquiryModalProvider>
  );
}

