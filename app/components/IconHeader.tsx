import { LucideIcon } from "lucide-react";

interface IconHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  iconColor?: string;
}

export default function IconHeader({ 
  icon: Icon, 
  title, 
  subtitle,
  iconColor = "text-blue-400" 
}: IconHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3 bg-slate-900 rounded-lg shadow-sm border border-slate-700`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-slate-400 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
