interface StatCardProps {
  number: string;
  label: string;
  color?: "blue" | "green" | "purple" | "yellow";
  className?: string;
}

const colorStyles = {
  blue: "text-blue-400",
  green: "text-green-400",
  purple: "text-purple-400",
  yellow: "text-yellow-400",
};

export default function StatCard({ number, label, color = "blue", className = "" }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className={`font-bold text-4xl ${colorStyles[color]} mb-2`}>
        {number}
      </div>
      <div className="text-slate-400 text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
