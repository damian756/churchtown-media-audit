"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Hotel, Trophy, Briefcase, Building2, ArrowRight } from "lucide-react";

interface SectorsDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const sectors = [
  {
    name: "Hospitality & Tourism",
    href: "/sectors/hospitality",
    description: "Hotels, restaurants, venues: Southport & Blackpool",
    icon: Hotel,
  },
  {
    name: "Golf Clubs",
    href: "/sectors/golf",
    description: "Championship and members' clubs: the coast and beyond",
    icon: Trophy,
  },
  {
    name: "Professional Services",
    href: "/sectors/professional-services",
    description: "Solicitors, accountants, financial advisers",
    icon: Briefcase,
  },
  {
    name: "Property & Development",
    href: "/sectors/property",
    description: "Developers, estate agents, commercial property",
    icon: Building2,
  },
];

export default function SectorsDropdown({ isMobile = false, onItemClick }: SectorsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left text-3xl font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between"
        >
          Sectors
          <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="mt-4 pl-4 space-y-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.href}
                  href={sector.href}
                  onClick={handleClick}
                  className="flex items-start gap-3 group"
                >
                  <Icon className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{sector.name}</div>
                    <div className="text-sm text-slate-400 mt-0.5">{sector.description}</div>
                  </div>
                </Link>
              );
            })}
            <Link
              href="/sectors"
              onClick={handleClick}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm"
            >
              All sectors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-bold text-slate-200 hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200">
        Sectors <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] h-2 z-[49]" />
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 p-5"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4 pb-3 border-b border-slate-800">
              Southport &amp; Blackpool
            </p>
            <div className="space-y-1">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <Link
                    key={sector.href}
                    href={sector.href}
                    onClick={handleClick}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="bg-blue-600/20 rounded-lg p-1.5 shrink-0">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{sector.name}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{sector.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
