import React from "react";

import { Link } from "react-router-dom";

import fetchSurveyList from "../../constants/surveyList";
import { ISurveyList } from "../../types/survey";

import styles from "./SurveyMain.module.scss";

const SurveyMain = () => (
  <div className={styles.SurveyMain}>
    <h2>평가</h2>
    <ul className={styles.SurveyMain__list}>
      {fetchSurveyList.map((v: ISurveyList) => (
        <Link
          className={styles.SurveyMain__link}
          to={`/web/surveys/${v.id}`}
          key={v.id}
        >
          <li className={styles.SurveyMain__list__item}>{v.title}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default SurveyMain;
