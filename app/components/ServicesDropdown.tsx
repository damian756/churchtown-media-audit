"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Code, LineChart, Briefcase, Zap, Database, Bot, Workflow, FileText, Map, Sparkles, Settings } from "lucide-react";

interface ServicesDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function ServicesDropdown({ isMobile = false, onItemClick }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const coreServices = [
    {
      name: "Web Design Southport",
      href: "/services/web-design",
      description: "Fast Next.js websites built to rank and convert",
      icon: Code,
    },
    {
      name: "SEO Services",
      href: "/services/seo",
      description: "Local pack, technical SEO and content: real results",
      icon: LineChart,
    },
    {
      name: "Content Scaling",
      href: "/services/content-scaling",
      description: "100+ landing pages generated in 48 hours",
      icon: Database,
    },
    {
      name: "Small Business Websites",
      href: "/services/small-business",
      description: "Professional sites for growing businesses",
      icon: Briefcase,
    },
  ];

    const aiServices = [
    {
      name: "GEO: AI Search",
      href: "/services/generative-engine-optimisation",
      description: "Get cited by ChatGPT, Google AI Overviews & Perplexity",
      icon: Sparkles,
    },
    {
      name: "AI Content Production",
      href: "/services/ai-content",
      description: "Scale your content output with senior editorial oversight",
      icon: Bot,
    },
    {
      name: "AI Workflow Automation",
      href: "/services/ai-workflows",
      description: "Automate repetitive operations with bespoke AI systems",
      icon: Workflow,
    },
  ];

  const sprintServices = [
    {
      name: "Optimisation Sprint",
      href: "/services/optimisation-sprint",
      description: "Fix your SEO in 30 days: no retainer required",
      icon: Zap,
    },
    {
      name: "Content Strategy",
      href: "/services/content-strategy",
      description: "12-month editorial roadmap backed by keyword data",
      icon: Map,
    },
    {
      name: "Bespoke Systems",
      href: "/services/bespoke-systems",
      description: "Custom dashboards, lead gen platforms, data tools",
      icon: Settings,
    },
    {
      name: "Free SEO Audit",
      href: "/audit",
      description: "See exactly where you're losing traffic",
      icon: LineChart,
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
          <div className="mt-4 pl-4 space-y-6">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Core Services</p>
              <div className="space-y-4">
                {coreServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link key={service.href} href={service.href} onClick={handleClick} className="block group">
                      <div className="flex items-start gap-3">
                        <IconComponent className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{service.name}</div>
                          <div className="text-sm text-slate-400 mt-1">{service.description}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">AI Services</p>
              <div className="space-y-4">
                {aiServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link key={service.href} href={service.href} onClick={handleClick} className="block group">
                      <div className="flex items-start gap-3">
                        <IconComponent className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{service.name}</div>
                            {service.badge && <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">{service.badge}</span>}
                          </div>
                          <div className="text-sm text-slate-400 mt-1">{service.description}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">More Services</p>
              <div className="space-y-4">
                {sprintServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link key={service.href} href={service.href} onClick={handleClick} className="block group">
                      <div className="flex items-start gap-3">
                        <IconComponent className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{service.name}</div>
                            {service.badge && <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">{service.badge}</span>}
                          </div>
                          <div className="text-sm text-slate-400 mt-1">{service.description}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
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
      <button className="flex items-center gap-1 text-sm font-bold text-slate-200 hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200">
        Services <ChevronDown className="w-4 h-4" />
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <>
          {/* Invisible bridge to prevent menu closing when moving mouse down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] max-w-[95vw] h-2 z-[49]" />

          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] max-w-[95vw] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 p-6"
            onClick={() => setIsOpen(false)}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* LEFT COLUMN: Core + Sprint */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 pb-2 border-b border-slate-800">Core Services</p>
                <div className="space-y-2 mb-6">
                  {coreServices.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={handleClick}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/50 transition-all group"
                      >
                        <div className="bg-blue-600/20 rounded-lg p-1.5 flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{service.name}</div>
                          <div className="text-xs text-slate-400 leading-relaxed">{service.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 pb-2 border-b border-slate-800">One-Time & Bespoke</p>
                <div className="space-y-2">
                  {sprintServices.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={handleClick}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/50 transition-all group"
                      >
                        <div className="bg-slate-700/50 rounded-lg p-1.5 flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-slate-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{service.name}</div>
                            {service.badge && <span className="text-xs bg-blue-600/80 text-white px-1.5 py-0.5 rounded font-bold shrink-0">New</span>}
                          </div>
                          <div className="text-xs text-slate-400 leading-relaxed">{service.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN: AI Services */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-purple-500/30">
                  <p className="text-xs font-bold text-purple-400 uppercase tracking-wide">AI Services</p>
                  <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">New</span>
                </div>
                <div className="space-y-2 mb-4">
                  {aiServices.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={handleClick}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-900/20 border border-transparent hover:border-purple-500/20 transition-all group"
                      >
                        <div className="bg-purple-600/20 rounded-lg p-1.5 flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{service.name}</div>
                          <div className="text-xs text-slate-400 leading-relaxed">{service.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* AI Hub CTA */}
                <Link
                  href="/services/ai"
                  onClick={handleClick}
                  className="block w-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">All AI Services →</span>
                  </div>
                  <p className="text-xs text-slate-400">GEO, AI content, and workflow automation: the full stack explained</p>
                </Link>

                {/* Proof point */}
                <div className="mt-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-purple-400 font-bold">Case study:</span> Alotek Shelters ranked #1 in Google AI Overviews across 10 commercial terms within 30 days.
                  </p>
                  <Link href="/blog/alotek-shelters-month-1-seo-results" onClick={handleClick} className="text-xs text-blue-400 hover:text-blue-300 font-medium mt-1 inline-block">
                    Read the full results →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
