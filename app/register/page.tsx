'use server';

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'

import Image from "next/image";
import logoCAM from "../../public/images/logoCAM.svg";

import Link from "next/link";

import RegisterForm from "./actions";


export default async function RegisterPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();


  return (
    <main className="flex flex-col gap-5 w-full max-w-6xl px-3 text-xl animate-in">
    {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="text-2xl font-semibold text-center">
  Please fill out the following form to register an account:
  <p className="text-sm font-light text-gray-600"> The submit button is disabled till you filled out the form. </p>
      </div>


      <form>
<RegisterForm />
    </form>

    
    </main>
  );
}
