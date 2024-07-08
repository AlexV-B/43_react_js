import "./myButton1.css";

export default function MyButton1(props) {
  console.log(props);
  return <button onClick={props.onClick} className="myButton1">{props.type}</button>;
}