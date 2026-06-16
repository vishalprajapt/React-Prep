// notes/read/data.js

export const READ_QUESTIONS = [
  {
    id: 1,
    question: 'What is the Virtual DOM and how does React use it to update the UI efficiently?',
    answer:
      'The Virtual DOM is a lightweight in-memory representation of the real DOM. On state change, React re-renders the Virtual DOM, diffs it against the previous version (reconciliation), and applies only the minimal real DOM changes — making updates fast without touching the full tree.',
    difficulty: 'Easy',
    tags: ['React Basics'],
    readTime: '3 min read',
  },
  {
    id: 2,
    question: 'What is the difference between useState and useReducer, and when would you choose one over the other?',
    answer:
      'useState suits simple, independent values. useReducer is better when next state depends on previous state or when state logic involves multiple sub-values — it keeps update logic centralised and predictable, similar to Redux but component-local.',
    difficulty: 'Medium',
    tags: ['Hooks'],
    readTime: '4 min read',
  },
  {
    id: 3,
    question: 'Explain the useEffect hook and how its dependency array controls when it runs.',
    answer:
      'useEffect runs side effects after render. With no dependency array it runs after every render. An empty array [] runs it only on mount. Listing specific values runs it whenever those values change. Returning a cleanup function runs before the next effect or on unmount.',
    difficulty: 'Medium',
    tags: ['Hooks'],
    readTime: '5 min read',
  },
  {
    id: 4,
    question: 'What is React reconciliation and how does the diffing algorithm work?',
    answer:
      'Reconciliation is the process React uses to update the DOM efficiently. React compares the new virtual DOM tree with the previous one using a heuristic O(n) algorithm — it assumes elements of different types produce different trees and uses keys to match list children across renders.',
    difficulty: 'Hard',
    tags: ['React Basics'],
    readTime: '6 min read',
  },
  {
    id: 5,
    question: 'What are React keys and why are they important in lists?',
    answer:
      'Keys help React identify which items have changed, been added, or removed. They should be stable unique identifiers — not array indexes when the list can reorder — so React can reconcile list items correctly without unnecessary re-renders.',
    difficulty: 'Easy',
    tags: ['React Basics'],
    readTime: '3 min read',
  },
  {
    id: 6,
    question: 'How does useCallback differ from useMemo, and when should you use each?',
    answer:
      'useMemo memoizes the result of a computation. useCallback memoizes a function reference. Use useMemo for expensive calculations. Use useCallback when passing a callback to a child wrapped in React.memo to prevent unnecessary re-renders.',
    difficulty: 'Hard',
    tags: ['Hooks'],
    readTime: '5 min read',
  },
  {
    id: 7,
    question: 'What is Context API and when should you prefer it over prop drilling?',
    answer:
      'Context API shares values across the component tree without passing props at every level. Prefer it for global data like theme, locale, or auth state. For complex state with frequent updates, a dedicated library like Redux or Zustand may perform better.',
    difficulty: 'Medium',
    tags: ['React Basics'],
    readTime: '4 min read',
  },
  {
    id: 8,
    question: 'What is the purpose of React.memo and when does it help performance?',
    answer:
      'React.memo is a higher-order component that prevents a functional component from re-rendering if its props have not changed (shallow comparison). It helps when a child component is expensive to render and its parent re-renders frequently with unchanged props.',
    difficulty: 'Medium',
    tags: ['React Basics'],
    readTime: '3 min read',
  },
];

export const DIFFICULTY_STYLES = {
  Easy:   { light: 'text-green-600 bg-green-50 border-green-200',    dark: 'text-green-400 bg-green-900/30 border-green-800' },
  Medium: { light: 'text-yellow-600 bg-yellow-50 border-yellow-200', dark: 'text-yellow-400 bg-yellow-900/30 border-yellow-800' },
  Hard:   { light: 'text-red-600 bg-red-50 border-red-200',          dark: 'text-red-400 bg-red-900/30 border-red-800' },
};

export const READ_FILTERS = ['All', 'Easy', 'Medium', 'Hard', 'React Basics', 'Hooks'];
