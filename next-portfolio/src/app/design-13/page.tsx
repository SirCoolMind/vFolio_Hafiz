"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design13_BraunIndustrial } from "@/components/designs/Design13_BraunIndustrial";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design13Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design13_BraunIndustrial />
      <GlobalDesignSwitcher
        currentArchetype={13}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
