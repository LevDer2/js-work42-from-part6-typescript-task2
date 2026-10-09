import type { ReactNode } from "react";
import style from "./Section.module.css";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={style.section}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
};
