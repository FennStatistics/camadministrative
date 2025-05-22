"use client";

import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import logoCAM from "../../public/images/logoCAM.svg";

import ButtonInformation from "@/components/Buttons/Information";
import ButtonGetStarted from "@/components/Buttons/GetStarted";
import ButtonOnlineDocumentation from "@/components/Buttons/OnlineDocumentation";

export default function differentVersions() {
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  if (isMobile) {
    return (
      <div>
        <div
          className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
          role="alert"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <p>
            Please read the following information. Be aware, that the most
            functionalities of the webpage
            <em className="mx-1">drawyourminds.de</em> cannot be accessed on a
            mobile device.
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center px-2 mt-5">
          <div className="text-sm font-semibold">
            Cognitive-Affective Maps <i>extended logic</i> - Tools to Collect
            and Analyze Attitudes and Belief Systems
            <p className="text-sm font-light text-gray-600">
              {" "}
              Build fully functional and accessible "Cognitive Affective Map"
              studies - faster than ever!{" "}
            </p>
          </div>
        </div>

        <ul className="text-sm list-disc space-y-2 px-5 mt-5">
          <li>
            <span className="font-bold">Online based</span> - all our tools are
            running online, so there is no need to set up any server (although
            you could)
          </li>
          <li>
            <span className="font-bold">
              Free and open source for non-commercial use
            </span>{" "}
            - all our tools have MIT license, you can use the tools of the
            software package "Cognitive-Affective Maps <i>extended logic</i>" in
            any project (just don't forget to quote us)
          </li>
          <li>
            <span className="font-bold">Tested systematically</span> - all of
            the provided tools were tested, ensuring best data quality
          </li>
        </ul>

        <div className="text-sm font-semibold text-left px-2 mt-5">
          Cognitive-Affective Map (CAM) tools encompass the following tools:
        </div>
        <ul className="text-sm list-disc space-y-2 px-5 mt-5">
          <li>
            <span className="font-bold">Data Collection Tool</span> - configure
            CAM studies and collect CAMs
          </li>
          <li>
            <span className="font-bold">Data Analysis Tool</span> - application
            (Shiny) to analyze collected CAM data
          </li>
          <li>
            <span className="font-bold">Administrative Panel</span> - setting up
            studies with different designs (please use a Laptop or a desktop
            computer to set up a study)
          </li>
        </ul>
        <div className="text-sm font-semibold mt-5 mb-5">
          For further information, please check out the online documentation:
          <p className="w-1/2 mt-3">
            <ButtonOnlineDocumentation />
          </p>
        </div>
        <div className="text-sm mt-10">
          <p className="text-base">
            <span className="font-bold">Corresponding article:</span>
            Fenn, J., Gouret, F., Gorki, M., Reuter, L., Gros, W., Hüttner, P.,
            & Kiesel, A. (2025).
            <span className="italic">
              Cognitive-affective maps extended logic: Proposing tools to
              collect and analyze attitudes and belief systems
            </span>
            .<span className="italic">Behavior Research Methods, 57</span>(6),
            174.{" "}
            <a
              href="https://doi.org/10.3758/s13428-025-02699-y"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.3758/s13428-025-02699-y
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-2 gap-2 place-items-center">
          <div className="text-2xl font-semibold">
            Cognitive-Affective Maps <i>extended logic</i> - Tools to Collect
            and Analyze Attitudes and Belief Systems
            <p className="text-xl font-light text-gray-600">
              {" "}
              Build fully functional and accessible "Cognitive Affective Map"
              studies - faster than ever!{" "}
            </p>
          </div>
          <div>
            <Image
              src={logoCAM.src}
              width={350}
              height={350}
              alt="CAM logo"
              className="sm-w-32"
            />
          </div>
        </div>

        <ul className="list-disc space-y-3 px-6 mt-5">
          <li>
            <span className="font-bold">Online based</span> - all our tools are
            running online, so there is no need to set up any server (although
            you could)
          </li>
          <li>
            <span className="font-bold">
              Free and open source for non-commercial use
            </span>{" "}
            - all our tools have MIT license, you can use the tools of the
            software package "Cognitive-Affective Maps <i>extended logic</i>" in
            any project (just don't forget to quote us)
          </li>
          <li>
            <span className="font-bold">Tested systematically</span> - all of
            the provided tools were tested, ensuring best data quality
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-10 place-items-center mx-40 mt-5">
          <div className="text-xl font-semibold">
            For further information, please read the information page:
            <p className="w-1/2 mt-3">
              <ButtonInformation />
            </p>
          </div>
          <div className="text-xl font-semibold">
            If you just want to get started, please read the get started page:
            <p className="w-1/2 mt-3">
              <ButtonGetStarted />
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-base">
            <span className="font-bold">Corresponding article:</span>
            Fenn, J., Gouret, F., Gorki, M., Reuter, L., Gros, W., Hüttner, P.,
            & Kiesel, A. (2025).
            <span className="italic">
              Cognitive-affective maps extended logic: Proposing tools to
              collect and analyze attitudes and belief systems
            </span>
            .<span className="italic">Behavior Research Methods, 57</span>(6),
            174.{" "}
            <a
              href="https://doi.org/10.3758/s13428-025-02699-y"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.3758/s13428-025-02699-y
            </a>
          </p>
        </div>
      </div>
    );
  }
}
