"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design17_CockpitHud2099 } from "@/components/designs/Design17_CockpitHud2099";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design17Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design17_CockpitHud2099 />
      <GlobalDesignSwitcher
        currentArchetype={17}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
