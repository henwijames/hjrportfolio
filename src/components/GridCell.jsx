export default function GridCell({ children, className = "" }) {
  return (
    <div
      className={`border-r border-neutral-200 dark:border-neutral-800 last:border-r-0 ${className}`}
    >
      {children}
    </div>
  );
}
