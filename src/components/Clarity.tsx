"use client";

import { useEffect } from "react";

export default function Clarity() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    if (projectId) {
      import("@microsoft/clarity")
        .then((m) => {
          const clarity = m.default;
          clarity.init(projectId);
        })
        .catch((err) => {
          console.error("Failed to load Microsoft Clarity:", err);
        });
    }
  }, []);

  return null;
}
