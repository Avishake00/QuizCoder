"use client";
import DropdownOptions from "@/components/Quiz/Buttons/DropdownOptions";
import StartButton from "@/components/Quiz/Buttons/StartButton";
import { Input } from "@/components/ui/input";
import { useQuizConfig } from "@/store";
import React from "react";

const DashPage = () => {
  // Retrieve and use quiz configuration and addQuestionNumber function from store
  const config = useQuizConfig((state) => state.config);
  const addQuestionNumber = useQuizConfig((state) => state.addQuestionNumber);

  return (
    <>
      {/* Quiz Introduction Section */}
      <section className="flex flex-col justify-center items-center my-10">
        <h1 className="mb-4 text-5xl font-serif text-slate-500 font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl dark:text-white">
          Get started with QuizCoder
        </h1>

        {/* Configuration Section */}
        <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">
          {/* Section for Option Selection Heading */}
          <section className="flex pb-2 mb-2 text-blue-500">
            <h2 className="text-xl font-sans font-semibold">
              Select the below Options:
            </h2>
          </section>

          {/* Number of Questions Input */}
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-md font-sans font-medium "
            >
              No of questions
            </label>

            <Input
              className="w-full px-4 py-2 mt-1 text-sm text-gray-900 rounded-lg bg-gray-50 border border-blue-300 focus:outline-none focus:ring focus:border-blue-500 peer  "
              placeholder="Enter the number of questions..."
              defaultValue={10}
              min={0}
              max={50}
              onChange={(e) => addQuestionNumber(e.target.value)}
            />
          </div>

          {/* Dropdown Options Section */}
          <div className="flex flex-col mt-5">
            <p className="mt-2 text-md font-sans font-medium  ">
              Select Options
            </p>

            {/* DropdownOptions component for selecting quiz options */}
            <DropdownOptions />
          </div>

          {/* Start Button Section */}
          <StartButton />
        </section>
      </section>
    </>
  );
};

export default DashPage;
