import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <Search className="search-bar__icon" size={20} aria-hidden="true" />
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search learning resources…"
        aria-label="Search learning resources"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        spellCheck={false}
      />
      {value.length > 0 && (
        <button
          type="button"
          className="search-bar__clear"
          aria-label="Clear search"
          onClick={() => onChange("")}
        >
          <X size={18} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
