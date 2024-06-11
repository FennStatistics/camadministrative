import ButtonHome from "./Buttons/Home";
import ButtonInformation from "./Buttons/Information";
import ButtonGetStarted from "./Buttons/GetStarted";
import ButtonOnlineDocumentation from "./Buttons/OnlineDocumentation";


import ButtonRegister from "./Buttons/Register";
import ButtonLogin from "./Buttons/Login";



export default function HeaderLoggedIn() {

  return (
<nav className="w-full flex border-b h-16 mb-10 max-w-6xl">
<div className="w-full flex space-x-10 items-center p-5 text-sm justify-start">
  aaa
  bbb
  <ButtonOnlineDocumentation/>
  </div>
  <div className=".w-2/5 flex space-x-10 items-center p-5 text-sm justify-end">
  <ButtonLogin/>
</div>
</nav>
  );
}

