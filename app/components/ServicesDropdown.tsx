"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Code, LineChart, Briefcase, Zap } from "lucide-react";

interface ServicesDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function ServicesDropdown({ isMobile = false, onItemClick }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      name: "Enterprise Web Design",
      href: "/services/web-design",
      description: "Next.js websites built for speed and conversions",
      icon: Code,
    },
    {
      name: "Data-Driven SEO",
      href: "/services/seo",
      description: "Technical SEO that delivers rankings and revenue",
      icon: LineChart,
    },
    {
      name: "Small Business Websites",
      href: "/services/small-business",
      description: "Professional sites for growing businesses",
      icon: Briefcase,
    },
    {
      name: "Free SEO Audit",
      href: "/audit",
      description: "See exactly where you're losing traffic",
      icon: Zap,
    },
  ];

  const handleClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  // MOBILE VERSION
  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left text-3xl font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between"
        >
          Services
          <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        
        {isOpen && (
          <div className="mt-4 pl-4 space-y-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={handleClick}
                  className="block group"
                >
                  <div className="flex items-start gap-3">
                    <IconComponent className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // DESKTOP VERSION
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-bold text-slate-200 hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200 relative z-[101]">
        Services <ChevronDown className="w-4 h-4" />
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <>
          {/* Invisible bridge to prevent menu closing when moving mouse down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] max-w-[95vw] h-2 z-[99]" />
          
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] max-w-[95vw] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[100] p-6"
            onClick={() => setIsOpen(false)}
          >
          
          {/* HEADER */}
          <div className="mb-4 pb-3 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Our Services</h3>
            <p className="text-slate-400 text-sm">Fast websites and SEO that delivers real results</p>
          </div>

          {/* SERVICE LINKS */}
          <div className="space-y-3">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={handleClick}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-all group"
                >
                  <div className="bg-blue-600/20 rounded-lg p-2 flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {service.name}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </div>
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
