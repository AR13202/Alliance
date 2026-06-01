"use client";

import React, { useEffect } from "react";
import { Check, X } from "lucide-react";

interface SuccessPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessPopover({ isOpen, onClose }: SuccessPopoverProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#131b2e]/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Popover Card */}
      <div className="relative w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl border border-gray-100 transition-all duration-300 scale-in animate-in zoom-in-95 duration-200">
        
        {/* Close Cross Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-[#46464f] hover:text-[#131b2e] hover:bg-gray-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Success Tick Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
          <Check className="h-8 w-8 stroke-[3]" />
        </div>

        {/* Text details */}
        <h3 className="text-xl font-extrabold text-[#1a1b4b] font-headline mb-2 uppercase tracking-wide">
          Thank You!
        </h3>
        <p className="text-sm text-[#46464f] leading-relaxed font-body px-2">
          Your Inquiry has been received we will contact you soon.
        </p>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-[#1a1b4b] text-white font-headline text-xs font-bold tracking-widest rounded-md hover:bg-primary/95 transition-all active:scale-[0.98] shadow-lg shadow-[#1a1b4b]/10 uppercase"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
