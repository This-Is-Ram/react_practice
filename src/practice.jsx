export const Practice = () => {
  const students = [];
  return (
    <>
      {/* <p>{students.length && "no students found"}</p> */}
      {/* <p>{students.length === 0 && "no students found"}</p> */}
      {/* or */}

      <p>{!students.length && "no students found"}</p>
    </>
  );
};
