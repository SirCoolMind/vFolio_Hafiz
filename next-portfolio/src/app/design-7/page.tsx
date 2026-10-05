"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design7_RetroTerminal } from "@/components/designs/Design7_RetroTerminal";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design7Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design7_RetroTerminal />
      <GlobalDesignSwitcher
        currentArchetype={7}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
