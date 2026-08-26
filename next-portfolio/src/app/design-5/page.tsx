"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design5_BrutalistDossier } from "@/components/designs/Design5_BrutalistDossier";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design5Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design5_BrutalistDossier />
      <GlobalDesignSwitcher
        currentArchetype={5}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
