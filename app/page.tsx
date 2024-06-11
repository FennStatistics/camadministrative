import { createClient } from "@/utils/supabase/server";

import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";

import Image from "next/image";
import logoCAM from "../public/images/logoCAM.svg";


import ButtonInformation from "@/components/Buttons/Information";
import ButtonGetStarted from "@/components/Buttons/GetStarted";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'


import { isMobile } from 'react-device-detect';
import { redirect } from 'next/navigation'



export default async function Index() {
  console.log("isMobile", isMobile)

if(isMobile){
  redirect('/notes')
}

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

    /*

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
  const { data, error } = await supabase.auth.getUser();
  //console.log("error", error)


  const { error3 } = await supabase.from('countries').insert({ id: 4, name: 'Denmark' })

  const { data: todos, error2 } = await supabase.from('countries').select('*')
  console.log("todos", todos)


  const { error4 } = await supabase.from('countries').delete().eq('id', 1)
*/

  //     <div className="flex-1 w-full flex flex-col gap-20 items-center">

  return (
      <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
           {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <div className="grid grid-cols-2 gap-2 place-items-center">
          <div className="text-2xl font-semibold">
          Cognitive Affective Map tools to easily create and integrate CAM studies into online experiments.
          <p className="text-xl font-light text-gray-600"> Build fully functional accessible Cognitive Affective Map experiments faster than ever! </p>
          </div>
          <div>
          <Image src={logoCAM.src} width={400} height={400} alt="CAM logo"/>
          </div>
        </div>

        <ul className="list-disc space-y-5 px-14 mt-5">
          <li>
            <span className="font-bold">Online based</span> - all our tools are running online so no need to setup any server (although you could)
          </li>
          <li>
            <span className="font-bold">Free and open source</span> - all our tools have MIT license, you can use the CAM tools in any project, just don't forget to quote us
          </li>
          <li>
            <span className="font-bold">Tested systematically</span> - all the different tools provided were tested to ensure best data quality
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-10 place-items-center mx-40">
          <div className="text-xl font-semibold">
          For further information, please read the information page:
          <p className="w-1/2 mt-3">
            <ButtonInformation/> 
          </p>
          </div>
          <div className="text-xl font-semibold">
         If you just want to get started, please read the get started page:
          <p className="w-1/2 mt-3">
            <ButtonGetStarted/> 
          </p>
          </div>
        </div>
      </main>
  );
}
