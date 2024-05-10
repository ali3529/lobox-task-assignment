import { RefObject, useEffect } from "react";

export function useOnClickOutside(
  ref: RefObject<HTMLElement>, 
  handler: (event: MouseEvent | TouchEvent) => void, 
  preventListener: boolean = false 
): void {
  useEffect(() => {
    // Early return if there's no handler function or if listeners are prevented
    if (!handler || preventListener) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    // Adding the event listeners
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, preventListener]);
}
