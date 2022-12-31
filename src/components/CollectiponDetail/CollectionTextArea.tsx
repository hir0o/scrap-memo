import { FC, useCallback, useRef } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Textarea } from "./Textarea";

type Props = {
  onSubmit: (value: string) => void;
};

export const CollectionTextArea: FC<Props> = ({ onSubmit }) => {
  const toggle = useToggle(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (value: string) => {
      onSubmit(value);
      toggle.close();
    },
    [onSubmit]
  );

  const handleClick = useCallback(() => {
    toggle.open();
    ref.current?.focus();
  }, [toggle]);

  return (
    <div>
      {!toggle.isOpen && (
        <div className="flex items-center justify-center text-white font-bold">
          <button onClick={handleClick}>新規作成</button>
        </div>
      )}
      <div className={!toggle.isOpen ? "hidden" : ""}>
        <Textarea ref={ref} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
