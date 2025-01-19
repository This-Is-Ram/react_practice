import { useBioContaxt } from ".";

export const About = () => {
  const { MyName, age } = useBioContaxt();
  return (
    <>
      <h1>
        Hello contaxt api,This is {MyName} {age} years old , I am from About
      </h1>
    </>
  );
};
