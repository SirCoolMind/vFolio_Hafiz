"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design12_LiquidChrome } from "@/components/designs/Design12_LiquidChrome";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design12Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design12_LiquidChrome />
      <GlobalDesignSwitcher
        currentArchetype={12}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
