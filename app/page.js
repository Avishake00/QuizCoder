'use client'
import React, { useState } from 'react';
import { MdQuiz } from 'react-icons/md';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
  const quizData = [
    {
      question: 'What is a correct syntax to output "Hello World" in Java?',
      options: ['echo("Hello World")', 'System.out.println("Hello World")', 'Console.WriteLine("Hello World")', 'print("Hello World")'],
      correctAnswer: 'System.out.println("Hello World")',
    },
    {
      question: 'How do you insert COMMENTS in Java code?',
      options: ['/*This is a comment', '//This is a comment', '#This is a comment', '&This is a comment'],
      correctAnswer: '//This is a comment',
    },
    {
      question: 'Which data type is used to create a variable that should store text?',
      options: ['String', 'Txt', 'myString', 'string'],
      correctAnswer: 'String',
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (questionIndex, selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  return (
    <>
      <div className="flex gap-1 items-center justify-center mt-10">
        <h1 className="mb-4 text-5xl font-serif text-slate-500 font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
      Welcome to QuizCoder
        </h1>
     

        <MdQuiz className=" text-4xl text-slate-500" />
      </div>


      
        <h1 className="mb-2 flex items-center text-center justify-center text-sm font-serif text-slate-500 font-extrabold leading-none tracking-tight md:text-5xl lg:text-sm dark:text-white">
          
          An engaging and interactive quiz application where users can test their knowledge on various technical topics.
          <Link href={'https://linktr.ee/Avishake2003'} className='underline mr-1 hover:text-blue-500 ml-1'> Contact For Support!</Link>
        </h1>
        <h1 className="mb-2 flex items-center text-center justify-center text-sm font-serif text-slate-500 font-extrabold leading-none tracking-tight md:text-5xl lg:text-sm dark:text-white">
          <Link href={'/Login'} className='underline mr-1 hover:text-blue-500'>Login</Link>
          
         For Better Experience
        </h1>
     

      
      
      
      <div className="flex gap-1 items-center justify-center mt-10">
        <h2 className="mb-4 text-2xl font-serif text-slate-500 font-extrabold leading-none tracking-tight md:text-5xl lg:text-4xl dark:text-white">
        Sample Quiz
        </h2>
     

      
      </div>
      

      <div className="flex justify-center items-center mt-8">
        <Carousel className="w-full max-w-screen-lg overflow-hidden shadow-lg">
          <CarouselContent>
            {quizData.map((quiz, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className=" bg-slate-100  rounded-lg overflow-hidden h-72 shadow-slate-400 shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className='card bg-slate-300 rounded-lg text-black font-sans font-semibold p-4'>

                      <h3 className="text-lg font-bold font-sans mb-4">{quiz.question}</h3>
                      <ul className="text-black ">
                        {quiz.options.map((option, optionIndex) => (
                          <li
                          key={optionIndex}
                          className={`${
                            selectedAnswers[index] !== undefined &&
                            selectedAnswers[index] === option
                              ? selectedAnswers[index] === quiz.correctAnswer
                                ? 'correct-answer'
                                : 'incorrect-answer'
                              : ''
                          } `}
                        >
                            <button
                            className='border border-slate-100 rounded-lg hover:bg-slate-200 p-1 w-full text-left'
                              onClick={() => handleAnswerClick(index, option)}
                              disabled={selectedAnswers[index] !== undefined}
                              >
                              {option}
                            </button>
                          </li>
                        ))}
                      </ul>
                      {selectedAnswers[index] !== undefined && (
                        <p className={`result-message mt-4 ${
                          selectedAnswers[index] === quiz.correctAnswer ? 'correct' : 'incorrect'
                        }`}>
                          {selectedAnswers[index] === quiz.correctAnswer
                            ? 'Correct!'
                            : `Incorrect! Correct Answer: ${quiz.correctAnswer}`}
                        </p>
                      )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black hover:text-gray-200 absolute top-1/2 transform -translate-y-1/2 left-4" />
          <CarouselNext className="text-black hover:text-gray-200 absolute top-1/2 transform -translate-y-1/2 right-4" />
        </Carousel>
      </div>
    </>
  );
};

export default Homepage;
