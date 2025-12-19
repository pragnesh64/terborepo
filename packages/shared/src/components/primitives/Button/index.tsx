import React from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd/es/button";

const variants = {
  default: {
    base: {
      backgroundColor: "#ffffff",
      color: "#9CA3AF",
      border: "1px solid #E5E7EB",
    },
    hover: {
      backgroundColor: "#F9FAFB",
      color: "#6B7280",
      border: "1px solid #D1D5DB",
    },
  },

  primary: {
    base: {
      backgroundColor: "#191B1F",
      color: "rgba(255,255,255,0.9)",
      border: "1px solid #191B1F",
    },
    hover: {
      backgroundColor: "rgba(0,0,0,0.7)",
      border: "1px solid #0F1115",
    },
  },

  primaryOutlined: {
    base: {
      backgroundColor: "transparent",
      color: "#191B1F",
      border: "1px solid #191B1F",
    },
    hover: {
      backgroundColor: "#F3F4F6",
    },
  },

  secondary: {
    base: {
      background:
        "linear-gradient(91.11deg, #9673E9 0.3%, #C558E5 29.11%, #EC9C75 57.17%, #EC7B5C 76.66%, #E9AE89 98.87%)",
      color: "#ffffff",
      border: "none",
    },
    hover: {
      filter: "brightness(0.95)",
    },
  },

  danger: {
    base: {
      backgroundColor: "#EF4444",
      color: "#ffffff",
      border: "1px solid #EF4444",
    },
    hover: {
      backgroundColor: "#DC2626",
      border: "1px solid #DC2626",
    },
  },

  dangerOutlined: {
    base: {
      backgroundColor: "transparent",
      color: "#EF4444",
      border: "1px solid #EF4444",
    },
    hover: {
      backgroundColor: "#FEE2E2",
    },
  },

  soft: {
    base: {
      background: "linear-gradient(90deg, #E5E7EB, #D1D5DB)",
      color: "#6B7280",
      border: "none",
    },
    hover: {
      filter: "brightness(0.95)",
    },
  },
} as const;

type VariantType = keyof typeof variants;

export type CustomButtonProps = {
  children?: React.ReactNode;
  variantType?: VariantType;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
  startIcon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
} & Omit<AntButtonProps, "type">;

const Button: React.FC<CustomButtonProps> = ({
  children,
  variantType = "default",
  fullWidth = false,
  onClick,
  startIcon,
  style,
  className,
  ...props
}) => {
  const variant = variants[variantType];

  return (
    <AntButton
      {...props}
      onClick={onClick}
      icon={startIcon}
      block={fullWidth}
      style={{
        ...variant.base,
        borderRadius: 12,
        fontWeight: 500,
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
        height: 40,
        paddingInline: children ? 16 : 12,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: children ? 6 : 0,
        transition: "all 0.2s ease",
        ...style,
      }}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, variant.hover)
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, variant.base)
      }
    >
      {children}
    </AntButton>
  );
};

export default Button;
