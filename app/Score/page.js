'use client'
import { useQuizConfig } from '@/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";

const ScorePage = () => {
    // Access router for navigation and quiz configuration from the store
    const router = useRouter();
    const config = useQuizConfig((state) => state.config);

    // Calculate marks for each question based on difficulty level
    let marksofEachQuestion = 1;
    if(config.level === "Medium") {
        marksofEachQuestion = 2;
    }
    if(config.level === "Hard") {
        marksofEachQuestion = 5;
    }

    // Calculate accuracy percentage
    const accuracy = (config.score / (config.numberOfQuestion * marksofEachQuestion)) * 100;

    // Handle click to navigate back to dashboard
    const handleOnclick = () => {
        router.push('/dashboard');
    }

    // Calculate the number of correct answers
    const correct = config.score / marksofEachQuestion;

    return (
        <div className="flex flex-col justify-center items-center">
            {/* Lottie Animation */}
            <Player
                src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json"
                className="player"
                loop
                autoplay
                style={{ height: "400px", width: "400px" }}
            />

            {/* Statistics Section */}
            <div className='flex justify-between gap-6'>
                <h1 className='mt-5 text-center font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    Total No of Questions: <span>{config.numberOfQuestion}</span>
                </h1>
                <h1 className='mt-5 text-center font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    No of Correct Answers: <span>{correct}</span>
                </h1>
                <h1 className='mt-5 text-center font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    Marks of Each Question: <span>{marksofEachQuestion}</span>
                </h1>
                <h1 className='mt-5 text-center font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    Total Score: <span>{config.score}</span>
                </h1>
            </div>

            {/* Accuracy Section */}
            <h1 className="mt-5 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                YOUR ACCURACY :{" "}
                <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {accuracy}%
                </span>
            </h1>

            {/* Start Over Button */}
            <button
                onClick={handleOnclick}
                className="bg-cyan-600 hover:bg-cyan-500 my-10 text-white font-semibold py-2 px-10 border border-gray-400 rounded-lg shadow"
            >
                Start Over
            </button>
        </div>
    );
}

export default ScorePage;
