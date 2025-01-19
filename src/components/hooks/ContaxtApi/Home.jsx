import { useBioContaxt } from ".";

export const Home = () => {
  const { MyName, age } = useBioContaxt();
  return (
    <>
      <h1>
        Hello contaxt api,This is {MyName} {age} years old
      </h1>
    </>
  );
};
