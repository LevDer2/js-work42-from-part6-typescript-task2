import style from "./Statistics.module.css";

type StatisticsProp = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positiveFeedback: number;
};

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}: StatisticsProp) => {
  return total === 0 ? (
    <p>немає даних</p>
  ) : (
    <div className={style.box}>
      <h2 className={style.title}>Statistic</h2>
      <p className={style.text}>good: {good}</p>
      <p className={style.text}>natural: {neutral}</p>
      <p className={style.text}>bad: {bad}</p>
      <p className={style.text}>total: {total}</p>
      <p className={style.text}>
        positive: {positiveFeedback ? positiveFeedback : "0"} %
      </p>
    </div>
  );
};
