export default function ReturnAnElement({ title, withClass, withStyle }) {
  return (
    <span className={withClass} style={withStyle}> {title} </span>
  );
}