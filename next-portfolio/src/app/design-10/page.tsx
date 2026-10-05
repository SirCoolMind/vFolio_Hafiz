"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design10_ParticleNexus } from "@/components/designs/Design10_ParticleNexus";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design10Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design10_ParticleNexus />
      <GlobalDesignSwitcher
        currentArchetype={10}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
