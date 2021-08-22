import listStyle from "./Unordered.module.css";

export default function Unordered({ listItem }) {
  return (
    <div className={listStyle.item}>
      <ul>
        <li>{listItem}</li>
      </ul>
    </div>
  );
}
