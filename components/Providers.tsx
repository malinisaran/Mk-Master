"use client";

import { EnquiryModalProvider } from "@/contexts/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import PopupPoster from "@/components/PopupPoster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryModalProvider>
      {children}
      <EnquiryModal />
      <PopupPoster />
    </EnquiryModalProvider>
  );
}

