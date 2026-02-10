"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Star, Home, Heart, Briefcase, Palette, Cpu, Leaf, Building2, Users, ShoppingCart, GraduationCap, ArrowRight } from "lucide-react";
import { industries, industryGroups, getIndustriesByGroup } from "@/lib/industries";

interface WhoWeHelpMegaMenuProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function WhoWeHelpMegaMenu({ isMobile = false, onItemClick }: WhoWeHelpMegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const iconMap: { [key: string]: any } = {
    Star, Home, Heart, Briefcase, Palette, Cpu, Leaf, Building2, Users, ShoppingCart, GraduationCap
  };

  const handleClick = () => {
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
          Who We Help
          <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        
        {isOpen && (
          <div className="mt-4 pl-4 space-y-4">
            {industryGroups.map((group) => {
              const IconComponent = iconMap[group.icon];
              const groupIndustries = getIndustriesByGroup(group.name);
              
              return (
                <div key={group.name}>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-lg mb-2">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    {group.name} ({group.count})
                  </div>
                  <div className="space-y-2 pl-7">
                    {groupIndustries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={handleClick}
                        className="block text-slate-300 hover:text-white transition-colors text-base"
                      >
                        {industry.name}
                        {industry.isCharity && <span className="ml-2 text-xs text-blue-400">(Discounted)</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            
            <Link
              href="/industries"
              onClick={handleClick}
              className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold"
            >
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
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
        Who We Help <ChevronDown className="w-4 h-4" />
      </button>

      {/* MEGA MENU DROPDOWN */}
      {isOpen && (
        <>
          {/* Invisible bridge to prevent menu closing when moving mouse down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] max-w-[95vw] h-2 z-[99]" />
          
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] max-w-[95vw] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[100] p-8"
            onClick={() => setIsOpen(false)}
          >
          
          {/* HEADER */}
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-2">Industries We Serve</h3>
            <p className="text-slate-400 text-sm">35 specialized pages built for 10/10 SEO, excellent content, and conversion-optimized design.</p>
          </div>

          {/* GRID OF GROUPS */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {industryGroups.slice(0, 9).map((group) => {
              const IconComponent = iconMap[group.icon];
              const groupIndustries = getIndustriesByGroup(group.name);
              
              return (
                <div key={group.name} className="space-y-3">
                  {/* Group Header */}
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    {group.name}
                    <span className="text-xs text-slate-500">({group.count})</span>
                  </div>
                  
                  {/* Industry Links */}
                  <div className="space-y-1.5">
                    {groupIndustries.slice(0, 5).map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={handleClick}
                        className="block text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm"
                      >
                        {industry.name}
                        {industry.isCharity && <span className="ml-2 text-xs text-blue-400">(70% off)</span>}
                      </Link>
                    ))}
                    {groupIndustries.length > 5 && (
                      <Link
                        href="/industries"
                        className="block text-blue-400 hover:text-blue-300 text-xs font-semibold"
                      >
                        +{groupIndustries.length - 5} more →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTER CTA */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                <span className="text-blue-400 font-bold">Special:</span> Registered charities receive <span className="text-white font-bold">50-70% discount</span> + free Google Ad Grants setup (£7k/month value).
              </p>
            </div>
            <Link
              href="/industries"
              onClick={handleClick}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              View All 35 Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
