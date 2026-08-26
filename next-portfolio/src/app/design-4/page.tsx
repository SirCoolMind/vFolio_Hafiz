"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design4_SpatialCosmos } from "@/components/designs/Design4_SpatialCosmos";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design4Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design4_SpatialCosmos />
      <GlobalDesignSwitcher
        currentArchetype={4}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
