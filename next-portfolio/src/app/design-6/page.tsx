"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design6_VelvetAurora } from "@/components/designs/Design6_VelvetAurora";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design6Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design6_VelvetAurora />
      <GlobalDesignSwitcher
        currentArchetype={6}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
