"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design16_KineticRunway } from "@/components/designs/Design16_KineticRunway";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design16Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design16_KineticRunway />
      <GlobalDesignSwitcher
        currentArchetype={16}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
