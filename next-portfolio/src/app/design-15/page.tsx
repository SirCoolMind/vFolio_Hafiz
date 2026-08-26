"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design15_InfiniteCanvas } from "@/components/designs/Design15_InfiniteCanvas";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design15Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design15_InfiniteCanvas />
      <GlobalDesignSwitcher
        currentArchetype={15}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
