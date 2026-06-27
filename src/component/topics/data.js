// topics/data.js

// ── Per-topic questions ──────────────────────────────────────────────────────
export const TOPIC_QUESTIONS = {
  1: {
    description:
      'Learn everything React developers must know — components, props, state, events, and the virtual DOM.',
    tags: ['90% complete', '32 questions', 'In Progress'],
    stats: { completed: 32, inProgress: 2, reviewing: 2 },
    sections: [
      {
        title: 'ADVANCED',
        questions: [
          {
            id: 101,
            title: 'What is the Virtual DOM and how does React use it?',
            answeredBy: '2.4k answered · 3 days ago',
            difficulty: 'Medium',
            status: 'answered',
          },
          {
            id: 102,
            title: 'Difference between controlled and uncontrolled components',
            answeredBy: '1.1k answered · 5 days ago',
            difficulty: 'Hard',
            status: 'answered',
          },
        ],
      },
      {
        title: 'COMPLETED',
        questions: [
          {
            id: 103,
            title: 'What is JSX and why do we use it?',
            difficulty: 'Easy',
            status: 'done',
          },
          {
            id: 104,
            title: 'What are React props and how do we pass data?',
            difficulty: 'Easy',
            status: 'done',
          },
          {
            id: 105,
            title: 'Explain the React component lifecycle methods',
            difficulty: 'Medium',
            status: 'done',
          },
          {
            id: 106,
            title: 'What is state in React and how do you manage it?',
            difficulty: 'Medium',
            status: 'done',
          },
          {
            id: 107,
            title: 'How does React handle event handling differently from JS?',
            difficulty: 'Easy',
            status: 'done',
          },
        ],
      },
      {
        title: 'KEY TOPICS',
        questions: [
          {
            id: 108,
            title: 'What are React Portals and when would you use them?',
            difficulty: 'Hard',
            status: 'new',
          },
          {
            id: 109,
            title: "Describe React's reconciliation algorithm in detail",
            difficulty: 'Hard',
            status: 'new',
          },
        ],
      },
    ],
  },
  2: {
    description: 'Deep dive into React Hooks — useState, useEffect, useRef, and custom hooks.',
    tags: ['68% complete', '28 questions', 'In Progress'],
    stats: { completed: 19, inProgress: 4, reviewing: 5 },
    sections: [
      {
        title: 'COMPLETED',
        questions: [
          { id: 201, title: 'What is useState and how does it work?', difficulty: 'Easy', status: 'done' },
          { id: 202, title: 'Explain the useEffect hook and its dependencies array', difficulty: 'Medium', status: 'done' },
          { id: 203, title: 'What is useRef and when would you use it?', difficulty: 'Easy', status: 'done' },
        ],
      },
      {
        title: 'IN PROGRESS',
        questions: [
          { id: 204, title: 'How do you build a custom hook?', difficulty: 'Medium', status: 'answered' },
          { id: 205, title: 'Difference between useMemo and useCallback', difficulty: 'Hard', status: 'answered' },
        ],
      },
      {
        title: 'KEY TOPICS',
        questions: [
          { id: 206, title: 'What are the rules of hooks?', difficulty: 'Medium', status: 'new' },
          { id: 207, title: 'Explain useReducer and when to prefer it over useState', difficulty: 'Hard', status: 'new' },
        ],
      },
    ],
  },

  3: {
    description: 'Master Redux for predictable state management — actions, reducers, store, and Redux Toolkit.',
    tags: ['45% complete', '22 questions', 'In Progress'],
    stats: { completed: 10, inProgress: 3, reviewing: 9 },
    sections: [
      {
        title: 'COMPLETED',
        questions: [
          { id: 301, title: 'What is Redux and why do we use it?', difficulty: 'Easy', status: 'done' },
          { id: 302, title: 'Explain the three core principles of Redux', difficulty: 'Easy', status: 'done' },
          { id: 303, title: 'What is the difference between actions and action creators?', difficulty: 'Easy', status: 'done' },
          { id: 304, title: 'How does a reducer work in Redux?', difficulty: 'Medium', status: 'done' },
        ],
      },
      {
        title: 'IN PROGRESS',
        questions: [
          { id: 305, title: 'What is Redux Toolkit and why is it recommended?', answeredBy: '1.8k answered · 2 days ago', difficulty: 'Medium', status: 'answered' },
          { id: 306, title: 'How does createSlice work in Redux Toolkit?', answeredBy: '1.2k answered · 4 days ago', difficulty: 'Medium', status: 'answered' },
        ],
      },
      {
        title: 'KEY TOPICS',
        questions: [
          { id: 307, title: 'What is middleware in Redux? Explain redux-thunk', difficulty: 'Hard', status: 'new' },
          { id: 308, title: 'How do you handle async operations with Redux Toolkit?', difficulty: 'Hard', status: 'new' },
          { id: 309, title: 'When should you use Redux vs Context API?', difficulty: 'Medium', status: 'new' },
        ],
      },
    ],
  },

  4: {
    description: 'Master Next.js — file-based routing, SSR, SSG, ISR, App Router, and server components.',
    tags: ['30% complete', '30 questions', 'In Progress'],
    stats: { completed: 9, inProgress: 5, reviewing: 16 },
    sections: [
      {
        title: 'COMPLETED',
        questions: [
          { id: 401, title: 'What is Next.js and how is it different from React?', difficulty: 'Easy', status: 'done' },
          { id: 402, title: 'Explain file-based routing in Next.js', difficulty: 'Easy', status: 'done' },
          { id: 403, title: 'What is the difference between SSR and SSG in Next.js?', difficulty: 'Medium', status: 'done' },
        ],
      },
      {
        title: 'IN PROGRESS',
        questions: [
          { id: 404, title: 'What is Incremental Static Regeneration (ISR)?', answeredBy: '980 answered · 1 day ago', difficulty: 'Medium', status: 'answered' },
          { id: 405, title: 'Explain the App Router vs Pages Router in Next.js 13+', answeredBy: '1.1k answered · 3 days ago', difficulty: 'Hard', status: 'answered' },
        ],
      },
      {
        title: 'KEY TOPICS',
        questions: [
          { id: 406, title: 'What are React Server Components and how do they work in Next.js?', difficulty: 'Hard', status: 'new' },
          { id: 407, title: 'How does image optimisation work in Next.js?', difficulty: 'Medium', status: 'new' },
          { id: 408, title: 'What are middleware functions in Next.js?', difficulty: 'Hard', status: 'new' },
        ],
      },
    ],
  },

  5: {
    description: 'Advanced React patterns — compound components, render props, HOCs, Context, and Suspense.',
    tags: ['20% complete', '40 questions', 'In Progress'],
    stats: { completed: 8, inProgress: 6, reviewing: 26 },
    sections: [
      {
        title: 'COMPLETED',
        questions: [
          { id: 501, title: 'What is the Higher Order Component (HOC) pattern?', difficulty: 'Medium', status: 'done' },
          { id: 502, title: 'Explain the render props pattern', difficulty: 'Medium', status: 'done' },
        ],
      },
      {
        title: 'IN PROGRESS',
        questions: [
          { id: 503, title: 'What are compound components and how do you implement them?', answeredBy: '760 answered · 2 days ago', difficulty: 'Hard', status: 'answered' },
          { id: 504, title: 'How does React.forwardRef work and when do you need it?', answeredBy: '890 answered · 5 days ago', difficulty: 'Hard', status: 'answered' },
        ],
      },
      {
        title: 'KEY TOPICS',
        questions: [
          { id: 505, title: 'Explain React.lazy and Suspense for code splitting', difficulty: 'Hard', status: 'new' },
          { id: 506, title: 'What is the Context selector pattern to avoid re-renders?', difficulty: 'Hard', status: 'new' },
          { id: 507, title: 'How do you implement an error boundary in React?', difficulty: 'Medium', status: 'new' },
        ],
      },
    ],
  },

  6: {
    description: 'Optimise React apps — memoization, lazy loading, bundle splitting, and profiling.',
    tags: ['0% complete', '18 questions', 'Not Started'],
    stats: { completed: 0, inProgress: 0, reviewing: 18 },
    sections: [
      {
        title: 'FUNDAMENTALS',
        questions: [
          { id: 601, title: 'What is React.memo and when should you use it?', difficulty: 'Medium', status: 'new' },
          { id: 602, title: 'How does useMemo help with performance?', difficulty: 'Medium', status: 'new' },
          { id: 603, title: 'What causes unnecessary re-renders and how do you prevent them?', difficulty: 'Medium', status: 'new' },
        ],
      },
      {
        title: 'ADVANCED OPTIMISATIONS',
        questions: [
          { id: 604, title: 'Explain virtualisation and why libraries like react-window exist', difficulty: 'Hard', status: 'new' },
          { id: 605, title: 'How do you profile a React app using DevTools?', difficulty: 'Medium', status: 'new' },
          { id: 606, title: 'What is code splitting and how do you implement it in React?', difficulty: 'Hard', status: 'new' },
        ],
      },
    ],
  },

  7: {
    description: 'Test React apps confidently — Jest, React Testing Library, unit and integration tests.',
    tags: ['0% complete', '24 questions', 'Not Started'],
    stats: { completed: 0, inProgress: 0, reviewing: 24 },
    sections: [
      {
        title: 'FUNDAMENTALS',
        questions: [
          { id: 701, title: 'What is the difference between unit, integration, and e2e tests?', difficulty: 'Easy', status: 'new' },
          { id: 702, title: 'How do you set up Jest with React?', difficulty: 'Easy', status: 'new' },
          { id: 703, title: 'What is React Testing Library and why is it preferred over Enzyme?', difficulty: 'Medium', status: 'new' },
        ],
      },
      {
        title: 'TESTING PATTERNS',
        questions: [
          { id: 704, title: 'How do you test a component that uses useState?', difficulty: 'Medium', status: 'new' },
          { id: 705, title: 'How do you mock API calls in React tests?', difficulty: 'Hard', status: 'new' },
          { id: 706, title: 'What is the userEvent vs fireEvent difference in RTL?', difficulty: 'Medium', status: 'new' },
          { id: 707, title: 'How do you test custom hooks with renderHook?', difficulty: 'Hard', status: 'new' },
        ],
      },
    ],
  },

  8: {
    description: 'Navigate React apps with React Router v6 — nested routes, loaders, and protected routes.',
    tags: ['0% complete', '16 questions', 'Not Started'],
    stats: { completed: 0, inProgress: 0, reviewing: 16 },
    sections: [
      {
        title: 'FUNDAMENTALS',
        questions: [
          { id: 801, title: 'How does React Router v6 differ from v5?', difficulty: 'Medium', status: 'new' },
          { id: 802, title: 'What is the difference between BrowserRouter and HashRouter?', difficulty: 'Easy', status: 'new' },
          { id: 803, title: 'How do you create nested routes in React Router v6?', difficulty: 'Medium', status: 'new' },
        ],
      },
      {
        title: 'ADVANCED ROUTING',
        questions: [
          { id: 804, title: 'How do you implement protected routes in React Router?', difficulty: 'Medium', status: 'new' },
          { id: 805, title: 'What are loaders and actions in React Router v6.4+?', difficulty: 'Hard', status: 'new' },
          { id: 806, title: 'How do you handle 404 pages in React Router?', difficulty: 'Easy', status: 'new' },
        ],
      },
    ],
  },

  9: {
    description: 'Use TypeScript with React — typed props, hooks, events, generics, and common patterns.',
    tags: ['0% complete', '50 questions', 'Not Started'],
    stats: { completed: 0, inProgress: 0, reviewing: 50 },
    sections: [
      {
        title: 'FUNDAMENTALS',
        questions: [
          { id: 901, title: 'How do you type component props with TypeScript?', difficulty: 'Easy', status: 'new' },
          { id: 902, title: 'What is the difference between interface and type in TypeScript?', difficulty: 'Medium', status: 'new' },
          { id: 903, title: 'How do you type useState with TypeScript?', difficulty: 'Easy', status: 'new' },
          { id: 904, title: 'How do you type event handlers in React + TypeScript?', difficulty: 'Medium', status: 'new' },
        ],
      },
      {
        title: 'ADVANCED PATTERNS',
        questions: [
          { id: 905, title: 'How do you use generics with React components?', difficulty: 'Hard', status: 'new' },
          { id: 906, title: 'What is the React.FC type and should you use it?', difficulty: 'Medium', status: 'new' },
          { id: 907, title: 'How do you type the children prop correctly?', difficulty: 'Medium', status: 'new' },
          { id: 908, title: 'How do you type useRef for DOM elements?', difficulty: 'Medium', status: 'new' },
        ],
      },
    ],
  },
};

export const TOPICS = [
  {
    id: 1,
    title: 'React Basics',
    questions: 36,
    progress: 90,
    status: 'In Progress',
    color: 'from-green-400 to-emerald-500',
    iconBg: 'bg-green-500',
    progressColor: 'bg-green-400',
  },
  {
    id: 2,
    title: 'React Hooks',
    questions: 28,
    progress: 68,
    status: 'In Progress',
    color: 'from-indigo-400 to-purple-500',
    iconBg: 'bg-indigo-500',
    progressColor: 'bg-indigo-500',
  },
  {
    id: 3,
    title: 'Redux',
    questions: 22,
    progress: 45,
    status: 'In Progress',
    color: 'from-yellow-400 to-orange-500',
    iconBg: 'bg-yellow-500',
    progressColor: 'bg-yellow-400',
  },
  {
    id: 4,
    title: 'Next.js',
    questions: 30,
    progress: 30,
    status: 'In Progress',
    color: 'from-cyan-400 to-blue-500',
    iconBg: 'bg-cyan-500',
    progressColor: 'bg-cyan-400',
  },
  {
    id: 5,
    title: 'Advanced React',
    questions: 40,
    progress: 20,
    status: 'In Progress',
    color: 'from-red-400 to-rose-500',
    iconBg: 'bg-red-500',
    progressColor: 'bg-red-400',
  },
  {
    id: 6,
    title: 'Performance',
    questions: 18,
    progress: 0,
    status: 'Not Started',
    color: 'from-teal-400 to-green-500',
    iconBg: 'bg-teal-500',
    progressColor: 'bg-teal-400',
  },
  {
    id: 7,
    title: 'Testing',
    questions: 24,
    progress: 0,
    status: 'Not Started',
    color: 'from-pink-400 to-rose-500',
    iconBg: 'bg-pink-500',
    progressColor: 'bg-pink-400',
  },
  {
    id: 8,
    title: 'React Router',
    questions: 16,
    progress: 0,
    status: 'Not Started',
    color: 'from-violet-400 to-purple-500',
    iconBg: 'bg-violet-500',
    progressColor: 'bg-violet-400',
  },
  {
    id: 9,
    title: 'TypeScript + React',
    questions: 50,
    progress: 0,
    status: 'Not Started',
    color: 'from-sky-400 to-blue-500',
    iconBg: 'bg-sky-500',
    progressColor: 'bg-sky-400',
  },
];

export const TOPIC_FILTERS = ['All Topics', 'In Progress', 'Completed', 'Not Started'];
