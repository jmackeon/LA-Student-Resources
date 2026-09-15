import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { QUEST_CAMPUSES, QUEST_LOGO } from "../data/questCampuses";

interface QuestCampusDialogProps {
  open: boolean;
  onClose: () => void;
}

export function QuestCampusDialog({ open, onClose }: QuestCampusDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="quest-dialog"
      aria-labelledby="quest-dialog-title"
      aria-describedby="quest-dialog-subtitle"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="quest-dialog__content">
        <button type="button" className="quest-dialog__close" onClick={onClose} aria-label="Close">
          <X size={18} aria-hidden="true" />
        </button>

        <img src={QUEST_LOGO} alt="" className="quest-dialog__logo" />

        <h2 id="quest-dialog-title" className="quest-dialog__title">
          Choose Your Campus
        </h2>
        <p id="quest-dialog-subtitle" className="quest-dialog__subtitle">
          Select your London Academy campus to open Quest Assessments.
        </p>

        <div className="quest-dialog__campuses">
          {QUEST_CAMPUSES.map((campus) => (
            <a key={campus.id} className="quest-dialog__campus-button" href={campus.url} onClick={onClose}>
              {campus.name}
            </a>
          ))}
        </div>
      </div>
    </dialog>
  );
}
