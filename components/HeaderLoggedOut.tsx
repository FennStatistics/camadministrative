import ButtonHome from "./Buttons/Home";
import ButtonInformation from "./Buttons/Information";
import ButtonGetStarted from "./Buttons/GetStarted";
import ButtonOnlineDocumentation from "./Buttons/OnlineDocumentation";
import ButtonCAMELparticipant from "./Buttons/CAMELparticipant";

import ButtonRegister from "./Buttons/Register";
import ButtonLogin from "./Buttons/Login";



export default function HeaderLoggedOut() {

  return (
    <nav className="w-full sm:flex border-b h-16 mb-10 max-w-6xl hidden">
    <div className="w-full flex space-x-5 items-center p-5 text-sm justify-start">
      <ButtonHome/>
      <ButtonInformation/>
      <ButtonGetStarted/>
      <ButtonOnlineDocumentation/>
      <ButtonCAMELparticipant/>
      </div>
      <div className=".w-2/5 flex space-x-10 items-center p-5 text-sm justify-end">
      <ButtonRegister/>
      <ButtonLogin/>
    </div>
  </nav>
  );
}
