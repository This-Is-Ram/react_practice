export const ListCards = (props) => {
  console.log(props);

  return (
    <li key={props.name}>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.greeting}</p>
      <p>{props.children}</p>
    </li>
  );
};
