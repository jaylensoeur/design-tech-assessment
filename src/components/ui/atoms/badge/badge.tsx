import React from "react";
import styles from "./badge.module.css";

/*

Desired configuration for the badge component.
Variants for typical use cases, such as sale, limited edition, exclusive, etc.
These will come with default text field, and colors, yet the label will be able to be overridden.
There will be the option to include an icon.
There will be the option to override the default text color, background color, and border color.
Base and large sizes are enough.

// Change - instead of having a complete color customiser... I'd rather have a set of custom colors that are defined that meet accessibility requirements.


*/

type BadgeVariant = "default" | "sale" | "out-of-stock" | "limited-edition" | "online-only" | "pre-order";
type CustomColorVariants = "halloween" | "mothers-day" | "christmas-red" | "christmas-green" | "valentines-day";

type BadgeSize = "small" | "medium";

type BadgeProps = {
  label?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  className?: string;
  customColor?: CustomColorVariants;
  // // color overrides
  // backgroundColor?: string;
  // textColor?: string;
  // borderColor?: string;
};

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  size = "small",
  icon,
  className = "",
  customColor,
  // backgroundColor,
  // textColor,
  // borderColor,
}) => {
  // Default labels for variants
  const getDefaultLabel = (variant: BadgeVariant): string => {
    switch (variant) {
      case "sale":
        return "Sale";
      case "out-of-stock":
        return "Out of Stock";
      case "limited-edition":
        return "Limited Edition";
      case "online-only":
        return "Online Only";
      case "pre-order":
        return "Pre-Order";
      default:
        return "";
    }
  };

  // Use provided label or default label for the variant
  const displayLabel = label || getDefaultLabel(variant);

  // Clone the icon and set fontSize to match the badge size
  const sizedIcon =
    icon &&
    React.cloneElement(icon as React.ReactElement, {
      fontSize: size, // "small" or "medium" - same as badge size
    });

  const baseClasses = [
    styles.badge,
    !customColor ? styles[variant] : "",
    customColor ? styles[customColor] : "",
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={baseClasses} role="status">
      {sizedIcon && <span className={styles.icon}>{sizedIcon}</span>}
      {displayLabel && <span className={styles.label}>{displayLabel}</span>}
    </div>
  );
};

export { Badge };
export type { BadgeProps, BadgeVariant, BadgeSize, CustomColorVariants };
