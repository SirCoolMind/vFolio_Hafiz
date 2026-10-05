"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design11_IsometricCity } from "@/components/designs/Design11_IsometricCity";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design11Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design11_IsometricCity />
      <GlobalDesignSwitcher
        currentArchetype={11}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
