import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryTableColumn<T = any> {
  key: string;
  label: string;
  render?: (value: any, row: T, index: number) => ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface CanaryTableProps<T = any> {
  columns: CanaryTableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

export default function CanaryTable<T extends Record<string, any>>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data available",
  onRowClick,
  className = "",
}: CanaryTableProps<T>) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  if (isLoading) {
    return (
      <div className={`w-full p-8 text-center ${className}`}>
        <div className="inline-block w-8 h-8 border-4 border-[#2858c4] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-[14px] text-[#707070]">Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={`w-full p-8 text-center ${className}`}>
        <p className="text-[14px] text-[#707070]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr
            className="border-b-2"
            style={{ borderColor: colors.black6 }}
          >
            {columns.map((column) => (
              <th
                key={column.key}
                className={clsx(
                  "px-4 py-3 text-[14px] font-semibold",
                  alignClasses[column.align || "left"]
                )}
                style={{
                  color: colors.black2,
                  width: column.width,
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx(
                "border-b transition-colors",
                onRowClick && "cursor-pointer hover:bg-[#fafafa]"
              )}
              style={{ borderColor: colors.black6 }}
              onClick={() => onRowClick?.(row, rowIndex)}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={clsx(
                    "px-4 py-3 text-[14px]",
                    alignClasses[column.align || "left"]
                  )}
                  style={{ color: colors.black2 }}
                >
                  {column.render
                    ? column.render(row[column.key], row, rowIndex)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
