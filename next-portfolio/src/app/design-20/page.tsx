"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design20_AudioSynthesizer } from "@/components/designs/Design20_AudioSynthesizer";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design20Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design20_AudioSynthesizer />
      <GlobalDesignSwitcher
        currentArchetype={20}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
