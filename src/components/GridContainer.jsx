export default function GridContainer({ children, className = "" }) {
  return (
    <div
      className={`relative border-b border-r border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      {/* Top-Left Corner Accent Marker */}
      <span className="absolute -top-[3px] -left-[3px] z-10 h-1.5 w-1.5 bg-red-500" />

      {/* Bottom-Right Corner Accent Marker */}
      <span className="absolute -bottom-[3px] -right-[3px] z-10 h-1.5 w-1.5 bg-red-500" />

      {children}
    </div>
  );
}
