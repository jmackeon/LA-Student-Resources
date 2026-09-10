import { useEffect } from "react";

/** Sets the browser tab title to "London Academy | {suffix}" while the calling component is mounted. */
export function useDocumentTitle(suffix: string) {
  useEffect(() => {
    document.title = `London Academy | ${suffix}`;
  }, [suffix]);
}
