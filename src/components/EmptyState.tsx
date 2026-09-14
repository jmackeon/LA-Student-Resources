import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  hint?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title = "No resources found",
  hint = "This category doesn't have any resources yet.",
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <FolderOpen size={32} strokeWidth={1.5} aria-hidden="true" />
      <p className="empty-state__title">{title}</p>
      <p className="empty-state__hint">{hint}</p>
      {actionLabel && onAction && (
        <button type="button" className="empty-state__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
