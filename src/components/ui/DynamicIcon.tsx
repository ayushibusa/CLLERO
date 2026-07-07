import React from "react";
import {
  Users,
  UserPlus,
  MessageSquare,
  Zap,
  FolderKanban,
  Brain,
  Clock,
  Activity,
  Camera,
  Target,
  Database,
  TrendingUp,
  Shield,
  Eye,
  Star,
  AlertTriangle,
  DollarSign,
  AlertOctagon,
  PieChart,
  Smartphone,
  UserCheck,
  User,
  Dumbbell,
  Flame,
  HelpCircle
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Users,
  UserPlus,
  MessageSquare,
  Zap,
  FolderKanban,
  Brain,
  Clock,
  Activity,
  Camera,
  Target,
  Database,
  TrendingUp,
  Shield,
  Eye,
  Star,
  AlertTriangle,
  DollarSign,
  AlertOctagon,
  PieChart,
  Smartphone,
  UserCheck,
  User,
  Dumbbell,
  Flame,
  HelpCircle
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
  const Icon = iconMap[name] || HelpCircle;
  return <Icon className={className} size={size} />;
}

