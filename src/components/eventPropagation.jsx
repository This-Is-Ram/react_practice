export const EventPropagation = () => {
  return (
    <>
      <div
        className="p-40 bg-blue-500"
        onClickCapture={() => console.log("i am grandparent")}
      >
        <div
          className="p-20 bg-red-500"
          onClickCapture={() => console.log("i am Parent")}
        >
          <div
            className="p-10 bg-green-500"
            onClickCapture={() => console.log("i am child")}
          >
            child
          </div>
        </div>
      </div>
    </>
  );
};
