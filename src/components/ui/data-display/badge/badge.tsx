import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center h-fit rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-2",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        information: "",
        warning: "",
        danger: "",
        new: "",
      },
      isSolid: {
        true: "",
        false: "",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    // Using cva's compoundVariants to add isSolid attribute and color variants according to that
    compoundVariants: [
      // Default variant
      {
        variant: "default",
        isSolid: true,
        className: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      },
      {
        variant: "default",
        isSolid: false,
        className: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
      },
      // Success variant
      {
        variant: "success",
        isSolid: true,
        className: "border-transparent bg-green-700 text-white shadow hover:bg-green-600",
      },
      {
        variant: "success",
        isSolid: false,
        className: "border-transparent bg-green-500/10 text-green-800 hover:bg-green-500/20",
      },
      // Information variant
      {
        variant: "information",
        isSolid: true,
        className: "border-transparent bg-blue-700 text-white shadow hover:bg-blue-600",
      },
      {
        variant: "information",
        isSolid: false,
        className: "border-transparent bg-blue-500/10 text-blue-800 hover:bg-blue-500/20",
      },
      // Warning variant
      {
        variant: "warning",
        isSolid: true,
        className: "border-transparent bg-yellow-500 text-black shadow hover:bg-yellow-600",
      },
      {
        variant: "warning",
        isSolid: false,
        className: "border-transparent bg-yellow-500/10 text-yellow-800 hover:bg-yellow-500/20",
      },
      // Danger variant
      {
        variant: "danger",
        isSolid: true,
        className: "border-transparent bg-red-700 text-white shadow hover:bg-red-600",
      },
      {
        variant: "danger",
        isSolid: false,
        className: "border-transparent bg-red-500/10 text-red-800 hover:bg-red-500/20",
      },
      // New variant
      {
        variant: "new",
        isSolid: true,
        className: "border-transparent bg-purple-700 text-white shadow hover:bg-purple-600",
      },
      {
        variant: "new",
        isSolid: false,
        className: "border-transparent bg-purple-500/10 text-purple-800 hover:bg-purple-500/20",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      isSolid: false,
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  // Accessibility concerns
  "aria-label"?: string;
  role?: "status" | "note" | "tag";
  // Add icon to the badge
  icon?: LucideIcon;
}

function Badge({
  className,
  size,
  variant,
  isSolid,
  "aria-label": ariaLabel,
  role = "status",
  icon: Icon,
  children,
  ...props
}: BadgeProps) {
  // Use provided aria-label or fall back to children content
  const accessibleLabel = ariaLabel || (typeof children === "string" ? children : undefined);
  return (
    <span
      className={cn(badgeVariants({ variant, size, isSolid }), className)}
      role={role}
      aria-label={accessibleLabel}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 12 : size === "md" ? 16 : 20} aria-hidden="true" />}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
