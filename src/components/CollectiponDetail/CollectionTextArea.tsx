import { FC, useCallback } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Textarea } from "./Textarea";

type Props = {
  onSubmit: (value: string) => void;
};

export const CollectionTextArea: FC<Props> = ({ onSubmit }) => {
  const toggle = useToggle(false);

  const handleSubmit = useCallback(
    (value: string) => {
      onSubmit(value);
      toggle.close();
    },
    [onSubmit]
  );

  return (
    <div>
      {!toggle.isOpen && (
        <div className="flex items-center justify-center text-white font-bold">
          <button onClick={toggle.open}>新規作成</button>
        </div>
      )}
      <div className={!toggle.isOpen ? "hidden" : ""}>
        <Textarea onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
