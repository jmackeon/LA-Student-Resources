import { SearchX } from "lucide-react";

export function EmptyState() {
  return (
    <div className="empty-state" role="status">
      <SearchX size={32} strokeWidth={1.5} aria-hidden="true" />
      <p className="empty-state__title">No resources found</p>
      <p className="empty-state__hint">Try another search or select a different category.</p>
    </div>
  );
}
