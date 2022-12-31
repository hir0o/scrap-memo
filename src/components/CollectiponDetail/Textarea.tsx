import {
  ChangeEvent,
  FC,
  useCallback,
  useState,
  KeyboardEvent as ReactKeyboardEvent,
  ComponentProps,
} from "react";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  onSubmit: (value: string) => void;
};

export const Textarea: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = useCallback(() => {
    onSubmit(value);
    setValue("");
  }, [value]);

  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey && e.key === "Enter") {
        handleSubmit();
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
      onBlur={handleSubmit}
      minRows={3}
      value={value}
      className="w-full bg-gray-700 resize-none appearance-none focus:outline-none text-white p-2"
    />
  );
};