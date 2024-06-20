"use client";

import { addCAMstudy } from "@/app/dashboard/actions";

import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

export default function ButtonDownloadExperiment() {
  // Submit
  const handleDownloadExperiment = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("data downloaded successfully!");

    /*
      const getFeedback = await addCAMstudy(name, json.config, json.CAM, link);
      if (getFeedback === null) {
        alert(
          "Study name already exists. Please choose another name. And click again on the button to add the study."
        );
      }else{
        setOpen(!open)
      }
    } else {
      console.log("Form has errors. Please correct them.");      */
  };

  return (
    <>
      <Button
        onClick={handleDownloadExperiment}
        className="py-3 px-6 flex rounded-xl bg-green-400 hover:bg-green-800 md:text-xl sm:text-sm justify-center items-center"
        placeholder="Button open placeholder"
      >
        Download Data
      </Button>
    </>
  );
}
