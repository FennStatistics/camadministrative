import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'

import Image from "next/image";
import logoCAM from "../../public/images/logoCAM.svg";

import Link from "next/link";

export default async function GetStartedPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
          {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="text-2xl font-semibold text-center">
        Step by step everything is explained to get started and to set up your
        first study:
      </div>

      <div className="relative mt-5 text-left">

        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 1</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10">
            <div className="font-bold">
              Explore the Cognitive-Affective Map Tools
            </div>
            <div className="my-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>


        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 2</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10">
            <div className="font-bold">
              Register an account
            </div>
            <div className="my-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>


        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 3</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10">
            <div className="font-bold">
              Set up your first study
            </div>
            <div className="my-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>


        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 4</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10">
            <div className="font-bold">
              Collect your first data
            </div>
            <div className="my-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>


        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 5</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10">
            <div className="font-bold">
              Analyze your data
            </div>
            <div className="my-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
