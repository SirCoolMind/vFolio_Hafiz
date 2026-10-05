"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design3_BentoHorizon } from "@/components/designs/Design3_BentoHorizon";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design3Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design3_BentoHorizon />
      <GlobalDesignSwitcher
        currentArchetype={3}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
