import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import SurveyForm from "./pages/SurveyForm";
import SurveyMain from "./pages/SurveyMain";

const App = () => (
  <Router>
    <Routes>
      <Route path="/web/surveys/:tid" element={<SurveyForm />} />
      <Route path="/web" element={<SurveyMain />} />
      <Route path="/" element={<Navigate to="/web" replace />} />
    </Routes>
  </Router>
);

export default App;
