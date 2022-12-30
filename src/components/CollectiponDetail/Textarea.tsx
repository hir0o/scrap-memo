import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  onSubmit: (value: string) => void;
};

export const Textarea: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey && e.key === "Enter") {
        onSubmit(value);
        setValue("");
      }
    },
    [value]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <TextareaAutosize
      onKeyDown={onKeyDown}
      onChange={onChange}
      minRows={3}
      value={value}
      className="w-full bg-gray-800 resize-none appearance-none focus:outline-none text-white p-2"
    />
  );
};
