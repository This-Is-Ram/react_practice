import { useState } from "react";

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputChange = (e) => {
    const { name, value, id } = e.target;
    // console.log(id);

    switch (name) {
      case "fname":
        setFirstName(value);
        break;
      case "lname":
        setLastName(value);

        break;
      case "email":
        setEmail(value);
        break;
      case "passWord":
        setPassword(value);
        break;
      case "phone":
        setPhoneNumber(value);

        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, phoneNumber, password };
    console.log(data);
  };
  return (
    <>
      <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-300">
        <p className="my-1">
          my name is {firstName} {lastName} my email id is : {email} and phone
          number is : {phoneNumber}
        </p>
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-xl font-sans">
          <h1 className="my-2">Sign Up</h1>
          <p>Please fill this form to create an account</p>
          <form onSubmit={handleFormSubmit} className="my-8">
            <fieldset>
              {/* <legend>Personalia:</legend> */}
              <label htmlFor="fname">First name:</label>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={firstName}
                className="w-full py-1 px-2 rounded-md"
                type="text"
                id="fname"
                name="fname"
              />
              <br />
              <br />
              <label htmlFor="lname">Last name:</label>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={lastName}
                className="w-full py-1 px-2 rounded-md"
                type="text"
                id="lname"
                name="lname"
              />
              <br />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={email}
                className="w-full py-1 px-2 rounded-md"
                type="email"
                id="email"
                name="email"
              />
              <br />
              <br />
              <label htmlFor="passWord">password:</label>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={password}
                className="w-full py-1 px-2 rounded-md"
                type="password"
                id="passWord"
                name="passWord"
              />
              <br />
              <br />
              <label htmlFor="phone">phone Number:</label>

              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={phoneNumber}
                className="w-full py-1 px-2 rounded-md"
                type="number"
                id="phone"
                name="phone"
              />
              <button
                className="py-1 px-2 bg-sky-400  w-full my-4 rounded-xl"
                type="submit"
              >
                submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
