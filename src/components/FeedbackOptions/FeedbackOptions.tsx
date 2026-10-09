import style from "./FeedbackOption.module.css";
import type { FeedbackType } from "../../App";

type FeedbackOptionsProps = {
  readonly option: FeedbackType[];
  onLeaveFeedback: (type: FeedbackType) => void;
};

export const FeedbackOptions = ({ option, onLeaveFeedback }: FeedbackOptionsProps) => {
  return (
    <div className={style.container}>
      {option.map((item) => (
        <button
          key={item}
          type="button"
          className={style.btn}
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
