"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design18_PixelRPG } from "@/components/designs/Design18_PixelRPG";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design18Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design18_PixelRPG />
      <GlobalDesignSwitcher
        currentArchetype={18}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
