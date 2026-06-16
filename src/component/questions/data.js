// questions/data.js

export const QUESTIONS = [
  {
    id: 1,
    number: '01',
    title: 'What is the Virtual DOM and how does React use it?',
    tags: ['React Basics', 'Core'],
    status: 'Solved',
    difficulty: 'Easy',
    bookmarked: false,
  },
  {
    id: 2,
    number: '02',
    title: 'Explain the difference between useMemo and useCallback',
    tags: ['Hooks'],
    status: 'Solved',
    difficulty: 'Medium',
    bookmarked: false,
  },
  {
    id: 3,
    number: '03',
    title: 'How does React Fiber architecture improve rendering performance?',
    tags: ['Advanced', 'Internals'],
    status: 'Attempted',
    difficulty: 'Hard',
    bookmarked: false,
  },
  {
    id: 4,
    number: '04',
    title: 'What are controlled vs uncontrolled components?',
    tags: ['Forms'],
    status: 'Solved',
    difficulty: 'Easy',
    bookmarked: false,
  },
  {
    id: 5,
    number: '05',
    title: 'Explain how Context API compares to Redux for state management',
    tags: ['State', 'Redux'],
    status: 'New',
    difficulty: 'Medium',
    bookmarked: false,
  },
  {
    id: 6,
    number: '06',
    title: 'Implement a custom useDebounce hook from scratch',
    tags: ['Hooks', 'Custom'],
    status: 'New',
    difficulty: 'Medium',
    bookmarked: false,
  },
  {
    id: 7,
    number: '07',
    title: 'What is code splitting and how does React.lazy help?',
    tags: ['Performance', 'Advanced'],
    status: 'Solved',
    difficulty: 'Hard',
    bookmarked: true,
  },
  {
    id: 8,
    number: '08',
    title: 'When would you use useRef instead of useState?',
    tags: ['Hooks'],
    status: 'Solved',
    difficulty: 'Easy',
    bookmarked: false,
  },
  {
    id: 9,
    number: '09',
    title: 'What is the difference between useLayoutEffect and useEffect?',
    tags: ['Hooks', 'Advanced'],
    status: 'Attempted',
    difficulty: 'Hard',
    bookmarked: false,
  },
  {
    id: 10,
    number: '10',
    title: 'How does React handle event delegation?',
    tags: ['React Basics', 'Events'],
    status: 'New',
    difficulty: 'Easy',
    bookmarked: false,
  },
  {
    id: 11,
    number: '11',
    title: 'What is React Suspense and when would you use it?',
    tags: ['Advanced', 'Async'],
    status: 'New',
    difficulty: 'Hard',
    bookmarked: false,
  },
  {
    id: 12,
    number: '12',
    title: 'Explain the reconciliation algorithm in React',
    tags: ['Internals', 'Core'],
    status: 'Attempted',
    difficulty: 'Hard',
    bookmarked: true,
  },
];

export const DIFFICULTY_DOT = {
  Easy:   'bg-green-500',
  Medium: 'bg-yellow-400',
  Hard:   'bg-red-500',
};

export const STATUS_STYLES = {
  Solved: {
    light: 'text-green-600',
    dark:  'text-green-400',
    label: '✓ Solved',
  },
  Attempted: {
    light: 'text-yellow-600',
    dark:  'text-yellow-400',
    label: '~ Attempted',
  },
  New: {
    light: 'text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full text-xs font-semibold',
    dark:  'text-indigo-300 bg-indigo-900/40 border border-indigo-700 px-2 py-0.5 rounded-full text-xs font-semibold',
    label: '• New',
  },
};

export const FILTERS = ['All', 'Easy', 'Medium', 'Hard', 'Bookmarked'];
