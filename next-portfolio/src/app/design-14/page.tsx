"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Design14_CodeStudioIDE } from "@/components/designs/Design14_CodeStudioIDE";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";

export default function Design14Page() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      <Design14_CodeStudioIDE />
      <GlobalDesignSwitcher
        currentArchetype={14}
        onSelectDesign={(id) => router.push(`/design-${id}`)}
      />
    </main>
  );
}
