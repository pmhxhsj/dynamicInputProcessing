export interface ISurveyList {
  id: string;
  title: string;
}

export interface ISurvey {
  id: string;
  title: string;
  steps: {
    type: string;
    label: string;
    validation?: {
      isRequired: boolean;
    };
  }[][];
}

export interface ISurveyStep {
  type: string;
  label: string;
  validation?: {
    isRequired: boolean;
  };
}
