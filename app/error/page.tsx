import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'


export default async function ErrorPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

    return (
      <main className="flex flex-col gap-5 w-full max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      Sorry, something went wrong!
      </main>
    )
  }