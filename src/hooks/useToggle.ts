import { useMemo, useState } from "react";

export const useToggle = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  return {
    isOpen,
    ...useMemo(
      () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((state) => !state),
      }),
      []
    ),
  };
};
