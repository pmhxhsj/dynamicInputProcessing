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

const fetchQuestion: ISurvey[] = [
  {
    id: "1",
    title: "백엔드 선호도 조사",
    steps: [
      [
        {
          type: "text",
          label: "이름은 무엇인가요",
          validation: {
            isRequired: true,
          },
        },
        {
          type: "text",
          label: "개인기는 무엇인가요?",
          validation: {
            isRequired: true,
          },
        },
        {
          type: "text",
          label: "본인의 개발 실력이 0~100에서 작성해주세요.",
          validation: {
            isRequired: true,
          },
        },
      ],
      [
        {
          type: "text",
          label: "자바의 장점이 무엇이라 생각하시나요",
          validation: {
            isRequired: true,
          },
        },
        {
          type: "text",
          label: "마지막으로 하고싶은 말이 있으신가요?",
          validation: {
            isRequired: true,
          },
        },
      ],
    ],
  },
  {
    id: "2",
    title: "프론트엔드 선호도 조사",
    steps: [
      [
        {
          type: "text",
          label: "이름은 무엇인가요",
          validation: {
            isRequired: true,
          },
        },
        {
          type: "text",
          label: "본인의 개발 실력이 0~100에서 작성해주세요.",
          validation: {
            isRequired: true,
          },
        },
      ],
      [
        {
          type: "text",
          label: "타입스크립트의 장점이 무엇이라 생각하시나요",
        },
      ],
    ],
  },
  {
    id: "3",
    title: "CSS 선호도 조사",
    steps: [
      [
        {
          type: "text",
          label: "이름은 무엇인가요",
          validation: {
            isRequired: true,
          },
        },
        {
          type: "text",
          label: "SCSS의 장점이 무엇인가요?",
          validation: {
            isRequired: true,
          },
        },
        {
          type: "text",
          label: "퍼블리셔가 되고 싶은 이유가 무엇인가요",
          validation: {
            isRequired: true,
          },
        },
      ],
    ],
  },
];

export default fetchQuestion;
