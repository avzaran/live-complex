import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuizIntro from "./QuizIntro";
import QuizStep from "./Step";
import QuizResult from "./QuizResult";
import { quizData } from "./QuizData";

const QuizRoutes = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (stepIndex, answer) => {
    const updatedAnswers = { ...answers, [stepIndex]: answer };
    setAnswers(updatedAnswers);

    const nextStep = stepIndex + 1;
    if (nextStep < quizData.length) {
      navigate(`/quiz/step${nextStep}`);
    } else {
      navigate("/quiz/result", { state: { answers: updatedAnswers } });
    }
  };

  return (
    <Routes>
      {quizData.map((question, index) => (
        <Route
          key={index}
          path={`step${index}`}
          element={
            <QuizStep
              question={question}
              stepIndex={index}
              onAnswer={(answer) => handleAnswer(index, answer)}
              currentAnswer={answers[index] || ""}
              totalSteps={quizData.length}
            />
          }
        />
      ))}
      <Route path="/result" element={<QuizResult />} />
    </Routes>
  );
};

export default QuizRoutes;
