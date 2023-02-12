export function Square(props) {
  return (
    <button className="square" onClick={props.onClick} data-square-id={props.id}>
      {props.value}
    </button>
  );
}
