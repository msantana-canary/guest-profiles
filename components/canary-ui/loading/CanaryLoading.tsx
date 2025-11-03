import { CSSProperties } from "react";

interface CanaryLoadingProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function CanaryLoading({
  color = "#2858c4",
  size = 20,
  className = "",
}: CanaryLoadingProps) {
  const spinnerStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    border: `2px solid transparent`,
    borderTopColor: color,
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className={`inline-block ${className}`} style={spinnerStyle} />
    </>
  );
}
