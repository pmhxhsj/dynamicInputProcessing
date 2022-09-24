import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetchQuestion from "../../constants/surveyQuestion";
import { ISurvey, ISurveyStep } from "../../constants/surveyQuestion";

const SurveyForm = () => {
  const [surveyQuestion, setSurveyQuestion] = useState<ISurvey>();
  const location = useLocation();

  useEffect(() => {
    const url: string = location.pathname.substr(-1);
    setSurveyQuestion(fetchQuestion[+url - 1]);
  }, [location]);

  return <div>SurveyForm</div>;
};

export default SurveyForm;
