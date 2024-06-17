"use server";

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import BrowserMobile from "./index/differentVersions";

export default async function Index() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 md:max-w-6xl sm:max-w-xl px-3 md:text-xl sm:text-sm animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <BrowserMobile />
    </main>
  );
}
