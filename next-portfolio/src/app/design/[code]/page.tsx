"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { GlobalDesignSwitcher } from "@/components/core/GlobalDesignSwitcher";
import { Design1_CyberHud } from "@/components/designs/Design1_CyberHud";
import { Design2_SwissLuxe } from "@/components/designs/Design2_SwissLuxe";
import { Design3_BentoHorizon } from "@/components/designs/Design3_BentoHorizon";
import { Design4_SpatialCosmos } from "@/components/designs/Design4_SpatialCosmos";
import { Design5_BrutalistDossier } from "@/components/designs/Design5_BrutalistDossier";
import { Design6_VelvetAurora } from "@/components/designs/Design6_VelvetAurora";
import { Design7_RetroTerminal } from "@/components/designs/Design7_RetroTerminal";
import { Design8_FilmReel } from "@/components/designs/Design8_FilmReel";
import { Design9_NeumorphicHardware } from "@/components/designs/Design9_NeumorphicHardware";
import { Design10_ParticleNexus } from "@/components/designs/Design10_ParticleNexus";
import { Design11_IsometricCity } from "@/components/designs/Design11_IsometricCity";
import { Design12_LiquidChrome } from "@/components/designs/Design12_LiquidChrome";
import { Design13_BraunIndustrial } from "@/components/designs/Design13_BraunIndustrial";
import { Design14_CodeStudioIDE } from "@/components/designs/Design14_CodeStudioIDE";
import { Design15_InfiniteCanvas } from "@/components/designs/Design15_InfiniteCanvas";
import { Design16_KineticRunway } from "@/components/designs/Design16_KineticRunway";
import { Design17_CockpitHud2099 } from "@/components/designs/Design17_CockpitHud2099";
import { Design18_PixelRPG } from "@/components/designs/Design18_PixelRPG";
import { Design19_CardDeck3D } from "@/components/designs/Design19_CardDeck3D";
import { Design20_AudioSynthesizer } from "@/components/designs/Design20_AudioSynthesizer";

export default function DynamicDesignIterationPage() {
  const params = useParams();
  const router = useRouter();
  const rawCode = (params?.code as string) || "1";

  let archetypeId = 1;
  const parsed = parseInt(rawCode.replace("design-", ""), 10);
  if (parsed >= 1 && parsed <= 20) archetypeId = parsed;

  const handleSelectDesign = (archId: number) => {
    router.push(`/design-${archId}`);
  };

  const renderActiveDesign = () => {
    switch (archetypeId) {
      case 1:
        return <Design1_CyberHud />;
      case 2:
        return <Design2_SwissLuxe />;
      case 3:
        return <Design3_BentoHorizon />;
      case 4:
        return <Design4_SpatialCosmos />;
      case 5:
        return <Design5_BrutalistDossier />;
      case 6:
        return <Design6_VelvetAurora />;
      case 7:
        return <Design7_RetroTerminal />;
      case 8:
        return <Design8_FilmReel />;
      case 9:
        return <Design9_NeumorphicHardware />;
      case 10:
        return <Design10_ParticleNexus />;
      case 11:
        return <Design11_IsometricCity />;
      case 12:
        return <Design12_LiquidChrome />;
      case 13:
        return <Design13_BraunIndustrial />;
      case 14:
        return <Design14_CodeStudioIDE />;
      case 15:
        return <Design15_InfiniteCanvas />;
      case 16:
        return <Design16_KineticRunway />;
      case 17:
        return <Design17_CockpitHud2099 />;
      case 18:
        return <Design18_PixelRPG />;
      case 19:
        return <Design19_CardDeck3D />;
      case 20:
        return <Design20_AudioSynthesizer />;
      default:
        return <Design1_CyberHud />;
    }
  };

  return (
    <main className="relative min-h-screen">
      {renderActiveDesign()}

      <GlobalDesignSwitcher
        currentArchetype={archetypeId}
        onSelectDesign={handleSelectDesign}
      />
    </main>
  );
}
