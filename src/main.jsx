import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
// import "../src/App.css";
// import { Practice } from "./practice.jsx";
// import { App } from "./App.jsx";
// import { EventHandle } from "./components/eventHandling.jsx";
import { EventPropagation } from "./components/eventPropagation.jsx";
import { UserData } from "./components/hooks/State.jsx";
import { LiftStateUp } from "./components/liftStateUp.jsx";
import { ToggleButtonProject } from "./TogleButtonProject.jsx";

import "./TodoProject/style.css";
import { Todo } from "./TodoProject/index.jsx";
import { ShortCkt } from "./ShortCkt.jsx";
// import { Registration } from "./RegistrationProject/registration.jsx";
import { RegistrationModidied } from "./components/hooks/useState/RegistrationProject/registrationModified.jsx";
// import { LoginPage } from "./components/hooks/useState/loginPage.jsx";
import { TradiContact } from "./components/hooks/useState/contactForm/traditinalContact.jsx";
import { MordenContact } from "./components/hooks/useState/contactForm/mordenContact.jsx";
import { UseEffectEx } from "./components/hooks/useEffect/index.jsx";
import { EffectChallenge } from "./components/hooks/useEffect/useEffectChallenge.jsx";
import { Picachu } from "./components/hooks/useEffect/picachu.jsx";
import { UseRef } from "./components/hooks/useRef/useRef.jsx";
import { ForwardRef } from "./components/hooks/useRef/forwardRef.jsx";
import { UseId } from "./components/hooks/useId/index.jsx";
import { PropDrilling } from "./components/propDriling.jsx";
import { Home } from "./components/hooks/ContaxtApi/Home.jsx";
import { BioProvider } from "./components/hooks/ContaxtApi/index.jsx";
import { About } from "./components/hooks/ContaxtApi/about.jsx";

// import { Simbling, State, UserData } from "./components/hooks/State.jsx";

// import { practice } ;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Practice /> */}
    {/* <App /> */}
    {/* <EventHandle /> */}
    {/* <EventPropagation /> */}
    {/* <State />
    <Simbling /> */}
    {/* <UserData /> */}
    {/* <LiftStateUp /> */}
    {/* <ToggleButtonProject /> */}
    {/* <Todo /> */}
    {/* <ShortCkt /> */}
    {/* <Registration /> */}
    {/* <RegistrationModidied /> */}
    {/* <LoginPage /> */}
    {/* <TradiContact /> */}
    {/* <MordenContact /> */}
    {/* <UseEffectEx /> */}
    {/* <EffectChallenge /> */}
    {/* <Picachu /> */}
    {/* <UseRef /> */}
    {/* <ForwardRef /> */}
    {/* <UseId /> */}
    {/* <PropDrilling /> */}
    <BioProvider>
      <Home />
      <About />
    </BioProvider>
  </StrictMode>
);
