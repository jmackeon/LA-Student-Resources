import { FolderOpen } from "lucide-react";

export function EmptyState() {
  return (
    <div className="empty-state" role="status">
      <FolderOpen size={32} strokeWidth={1.5} aria-hidden="true" />
      <p className="empty-state__title">No resources found</p>
      <p className="empty-state__hint">This category doesn't have any resources yet.</p>
    </div>
  );
}
