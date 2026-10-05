"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design19_CardDeck3D } from "@/components/designs/Design19_CardDeck3D";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design19Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design19_CardDeck3D />
      <GlobalDesignSwitcher
        currentArchetype={19}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
