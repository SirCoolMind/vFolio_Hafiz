"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design8_FilmReel } from "@/components/designs/Design8_FilmReel";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design8Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design8_FilmReel />
      <GlobalDesignSwitcher
        currentArchetype={8}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
