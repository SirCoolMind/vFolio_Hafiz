"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design9_NeumorphicHardware } from "@/components/designs/Design9_NeumorphicHardware";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design9Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design9_NeumorphicHardware />
      <GlobalDesignSwitcher
        currentArchetype={9}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
