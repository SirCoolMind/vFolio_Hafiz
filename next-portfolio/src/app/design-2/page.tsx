"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design2_SwissLuxe } from "@/components/designs/Design2_SwissLuxe";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design2Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design2_SwissLuxe />
      <GlobalDesignSwitcher
        currentArchetype={2}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
