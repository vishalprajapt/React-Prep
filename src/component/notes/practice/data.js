// notes/practice/data.js

export const PRACTICE_QUESTIONS = [
  {
    id: 1,
    question: 'What is JSX and why does React use it?',
    difficulty: 'Easy',
    submitted: true,
    submittedAnswer:
      'JSX is a syntax extension for JavaScript that looks like HTML. React uses it because it makes component structure readable and allows writing UI logic alongside markup in a single file.',
  },
  {
    id: 2,
    question: 'Explain the concept of lifting state up in React.',
    difficulty: 'Medium',
    submitted: true,
    submittedAnswer:
      'Lifting state up means moving shared state to the closest common ancestor so multiple child components can access and update it via props.',
  },
  {
    id: 3,
    question: 'What are controlled vs uncontrolled components?',
    difficulty: 'Medium',
    submitted: true,
    submittedAnswer:
      'Controlled components have their state managed by React via useState. Uncontrolled components store their own state internally, accessed via refs.',
  },
  {
    id: 4,
    question: 'What is the difference between useLayoutEffect and useEffect?',
    difficulty: 'Hard',
    submitted: true,
    submittedAnswer:
      'useEffect runs asynchronously after the browser paints. useLayoutEffect runs synchronously after DOM mutations but before the browser paints — useful for measuring DOM elements.',
  },
  {
    id: 5,
    question: 'How does React handle events differently from plain HTML?',
    difficulty: 'Easy',
    submitted: true,
    submittedAnswer:
      'React uses synthetic events (camelCase like onClick) that wrap native DOM events for cross-browser consistency. Event delegation is used — a single listener at the root handles all events.',
  },
  {
    id: 6,
    question: 'When would you use useRef instead of useState?',
    difficulty: 'Medium',
    submitted: true,
    submittedAnswer:
      'useRef is used when you need to persist a value across renders without triggering a re-render — like storing a DOM element reference or a timer ID.',
  },
  {
    id: 7,
    question: 'What is the difference between useCallback and useMemo in React? When would you use each?',
    difficulty: 'Medium',
    submitted: false,
    submittedAnswer: '',
  },
  {
    id: 8,
    question: 'Explain React Suspense and when you would use it.',
    difficulty: 'Hard',
    submitted: false,
    submittedAnswer: '',
  },
  {
    id: 9,
    question: 'What is code splitting in React and how does React.lazy help?',
    difficulty: 'Hard',
    submitted: false,
    submittedAnswer: '',
  },
];

export const DIFFICULTY_STYLES = {
  Easy:   { light: 'text-green-600 bg-green-50 border-green-200',    dark: 'text-green-400 bg-green-900/30 border-green-800' },
  Medium: { light: 'text-yellow-600 bg-yellow-50 border-yellow-200', dark: 'text-yellow-400 bg-yellow-900/30 border-yellow-800' },
  Hard:   { light: 'text-red-600 bg-red-50 border-red-200',          dark: 'text-red-400 bg-red-900/30 border-red-800' },
};
