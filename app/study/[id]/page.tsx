import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import Link from "next/link";

import ButtonDeleteExperiment from "@/components/Buttons/DeleteExperiment";
import ButtonDownloadExperiment from "@/components/Buttons/DownloadExperiment";


export default async function SingleStudy({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log("error private page", !data?.user);

  if (error || !data?.user) {
    return redirect("/error");
  } else {
    // get data from the database for respective study and researcher
    const { data: singleStudy } = await supabase
      .from("studies")
      .select()
      .eq("namestudy", params.id)
      .eq("email", data.user.email);

    // redirect to error page if no data is found
    if (singleStudy?.length === 0 || singleStudy === undefined) {
      return redirect("/error");
    }

    console.log("singleStudy", singleStudy);

    return (
      <main className="w-full max-w-6xl text-xl animate-in">
        {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <div className="bg-blue-200 my-10">Study-Name: {params.id}</div>

        <div className="flex justify-center space-x-5 flex-row mb-5">
          <div className="flex-col flex w-64">
            <p className="font-bold">{params.id}</p> participants have joined
            your study
          </div>
          <div className="flex-col flex w-64">
            <p className="font-bold">{params.id}</p> concepts on average have
            been drawn
          </div>
          <div className="flex-col flex w-64">
            <p className="font-bold">{params.id}</p> is the mean valence of the
            drawn concepts
          </div>
          <div className="flex-col flex w-64">
            <p className="font-bold">{params.id}</p> was the last time you
            collected a CAM
          </div>
        </div>

        <table className="table-auto text-left text-xl mx-auto w-full">
          <thead>
            <tr className="text-xl">
              <th className="border border-gray-300 px-2 py-2">CAM ID</th>
              <th className="border border-gray-300 px-2 py-2">
                Participant ID
              </th>
              <th className="border border-gray-300 px-2 py-2">Date</th>
              <th className="border border-gray-300 px-2 py-2">
                Number of drawn concepts
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Number of drawn connections
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Average valence
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Draw CAM
              </th>
            </tr>
          </thead>
          <tbody>
            {singleStudy?.map((study, index) => (
              <tr
                key={study.namestudy}
                className={`border-y-4 border-black ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="py-5 border border-gray-300 px-5">
                  {study.namestudy}
                </td>
                <td className="py-5 border border-gray-300 px-5">
                  {new Date(study.creation_date).toLocaleDateString() +
                    " (" +
                    new Date(study.creation_date).toLocaleTimeString() +
                    ")"}
                </td>
                <td className="py-5 border border-gray-300 px-5">
                  {"Placeholder" + index}
                </td>
                <td className="py-5 border border-gray-300 px-5">aa</td>
                <td className="py-5 border border-gray-300">bb</td>
                <td className="py-5 border border-gray-300">cc</td>
                <td className="py-5 border border-gray-300">
                  <Link
                    href={""}
                    className="px-1 text-blue-500 hover:underline"
                  >
                   Draw
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center space-x-5 flex-row mt-5">
          <div>
            {" "}
            <ButtonDeleteExperiment />
          </div>
          <div>
            {" "}
            <ButtonDownloadExperiment />
          </div>
        </div>
      </main>
    );
  }
}
