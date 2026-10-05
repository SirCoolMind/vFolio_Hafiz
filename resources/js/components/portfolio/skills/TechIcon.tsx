import React, { useState } from "react";
import { RichSkill } from "./skills-data";

interface TechIconProps {
  skill: RichSkill;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const TechIcon: React.FC<TechIconProps> = ({ skill, className = "", size = "md" }) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: "w-7 h-7 p-1 rounded-lg text-xs",
    md: "w-10 h-10 p-1.5 rounded-xl text-sm",
    lg: "w-14 h-14 p-2 rounded-2xl text-base",
  }[size];

  const iconSizes = {
    sm: 17,
    md: 22,
    lg: 32,
  }[size];

  // Render authentic SVG glyph based on iconType
  const renderSvgGlyph = () => {
    switch (skill.iconType) {
      case "vue":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path d="M12 21L1.75 3.25h3.9L12 14.1 18.35 3.25h3.9L12 21z" fill="#42B883" />
            <path d="M12 14.1L6.7 4.9h3.4L12 8.5l1.9-3.6h3.4L12 14.1z" fill="#35495E" />
          </svg>
        );

      case "blade":
      case "laravel":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M3 7.5L12 2l9 5.5v11l-9 5.5-9-5.5V7.5z"
              stroke="#FF2D20"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M3 7.5L12 13m0 0l9-5.5M12 13v11"
              stroke="#FF2D20"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );

      case "react":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.6" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.5"
              transform="rotate(60 12 12)"
              stroke="#61DAFB"
              strokeWidth="1.6"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.5"
              transform="rotate(120 12 12)"
              stroke="#61DAFB"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
          </svg>
        );

      case "vite":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M20.8 4.2L12.5 19.8C12.3 20.2 11.7 20.2 11.5 19.8L3.2 4.2C2.9 3.7 3.3 3 3.9 3H20.1C20.7 3 21.1 3.7 20.8 4.2Z"
              fill="url(#viteGradientDark)"
            />
            <path
              d="M14.5 3L8.5 12H13L10.5 19L17.5 9.5H13L14.5 3Z"
              fill="#FFD025"
              stroke="#FFA800"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="viteGradientDark" x1="3" y1="3" x2="21" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#41D1FF" />
                <stop offset="1" stopColor="#BD34FE" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "npm":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect width="24" height="24" rx="3" fill="#CB3837" />
            <path d="M4 6h16v12h-8v-9h-4v9H4V6z" fill="#FFFFFF" />
          </svg>
        );

      case "pnpm":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect x="3" y="3" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="9.5" y="3" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="16" y="3" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="3" y="9.5" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="16" y="9.5" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="3" y="16" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="9.5" y="16" width="5.5" height="5.5" rx="1" fill="#F69220" />
            <rect x="16" y="16" width="5.5" height="5.5" rx="1" fill="#4A4A4A" />
          </svg>
        );

      case "nodejs":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
              fill="#5FA04E"
              stroke="#5FA04E"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M12 6.5L17 9.5V14.5L12 17.5L7 14.5V9.5L12 6.5Z"
              fill="#FFFFFF"
            />
          </svg>
        );

      case "latex":
        return (
          <svg viewBox="0 0 46 22" width={iconSizes * 1.45} height={iconSizes * 0.72} fill="none">
            <text x="3" y="16" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900" fontSize="13" fill="currentColor">L</text>
            <text x="11" y="12" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900" fontSize="10" fill="currentColor">A</text>
            <text x="19" y="16" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900" fontSize="13" fill="currentColor">T</text>
            <text x="27" y="18" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900" fontSize="11" fill="currentColor">E</text>
            <text x="35" y="16" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900" fontSize="13" fill="currentColor">X</text>
          </svg>
        );

      case "clickhouse":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect x="2" y="8" width="1.8" height="8" rx="0.9" fill="#FFCC00" />
            <rect x="4.5" y="5" width="1.8" height="14" rx="0.9" fill="#FFCC00" />
            <rect x="7" y="10" width="1.8" height="4" rx="0.9" fill="#FFCC00" />
            <rect x="9.5" y="7" width="1.8" height="10" rx="0.9" fill="#FFCC00" />
            <rect x="12" y="3" width="1.8" height="18" rx="0.9" fill="#FF3333" />
            <rect x="14.5" y="6" width="1.8" height="12" rx="0.9" fill="#FFCC00" />
            <rect x="17" y="8" width="1.8" height="8" rx="0.9" fill="#FFCC00" />
            <rect x="19.5" y="10" width="1.8" height="4" rx="0.9" fill="#FFCC00" />
          </svg>
        );

      case "mysql":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#38BDF8" strokeWidth="1.8" />
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#38BDF8" strokeWidth="1.8" />
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#38BDF8" strokeWidth="1.8" />
          </svg>
        );

      case "redis":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#EF4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case "mongodb":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M12 2C12 2 6 7.5 6 13.5C6 17.5 8.7 21 12 22C15.3 21 18 17.5 18 13.5C18 7.5 12 2 12 2Z"
              stroke="#10B981"
              strokeWidth="1.6"
              fill="#10B981"
              fillOpacity="0.25"
            />
            <path d="M12 3v18" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );

      case "gitlab":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path d="M12 21.5L16.2 8.5H7.8L12 21.5Z" fill="#E24329" />
            <path d="M12 21.5L7.8 8.5H1.6L12 21.5Z" fill="#FC6D26" />
            <path d="M1.6 8.5L0.2 12.8C0.05 13.2 0.2 13.7 0.6 14L12 21.5L7.8 8.5H1.6Z" fill="#FCA326" />
            <path d="M1.6 8.5H7.8L5.5 1.5C5.3 0.9 4.5 0.9 4.3 1.5L1.6 8.5Z" fill="#E24329" />
            <path d="M12 21.5L16.2 8.5H22.4L12 21.5Z" fill="#FC6D26" />
            <path d="M22.4 8.5L23.8 12.8C23.95 13.2 23.8 13.7 23.4 14L12 21.5L16.2 8.5H22.4Z" fill="#FCA326" />
            <path d="M22.4 8.5H16.2L18.5 1.5C18.7 0.9 19.5 0.9 19.7 1.5L22.4 8.5Z" fill="#E24329" />
          </svg>
        );

      case "etl":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect x="3" y="4" width="6" height="5" rx="1.5" fill="#EF4444" />
            <rect x="3" y="15" width="6" height="5" rx="1.5" fill="#EF4444" />
            <rect x="15" y="9.5" width="6" height="5" rx="1.5" fill="#10B981" />
            <path d="M9 6.5h3a2 2 0 012 2v1m0 0l-1.5-1.5M14 9.5l1.5-1.5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 17.5h3a2 2 0 002-2v-1m0 0l-1.5 1.5M14 14.5l1.5 1.5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case "docker":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect x="6" y="9" width="3" height="3" rx="0.5" fill="#0284C7" />
            <rect x="10" y="9" width="3" height="3" rx="0.5" fill="#0284C7" />
            <rect x="14" y="9" width="3" height="3" rx="0.5" fill="#0284C7" />
            <rect x="10" y="5" width="3" height="3" rx="0.5" fill="#0284C7" />
            <path
              d="M2 13c1.5 0 2.5.5 3.5 1.5 1 1 2.5 1.5 4.5 1.5 3 0 4.5-1 6-1 2 0 4 1 6 1s1.5-.5 2-1c-.5 4-4.5 6-11 6S2.5 17 2 13z"
              stroke="#0284C7"
              strokeWidth="1.8"
              fill="#0284C7"
              fillOpacity="0.2"
              strokeLinejoin="round"
            />
          </svg>
        );

      case "laragon":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect x="3" y="4" width="18" height="16" rx="3" stroke="#06B6D4" strokeWidth="1.8" fill="#06B6D4" fillOpacity="0.1" />
            <path d="M7 8h10M7 12h6M7 16h4" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="17" cy="15" r="1.5" fill="#06B6D4" />
          </svg>
        );

      case "linux":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M12 3c-2.5 0-4 2-4 5v4c0 3 1.5 6 4 6s4-3 4-6V8c0-3-1.5-5-4-5z"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="8" r="1" fill="#F59E0B" />
            <circle cx="14" cy="8" r="1" fill="#F59E0B" />
            <ellipse cx="12" cy="13" rx="2" ry="3" fill="currentColor" fillOpacity="0.2" />
            <path d="M8 19c-2 0-3 1-3 2h14c0-1-1-2-3-2H8z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.2" />
          </svg>
        );

      case "git":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <circle cx="6" cy="6" r="2.5" stroke="#F97316" strokeWidth="1.6" />
            <circle cx="6" cy="18" r="2.5" stroke="#F97316" strokeWidth="1.6" />
            <circle cx="18" cy="10" r="2.5" stroke="#F97316" strokeWidth="1.6" />
            <path d="M6 8.5v7M8.5 6H11a4 4 0 014 4v0" stroke="#F97316" strokeWidth="1.6" />
          </svg>
        );

      case "antigravity":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <circle cx="12" cy="12" r="10" stroke="#00F5FF" strokeWidth="1.4" strokeDasharray="3 2" />
            <path
              d="M12 4L19 16.5H5L12 4Z"
              stroke="#818CF8"
              strokeWidth="1.8"
              fill="#818CF8"
              fillOpacity="0.25"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12.5" r="2.5" fill="#00F5FF" />
            <path d="M12 2v2M12 20v2" stroke="#00F5FF" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );

      case "claude":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M12 2L13.8 8.2L19.5 5.5L15.8 10.8L22 12L15.8 13.2L19.5 18.5L13.8 15.8L12 22L10.2 15.8L4.5 18.5L8.2 13.2L2 12L8.2 10.8L4.5 5.5L10.2 8.2L12 2Z"
              fill="#D97757"
            />
          </svg>
        );

      case "deepseek":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M21 9C20.5 7 18.5 5 15.5 4.5C12.5 4 8 5.5 5 8C2.5 10 1.5 13 2 15.5C2.5 18 5 19.5 8 19C10.5 18.5 12 17 14 16C16.5 14.8 19 15.5 21.5 14C22.2 13.5 22.5 12.5 22 11.5L21 9Z"
              fill="#1D72F3"
            />
            <circle cx="6" cy="11.5" r="1.2" fill="#FFFFFF" />
            <path
              d="M8.5 15C9.5 13.5 11.5 12.5 13.5 13C12.5 14.5 10.5 15.5 8.5 15Z"
              fill="#FFFFFF"
            />
            <path
              d="M19 14.5L22.5 17C22.8 17.2 23.2 16.8 23 16.5L21.5 14"
              stroke="#1D72F3"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        );

      case "local-agent":
      case "cpu":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#10B981" strokeWidth="1.8" fill="#10B981" fillOpacity="0.15" />
            <path d="M8 10L11 12L8 14" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 14H16" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="18" cy="6" r="1.5" fill="#10B981" />
            <path d="M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2M20 9h2m-2 6h2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case "nvidia":
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <path
              d="M11.9 4C6.5 4 3 8.3 3 13.2C3 17.5 6.4 20 10.1 20C14.8 20 19 16.5 19 11.8H12V13.8H16.8C16.3 16.5 13.8 18 10.5 18C7.5 18 5.2 15.8 5.2 13C5.2 10.2 7.8 6 12 6C15 6 17.2 7.8 17.8 9.5H20C19.2 6.5 16 4 11.9 4Z"
              fill="#76B900"
            />
            <circle cx="12" cy="13.2" r="2.2" fill="#76B900" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 24 24" width={iconSizes} height={iconSizes} fill="none">
            <circle cx="12" cy="12" r="9" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M12 7v5l3 3" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 transition-transform duration-200 bg-stage border border-white/10 text-white ${sizeClasses} ${className}`}
      style={{
        boxShadow: "0 2px 4px rgb(0 0 0 / 0.18)",
      }}
    >
      {skill.logoUrl && !imgError ? (
        <img
          src={skill.logoUrl}
          alt={skill.name}
          className="w-full h-full object-contain filter drop-shadow-sm"
          onError={() => setImgError(true)}
        />
      ) : (
        renderSvgGlyph()
      )}
    </div>
  );
};
