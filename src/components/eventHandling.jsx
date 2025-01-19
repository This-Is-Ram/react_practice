export const EventHandle = () => {
  const onButtonClick = () => {
    alert("you clicked me !!!");
  };
  const onButtonHover = () => {
    alert("you hovered me !!!");
  };
  return (
    <>
      <ChildElem
        clickk={() => {
          onButtonClick();
        }}
        hoverr={() => {
          onButtonHover();
        }}
      />
    </>
  );
};

const ChildElem = (props) => {
  const { clickk, hoverr } = props;
  const myOwnFun = () => {
    alert("You clicked the own functon !!!");
  };
  return (
    <>
      <button
        className="border-black border-2 p-2 bg-green-300"
        onClick={clickk}
      >
        Click me
      </button>

      <button
        className="border-black border-2 p-2 bg-green-300"
        onMouseEnter={hoverr}
      >
        Hover me
      </button>
      <button
        className="border-black border-2 p-2 bg-green-300"
        onClick={myOwnFun}
      >
        Click meeee{" "}
      </button>
    </>
  );
};
