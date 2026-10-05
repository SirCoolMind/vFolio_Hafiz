"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design1_CyberHud } from "@/components/designs/Design1_CyberHud";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design1Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design1_CyberHud />
      <GlobalDesignSwitcher
        currentArchetype={1}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
