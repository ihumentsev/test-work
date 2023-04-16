import css from './Btn.module.css';
export default function Btn({ text, handler }) {
  return (
    <button className={css.list_btn} onClick={handler}>
      {text}
    </button>
  );
}
