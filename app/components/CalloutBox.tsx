import { AlertCircle, Lightbulb, TrendingUp, Zap } from "lucide-react";

type CalloutVariant = "tip" | "warning" | "insight" | "data";

interface CalloutBoxProps {
  variant?: CalloutVariant;
  title: string;
  children: React.ReactNode;
}

const variantStyles = {
  tip: {
    bg: "bg-blue-500/10",
    border: "border-blue-400",
    titleColor: "text-blue-400",
    textColor: "text-blue-300",
    icon: Lightbulb,
  },
  warning: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-400",
    titleColor: "text-yellow-400",
    textColor: "text-yellow-300",
    icon: AlertCircle,
  },
  insight: {
    bg: "bg-purple-500/10",
    border: "border-purple-400",
    titleColor: "text-purple-400",
    textColor: "text-purple-300",
    icon: TrendingUp,
  },
  data: {
    bg: "bg-green-500/10",
    border: "border-green-400",
    titleColor: "text-green-400",
    textColor: "text-green-300",
    icon: Zap,
  },
};

export default function CalloutBox({ variant = "tip", title, children }: CalloutBoxProps) {
  const styles = variantStyles[variant];
  const Icon = styles.icon;

  return (
    <div className={`${styles.bg} border-l-4 ${styles.border} p-6 rounded-r-lg my-8`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${styles.titleColor}`} />
        <p className={`font-bold ${styles.titleColor}`}>{title}</p>
      </div>
      <div className={`${styles.textColor} leading-relaxed`}>
        {children}
      </div>
    </div>
  );
}
