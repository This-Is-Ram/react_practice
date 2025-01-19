import { useState } from "react";

export const RegistrationModidied = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-300">
        <p className="my-1">
          my name is {user.firstName} {user.lastName} my email id is :{" "}
          {user.email} and phone number is : {user.phone}
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
                value={user.firstName}
                className="w-full py-1 px-2 rounded-md"
                type="text"
                id="fname"
                name="firstName"
              />
              <br />
              <br />
              <label htmlFor="lname">Last name:</label>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={user.lastName}
                className="w-full py-1 px-2 rounded-md"
                type="text"
                id="lname"
                name="lastName"
              />
              <br />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={user.email}
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
                value={user.password}
                className="w-full py-1 px-2 rounded-md"
                type="password"
                id="passWord"
                name="password"
              />
              <br />
              <br />
              <label htmlFor="phone">phone Number:</label>

              <input
                onChange={handleInputChange}
                autoComplete="off"
                required
                value={user.phone}
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
