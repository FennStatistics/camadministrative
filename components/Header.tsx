import { createClient } from "@/utils/supabase/server";

import ButtonHome from "./Buttons/Home";
import ButtonInformation from "./Buttons/Information";
import ButtonGetStarted from "./Buttons/GetStarted";

import ButtonRegister from "./Buttons/Register";
import ButtonLogin from "./Buttons/Login";


const canInitSupabaseClient = () => {
  // This function is just for the interactive tutorial.
  // Feel free to remove it once you have Supabase connected.
  try {
    createClient();
    return true;
  } catch (e) {
    return false;
  }
};


const isSupabaseConnected = canInitSupabaseClient();
const supabase = createClient();

export default async function Header() {
  const { data, error } = await supabase.auth.getUser();

  return !error ? (
    <nav className="w-full flex border-b h-16 mb-10 max-w-6xl">
    <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
      aaa
      bbb
      ccc
      ddd
      {isSupabaseConnected && <ButtonLogin/>}
    </div>
  </nav>
  ) : (
    <nav className="w-full flex border-b h-16 mb-10 max-w-6xl">
    <div className="w-full flex space-x-10 items-center p-5 text-sm justify-start">
      <ButtonHome/>
      <ButtonInformation/>
      <ButtonGetStarted/>
      </div>
      <div className="w-full flex space-x-10 items-center p-5 text-sm justify-end">
      {isSupabaseConnected && <ButtonRegister/>}
      {isSupabaseConnected && <ButtonLogin/>}
    </div>
  </nav>
  );
}
