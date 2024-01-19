'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuizConfig } from '@/store';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const config = useQuizConfig((state) => state.config);
  const setScore = useQuizConfig((state) => state.setScore);
  const router = useRouter();

  useEffect(() => {
    // Fetch quiz questions based on configuration
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://quizapi.io/api/v1/questions?apiKey=wfUrXz9ZSbALf25ZQfyCkYG2aJ0waQV3o7qhIbqN&limit=${config.numberOfQuestion}&tags=${config.category}&difficulty=${config.level}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error.message);
      }
    };

    fetchData();
  }, []);

  // Handle click on an answer
  const handleAnswerClick = (questionId, selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));

    // Check if the selected answer is correct and update the score
    if (selectedAnswer === questions.find((q) => q.id === questionId).correct_answer) {
      // Update the score based on the difficulty level
      if (config.level === "Medium") {
        setScore();
      }
      if (config.level === "Hard") {
        setScore();
        setScore();
        setScore();
        setScore();
      }
    }
  };

  // Handle click to view the score
  const handleOnclick = () => {
    router.replace('/Score');
  };

  // Render the quiz questions
  const renderQuestions = () => {
    return questions.map((question) => (
      <>
        <div key={question.id} className="question-container mb-8 mx-3 bg-slate-200 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
          <ul className='flex flex-wrap gap-4'>
            {Object.entries(question.answers).map(([key, value]) => (
              value !== null && (
                <li key={key} className="w-1/2">
                  <Button
                    style={{
                      backgroundColor:
                        selectedAnswers[question.id] === key
                          ? key === question.correct_answer
                            ? '#06b6d4'
                            : 'coral'
                          : '',
                    }}
                    className={`answer-option`}
                    onClick={() => handleAnswerClick(question.id, key)}
                    disabled={selectedAnswers[question.id] !== undefined}
                  >
                    {key}: {value}
                  </Button>
                </li>
              )
            ))}
          </ul>

          {selectedAnswers[question.id] !== undefined && (
            <p className={`result-message mt-4 ${selectedAnswers[question.id] === question.correct_answer ? 'correct' : 'incorrect'}`}>
              {selectedAnswers[question.id] === question.correct_answer ? 'Correct!' : 'Incorrect!'} 
              {selectedAnswers[question.id] !== question.correct_answer && ` Correct Answer: ${question.correct_answer}`}
            </p>
          )}
          {console.log("Selected Answer:", selectedAnswers[question.id])}
          {console.log("Correct Answer:", question.correct_answer)}
        </div>
      </>
    ));
  };

  return (
    <>
      <div className="quiz-container">
        <div className='flex items-center justify-center text-center'>
          <h1 className="mb-4 text-5xl font-serif text-slate-500 font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
            Quiz Questions
          </h1>
        </div>
        {questions.length > 0 ? renderQuestions() : <p className='p-2 text-sm font-semibold'>Preparing the quiz for you...</p>}
      </div>
      <footer className="p-4 flex items-end justify-end">
        <Button onClick={handleOnclick} >View Score</Button>
      </footer>
    </>
  );
};

export default QuizComponent;
