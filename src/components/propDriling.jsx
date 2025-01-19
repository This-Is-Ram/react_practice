export const PropDrilling = () => {
  return (
    <>
      <ChildComponent data="React js" />
    </>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};
const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>I love {props.data} </h1>
    </>
  );
};
