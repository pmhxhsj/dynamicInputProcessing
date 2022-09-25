import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetchQuestion from "../../constants/surveyQuestion";
import { ISurvey, ISurveyStep } from "../../constants/surveyQuestion";

import styles from "./SurveyForm.module.scss";

const MoveButton = ({
  idx,
  leng,
  onClickPrev,
  onClickNext,
}: {
  idx: number;
  leng: number;
  onClickPrev: any;
  onClickNext: any;
}) => (
  <>
    {idx !== 0 && (
      <button type="button" onClick={onClickPrev}>
        이전
      </button>
    )}
    {idx !== leng - 1 ? (
      <button type="button" onClick={onClickNext}>
        다음
      </button>
    ) : (
      <button type="submit">제출</button>
    )}
  </>
);

const SurveyForm = () => {
  const [page, setPage] = useState(0);
  const [surveyQuestion, setSurveyQuestion] = useState<ISurvey>();
  const location = useLocation();

  console.log(surveyQuestion);

  useEffect(() => {
    const url: string = location.pathname.substr(-1);
    setSurveyQuestion(fetchQuestion[+url - 1]);
  }, [location]);

  const moveNextQuestion = (): void => {
    setPage((prev) => prev + 1);
  };

  const movePrevQuestion = (): void => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className={styles.SurveyForm}>
      <div>
        <h2>{surveyQuestion?.title}</h2>
        <div>
          {surveyQuestion?.steps.map((step: ISurveyStep[], idx: number) => (
            <form>
              {page === idx && (
                <div>
                  {step.map((item: ISurveyStep) => (
                    <div>
                      <div>{item.label}</div>
                      <input type="text" />
                    </div>
                  ))}
                  <MoveButton
                    idx={idx}
                    leng={surveyQuestion?.steps.length}
                    onClickPrev={movePrevQuestion}
                    onClickNext={moveNextQuestion}
                  />
                </div>
              )}
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
