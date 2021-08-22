import liStyles from "./Tag.module.css";
export default function Tag({ skill }) {
  return (
    <div>
      <ul className={liStyles.ulElement}>
        <li>{skill}</li>
      </ul>
    </div>
  );
}
