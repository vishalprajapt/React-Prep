// questionDetail/data.js
// Full answer content for each question id.

export const QUESTION_DETAIL = {
  101: {
    title: 'What is the Virtual DOM and how does React use it?',
    difficulty: 'Medium',
    tags: ['Core Concepts'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'The Virtual DOM (VDOM) is a lightweight JavaScript object that is a copy of the real DOM. React keeps this in memory and uses it to figure out what has actually changed before touching the real browser DOM.',
        },
        {
          type: 'text',
          content:
            'When state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a process called diffing. Only the parts that actually changed are updated in the real DOM — this is called reconciliation.',
        },
        {
          type: 'code',
          content: `// React re-renders only what changed
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello World</h1>   {/* this is NOT re-rendered */}
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>{count}</div>     {/* only this updates */}
    </div>
  );
}`,
        },
        {
          type: 'text',
          content:
            'This makes React very fast because direct DOM manipulation is expensive — React batches and minimises those operations using the Virtual DOM layer.',
        },
        {
          type: 'tip',
          content:
            "Interview tip: Mention that the Virtual DOM is not a browser feature — it's a React concept. Also note that React 18 introduced concurrent rendering which further optimises how updates are scheduled.",
        },
      ],
      keyPoints: [
        'VDOM is a JS object representation of the real DOM kept in memory',
        'React diffs old vs new VDOM to find minimal changes needed',
        'Only changed nodes are updated in the real DOM (reconciliation)',
        'This avoids expensive full DOM re-renders, improving performance',
        "React 18's concurrent mode further improves how updates are prioritised",
      ],
    },
  },
  102: {
    title: 'Difference between controlled and uncontrolled components',
    difficulty: 'Hard',
    tags: ['Forms', 'Core Concepts'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'A controlled component is one where React controls the form element value through state. Every keystroke triggers a state update, making React the single source of truth.',
        },
        {
          type: 'code',
          content: `// Controlled — value driven by state
function ControlledInput() {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`,
        },
        {
          type: 'text',
          content:
            'An uncontrolled component lets the DOM itself manage the value. You use a ref to read the value when needed, rather than syncing it on every change.',
        },
        {
          type: 'code',
          content: `// Uncontrolled — ref reads DOM value on demand
function UncontrolledInput() {
  const inputRef = useRef(null);
  const handleSubmit = () => console.log(inputRef.current.value);
  return <input ref={inputRef} defaultValue="hello" />;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Prefer controlled components for form validation and dynamic UI. Uncontrolled components are useful for file inputs or integrating with non-React libraries.',
        },
      ],
      keyPoints: [
        'Controlled: value stored in React state, updated via onChange',
        'Uncontrolled: value lives in the DOM, accessed via useRef',
        'Controlled gives you real-time validation and conditional rendering',
        'Uncontrolled is simpler for file inputs (<input type="file">)',
        'React recommends controlled components for most use cases',
      ],
    },
  },
  103: {
    title: 'What is JSX and why do we use it?',
    difficulty: 'Easy',
    tags: ['React Basics'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code directly inside JavaScript. It is not valid JS — Babel transforms it into React.createElement() calls.',
        },
        {
          type: 'code',
          content: `// JSX
const element = <h1 className="title">Hello</h1>;

// Compiled to:
const element = React.createElement('h1', { className: 'title' }, 'Hello');`,
        },
        {
          type: 'text',
          content:
            'JSX makes it easier to visualise the UI structure, write conditional rendering, and embed JavaScript expressions using curly braces {}.',
        },
        {
          type: 'tip',
          content:
            'Interview tip: JSX requires a single root element (or Fragment). Always close self-closing tags like <br /> and remember className instead of class.',
        },
      ],
      keyPoints: [
        'JSX is syntactic sugar over React.createElement()',
        'Babel compiles JSX to plain JavaScript',
        'Use {} to embed any JavaScript expression inside JSX',
        'className is used instead of class (reserved JS keyword)',
        'Every JSX element must have exactly one root element',
      ],
    },
  },
  104: {
    title: 'What are React props and how do we pass data?',
    difficulty: 'Easy',
    tags: ['React Basics'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Props (short for properties) are the way you pass data from a parent component to a child component. They are read-only — a child cannot modify the props it receives.',
        },
        {
          type: 'code',
          content: `// Parent passes props
function App() {
  return <Greeting name="Rahul" age={22} />;
}

// Child receives via destructuring
function Greeting({ name, age }) {
  return <p>Hello {name}, you are {age} years old.</p>;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Props flow one way — parent to child (unidirectional data flow). To pass data up, use callback functions as props.',
        },
      ],
      keyPoints: [
        'Props are passed as attributes on JSX elements',
        'Props are immutable — child must not mutate them',
        'Any JavaScript value can be a prop: strings, numbers, functions, objects',
        'Use defaultProps or default parameters for optional props',
        'children is a special prop for nested JSX content',
      ],
    },
  },
  105: {
    title: 'Explain the React component lifecycle methods',
    difficulty: 'Medium',
    tags: ['React Basics', 'Lifecycle'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Class components have lifecycle methods split into three phases: Mounting, Updating, and Unmounting. With hooks, you replicate all of these using useEffect.',
        },
        {
          type: 'code',
          content: `// Hooks equivalent of lifecycle
useEffect(() => {
  // componentDidMount — runs once on mount
  console.log('mounted');

  return () => {
    // componentWillUnmount — cleanup on unmount
    console.log('unmounted');
  };
}, []); // empty array = run once

useEffect(() => {
  // componentDidUpdate — runs when 'count' changes
  console.log('count changed:', count);
}, [count]);`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: In React 18 with Strict Mode, effects run twice in development to help detect side-effect issues. Always clean up subscriptions, timers, and event listeners.',
        },
      ],
      keyPoints: [
        'Mounting: constructor → render → componentDidMount',
        'Updating: render → componentDidUpdate (when props/state change)',
        'Unmounting: componentWillUnmount (cleanup)',
        'useEffect with [] mimics componentDidMount',
        'useEffect cleanup function mimics componentWillUnmount',
      ],
    },
  },
  106: {
    title: 'What is state in React and how do you manage it?',
    difficulty: 'Medium',
    tags: ['React Basics', 'State'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'State is data that belongs to a component and can change over time. When state changes, React re-renders the component to reflect the new data.',
        },
        {
          type: 'code',
          content: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
    </div>
  );
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Always use the functional updater form setCount(c => c + 1) when new state depends on old state to avoid stale closure bugs.',
        },
      ],
      keyPoints: [
        'State is local and mutable data owned by a component',
        'useState returns [value, setter] tuple',
        'Never mutate state directly — always use the setter',
        'State updates are asynchronous and batched in React 18',
        'Lift state up when multiple children need the same data',
      ],
    },
  },
  107: {
    title: 'How does React handle event handling differently from JS?',
    difficulty: 'Easy',
    tags: ['React Basics', 'Events'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React uses Synthetic Events — a cross-browser wrapper around the browser\'s native events. React attaches a single event listener at the root instead of each DOM node.',
        },
        {
          type: 'code',
          content: `// React — camelCase event names, JSX handler
<button onClick={handleClick}>Click me</button>

// Vanilla JS — lowercase, string or addEventListener
<button onclick="handleClick()">Click me</button>
document.querySelector('button').addEventListener('click', handleClick);`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: React 17+ moved the root listener from document to the root element, making it easier to nest multiple React apps.',
        },
      ],
      keyPoints: [
        'React uses SyntheticEvent wrapper for cross-browser compatibility',
        'Event names are camelCase in JSX (onClick, onChange)',
        'React uses event delegation — one listener at the root',
        'e.preventDefault() works the same as in native JS',
        'React 17+ attaches events to root element, not document',
      ],
    },
  },
  108: {
    title: 'What are React Portals and when would you use them?',
    difficulty: 'Hard',
    tags: ['Advanced', 'React Basics'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React Portals let you render a component\'s output into a DOM node that exists outside the parent component\'s DOM hierarchy — useful for modals, tooltips, and dropdowns.',
        },
        {
          type: 'code',
          content: `import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root') // outside React root
  );
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Even though the portal renders outside the parent DOM node, React event bubbling still works through the React component tree, not the DOM tree.',
        },
      ],
      keyPoints: [
        'createPortal(child, container) renders child into a different DOM node',
        'Useful for modals, tooltips, dropdowns to avoid CSS overflow/z-index issues',
        'Events still bubble through React component tree (not DOM tree)',
        'Portal content still has access to React context',
        'Requires a target DOM element like <div id="modal-root"> in index.html',
      ],
    },
  },
  109: {
    title: "Describe React's reconciliation algorithm in detail",
    difficulty: 'Hard',
    tags: ['Internals', 'Core Concepts'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Reconciliation is the process React uses to determine what changed in the Virtual DOM and apply minimal updates to the real DOM. React uses a heuristic O(n) diffing algorithm instead of the theoretical O(n³) tree comparison.',
        },
        {
          type: 'text',
          content:
            'Two main assumptions make this fast: (1) Elements of different types produce different trees. (2) The key prop helps React identify which list items changed.',
        },
        {
          type: 'code',
          content: `// Keys help React reconcile lists efficiently
const items = data.map(item => (
  <li key={item.id}>{item.name}</li> // stable key = fast diffing
));

// Bad — index as key causes issues when list reorders
const bad = data.map((item, i) => (
  <li key={i}>{item.name}</li>
));`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: React Fiber (React 16+) reimplemented reconciliation to allow work to be split into chunks and prioritised, enabling concurrent features in React 18.',
        },
      ],
      keyPoints: [
        'React diffs Virtual DOM trees using O(n) heuristics',
        'Different element types → tear down old tree, build new one',
        'Same element type → update only changed attributes',
        'key prop is critical for efficient list reconciliation',
        'React Fiber enables incremental rendering and priority scheduling',
      ],
    },
  },
};

// Flat lookup: given question id → find its topic id and sibling question ids
// Used for Previous / Next navigation
export const QUESTION_NAV = (() => {
  const map = {};
  // We'll import TOPIC_QUESTIONS at runtime to avoid circular dep
  return map;
})();

/* ─────────────────────────────────────────────────────────────────────────────
   TOPIC 2 — React Hooks (ids 201-207)
───────────────────────────────────────────────────────────────────────────── */

Object.assign(QUESTION_DETAIL, {
  // ── 201 ──────────────────────────────────────────────────────────────────
  201: {
    title: 'What is useState and how does it work?',
    difficulty: 'Easy',
    tags: ['React Hooks'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'useState is a React Hook that lets you add state to a functional component. It returns an array with two items: the current state value and a setter function.',
        },
        {
          type: 'code',
          content: `const [count, setCount] = useState(0); // initial value = 0

// Reading state
console.log(count); // 0

// Updating state — triggers re-render
setCount(count + 1);

// Functional updater (safe when new state depends on old)
setCount(prev => prev + 1);`,
        },
        {
          type: 'text',
          content:
            'Every time you call the setter, React schedules a re-render of that component with the new state value. State updates in React 18 are batched automatically, even inside event handlers.',
        },
        {
          type: 'tip',
          content:
            'Interview tip: useState is asynchronous — the updated value is not available immediately after calling the setter. Use useEffect or the functional updater form to react to state changes.',
        },
      ],
      keyPoints: [
        'useState(initialValue) returns [state, setState] tuple',
        'Calling setState triggers a component re-render',
        'State updates are batched in React 18 for performance',
        'Initial value is only used on the first render',
        'Use functional updater setState(prev => newValue) for derived updates',
      ],
    },
  },

  // ── 202 ──────────────────────────────────────────────────────────────────
  202: {
    title: 'Explain the useEffect hook and its dependencies array',
    difficulty: 'Medium',
    tags: ['React Hooks', 'Lifecycle'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'useEffect lets you perform side effects in functional components — data fetching, subscriptions, manually changing the DOM. It runs after every render by default.',
        },
        {
          type: 'code',
          content: `// Runs after every render
useEffect(() => { console.log('rendered'); });

// Runs once on mount (empty dependency array)
useEffect(() => { fetchData(); }, []);

// Runs when 'userId' changes
useEffect(() => { fetchUser(userId); }, [userId]);

// Cleanup — runs before next effect or on unmount
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id); // cleanup
}, []);`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Every reactive value used inside useEffect must be listed in the dependency array. The ESLint exhaustive-deps rule helps enforce this. Missing dependencies cause stale closure bugs.',
        },
      ],
      keyPoints: [
        'No deps array → runs after every render',
        'Empty [] → runs once on mount',
        '[dep1, dep2] → runs when any dep changes',
        'Return a cleanup function to prevent memory leaks',
        'React 18 Strict Mode runs effects twice in development',
      ],
    },
  },

  // ── 203 ──────────────────────────────────────────────────────────────────
  203: {
    title: 'What is useRef and when would you use it?',
    difficulty: 'Easy',
    tags: ['React Hooks'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'useRef returns a mutable ref object whose .current property persists across renders without causing a re-render when changed. It has two main use cases: accessing DOM elements and storing mutable values.',
        },
        {
          type: 'code',
          content: `// 1. Access a DOM element
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus(); // direct DOM access

// 2. Store a mutable value (no re-render on change)
const renderCount = useRef(0);
useEffect(() => { renderCount.current += 1; }); // tracks renders silently`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: The key difference between useRef and useState is that updating .current does NOT trigger a re-render. Use useRef for values that need to persist but should not affect the UI.',
        },
      ],
      keyPoints: [
        'useRef returns { current: initialValue } object',
        'Mutating .current does not cause a re-render',
        'Used to access DOM nodes directly (focus, scroll, measure)',
        'Useful to store previous values or interval/timeout IDs',
        'Unlike state, ref changes are synchronous',
      ],
    },
  },

  // ── 204 ──────────────────────────────────────────────────────────────────
  204: {
    title: 'How do you build a custom hook?',
    difficulty: 'Medium',
    tags: ['React Hooks', 'Custom'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'A custom hook is a regular JavaScript function whose name starts with "use" and that can call other hooks. It lets you extract and reuse stateful logic between components.',
        },
        {
          type: 'code',
          content: `// Custom hook — useFetch
function useFetch(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading } = useFetch('/api/users');`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Custom hooks must start with "use" — this is not just a convention, React uses it to apply the rules of hooks linter check. Each call to a custom hook gets its own isolated state.',
        },
      ],
      keyPoints: [
        'Custom hooks are plain functions starting with "use"',
        'They can call useState, useEffect, and other hooks',
        'Each component that calls the hook gets its own state',
        'Great for extracting fetch logic, form logic, timers',
        'No special API needed — just a function that uses hooks',
      ],
    },
  },

  // ── 205 ──────────────────────────────────────────────────────────────────
  205: {
    title: 'Difference between useMemo and useCallback',
    difficulty: 'Hard',
    tags: ['React Hooks', 'Performance'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Both useMemo and useCallback are memoization hooks that help avoid expensive recalculations or function recreation on every render. The difference is what they memoize.',
        },
        {
          type: 'code',
          content: `// useMemo — memoizes a COMPUTED VALUE
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.price - b.price); // expensive sort
}, [items]); // only re-runs when items changes

// useCallback — memoizes a FUNCTION REFERENCE
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]); // same function reference until id changes`,
        },
        {
          type: 'text',
          content:
            'useCallback is especially useful when passing callbacks to child components wrapped in React.memo — it prevents unnecessary re-renders caused by new function references.',
        },
        {
          type: 'tip',
          content:
            'Interview tip: useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). Do not over-memoize — only use these when you have a measurable performance problem.',
        },
      ],
      keyPoints: [
        'useMemo memoizes a computed value (result of a function)',
        'useCallback memoizes the function itself (reference)',
        'Both take a deps array — recalculate only when deps change',
        'useCallback shines with React.memo child components',
        'Premature memoization adds complexity — profile first',
      ],
    },
  },

  // ── 206 ──────────────────────────────────────────────────────────────────
  206: {
    title: 'What are the rules of hooks?',
    difficulty: 'Medium',
    tags: ['React Hooks', 'Core Concepts'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React has two rules for hooks that must never be broken: (1) Only call hooks at the top level. (2) Only call hooks from React functions.',
        },
        {
          type: 'code',
          content: `// ✅ Correct — top level, every render
function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => { /* ... */ }, []);
}

// ❌ Wrong — inside a condition
function Bad() {
  if (someCondition) {
    const [x, setX] = useState(0); // breaks hook order
  }
}

// ❌ Wrong — inside a regular function
function notAComponent() {
  const [x] = useState(0); // not a React function
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: React relies on the call order of hooks to associate state correctly. Calling a hook inside a condition or loop breaks this order across renders.',
        },
      ],
      keyPoints: [
        'Always call hooks at the top level — never inside conditions or loops',
        'Only call hooks from React functional components or custom hooks',
        'Hook order must be the same on every render',
        'eslint-plugin-react-hooks enforces these rules automatically',
        'Class components cannot use hooks',
      ],
    },
  },

  // ── 207 ──────────────────────────────────────────────────────────────────
  207: {
    title: 'Explain useReducer and when to prefer it over useState',
    difficulty: 'Hard',
    tags: ['React Hooks', 'State'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'useReducer is an alternative to useState for managing complex state. It takes a reducer function and an initial state, returning the current state and a dispatch function.',
        },
        {
          type: 'code',
          content: `const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + state.step };
    case 'decrement': return { ...state, count: state.count - state.step };
    case 'setStep':   return { ...state, step: action.payload };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Prefer useReducer over useState when: state has multiple sub-values, next state depends on previous, or state logic is complex enough to benefit from a pure reducer function (easy to test in isolation).',
        },
      ],
      keyPoints: [
        'useReducer(reducer, initialState) returns [state, dispatch]',
        'Reducer is a pure function: (state, action) => newState',
        'Prefer over useState for complex, multi-field state objects',
        'dispatch({ type, payload }) is easier to trace than many setters',
        'Reducer functions are pure and easy to unit test',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 3 — Redux (ids 301-309)
  ─────────────────────────────────────────────────────────────────────────── */

  // ── 301 ──────────────────────────────────────────────────────────────────
  301: {
    title: 'What is Redux and why do we use it?',
    difficulty: 'Easy',
    tags: ['Redux', 'State Management'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Redux is a predictable state management library for JavaScript apps. It stores the entire application state in a single JavaScript object called the store, making state changes traceable and debuggable.',
        },
        {
          type: 'text',
          content:
            'You use Redux when you have complex state shared across many components that is difficult to manage with lifting state or Context alone.',
        },
        {
          type: 'code',
          content: `// The three parts of Redux
// 1. Store — single source of truth
const store = configureStore({ reducer: rootReducer });

// 2. Action — describes what happened
const increment = { type: 'counter/increment' };

// 3. Reducer — describes how state changes
function counterReducer(state = 0, action) {
  if (action.type === 'counter/increment') return state + 1;
  return state;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: For most React apps, Context API + useReducer is sufficient. Consider Redux when you need advanced DevTools, middleware (like thunk/saga), or very large team codebases.',
        },
      ],
      keyPoints: [
        'Single store holds all application state',
        'State is read-only — only changed by dispatching actions',
        'Pure reducer functions specify how state changes',
        'Redux DevTools allow time-travel debugging',
        'Works well with middleware for async operations',
      ],
    },
  },

  // ── 302 ──────────────────────────────────────────────────────────────────
  302: {
    title: 'Explain the three core principles of Redux',
    difficulty: 'Easy',
    tags: ['Redux', 'Core Concepts'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            '1. Single source of truth — the entire application state is stored in one JavaScript object tree inside a single store.',
        },
        {
          type: 'text',
          content:
            '2. State is read-only — the only way to change state is to dispatch an action object describing what happened. This ensures changes are predictable and traceable.',
        },
        {
          type: 'text',
          content:
            '3. Changes are made with pure functions — reducers are pure functions that take the previous state and an action, and return the next state without mutating anything.',
        },
        {
          type: 'code',
          content: `// Pure reducer — no mutation, always returns new state
function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]; // new array, not push()
    default:
      return state;
  }
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: These three principles make Redux deterministic — given the same state and action, the reducer will always return the same new state. This is what makes time-travel debugging possible.',
        },
      ],
      keyPoints: [
        'Single source of truth: one store, one state tree',
        'State is read-only: dispatch actions to change it',
        'Pure reducers: (state, action) => newState, no side effects',
        'Predictability comes from these constraints',
        'Immutability is key — Redux Toolkit handles it with Immer',
      ],
    },
  },

  // ── 303 ──────────────────────────────────────────────────────────────────
  303: {
    title: 'What is the difference between actions and action creators?',
    difficulty: 'Easy',
    tags: ['Redux'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'An action is a plain JavaScript object that has a type property describing what happened. An action creator is a function that returns an action object.',
        },
        {
          type: 'code',
          content: `// Action — plain object
const action = { type: 'todos/add', payload: 'Buy milk' };

// Action creator — function that produces actions
function addTodo(text) {
  return { type: 'todos/add', payload: text };
}
dispatch(addTodo('Buy milk'));

// Redux Toolkit auto-generates action creators via createSlice
const { addTodo } = todosSlice.actions;
dispatch(addTodo('Buy milk')); // same result`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Redux Toolkit\'s createSlice automatically generates action creators and action types for each reducer function, eliminating the boilerplate of writing them manually.',
        },
      ],
      keyPoints: [
        'Action: plain object with a type property',
        'Action creator: function that returns an action object',
        'Payload carries data along with the action type',
        'createSlice auto-generates typed action creators',
        'Always use string constants for action types to avoid typos',
      ],
    },
  },

  // ── 304 ──────────────────────────────────────────────────────────────────
  304: {
    title: 'How does a reducer work in Redux?',
    difficulty: 'Medium',
    tags: ['Redux', 'Core Concepts'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'A reducer is a pure function that takes the current state and an action as arguments, and returns a new state. It must not mutate the existing state or produce side effects.',
        },
        {
          type: 'code',
          content: `// Traditional Redux reducer
function cartReducer(state = [], action) {
  switch (action.type) {
    case 'cart/addItem':
      return [...state, action.payload];       // new array
    case 'cart/removeItem':
      return state.filter(i => i.id !== action.payload);
    case 'cart/clear':
      return [];
    default:
      return state; // always return state for unknown actions
  }
}

// Redux Toolkit version — Immer handles immutability
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem:    (state, action) => { state.push(action.payload); }, // mutation OK here
    removeItem: (state, action) => state.filter(i => i.id !== action.payload),
    clear:      () => [],
  },
});`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Redux Toolkit uses Immer under the hood, so inside createSlice reducers you can write "mutating" code like state.push() — Immer converts it to immutable updates automatically.',
        },
      ],
      keyPoints: [
        'Reducer: pure function (state, action) => newState',
        'Must return existing state for unknown actions',
        'Never mutate state directly in plain Redux',
        'Redux Toolkit uses Immer — mutation syntax is safe inside slices',
        'Multiple reducers can be combined with combineReducers',
      ],
    },
  },

  // ── 305 ──────────────────────────────────────────────────────────────────
  305: {
    title: 'What is Redux Toolkit and why is it recommended?',
    difficulty: 'Medium',
    tags: ['Redux', 'Redux Toolkit'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Redux Toolkit (RTK) is the official, opinionated way to write Redux. It eliminates the boilerplate of plain Redux by providing utility functions like configureStore, createSlice, and createAsyncThunk.',
        },
        {
          type: 'code',
          content: `import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementBy: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: RTK includes RTK Query for data fetching and caching — it can replace libraries like React Query for many use cases when you are already using Redux.',
        },
      ],
      keyPoints: [
        'configureStore sets up the store with good defaults (DevTools, thunk)',
        'createSlice generates actions + reducer in one place',
        'Immer is built in — write simpler reducer logic',
        'createAsyncThunk handles async actions cleanly',
        'RTK Query provides powerful server state management',
      ],
    },
  },

  // ── 306 ──────────────────────────────────────────────────────────────────
  306: {
    title: 'How does createSlice work in Redux Toolkit?',
    difficulty: 'Medium',
    tags: ['Redux', 'Redux Toolkit'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'createSlice accepts a slice name, an initial state, and an object of reducer functions. It automatically generates action creators and action types matching each reducer.',
        },
        {
          type: 'code',
          content: `const todosSlice = createSlice({
  name: 'todos',                  // prefix for action types
  initialState: [],
  reducers: {
    // action type: 'todos/add'
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, done: false });
    },
    // action type: 'todos/toggle'
    toggle: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.done = !todo.done;
    },
    // action type: 'todos/remove'
    remove: (state, action) => state.filter(t => t.id !== action.payload),
  },
});

export const { add, toggle, remove } = todosSlice.actions;
export default todosSlice.reducer;`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: The generated action types follow the pattern "sliceName/reducerName". You can inspect them via todosSlice.actions.add.type which equals "todos/add".',
        },
      ],
      keyPoints: [
        'createSlice combines reducer + action creators in one call',
        'Action types are auto-generated as "name/reducerKey"',
        'Immer allows direct state mutation inside reducers',
        'Export actions from slice.actions and reducer as default',
        'extraReducers handles actions from other slices or createAsyncThunk',
      ],
    },
  },

  // ── 307 ──────────────────────────────────────────────────────────────────
  307: {
    title: 'What is middleware in Redux? Explain redux-thunk',
    difficulty: 'Hard',
    tags: ['Redux', 'Async', 'Middleware'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Middleware in Redux sits between dispatching an action and the reducer receiving it. It lets you intercept actions, run async code, log, or modify actions before they reach the reducer.',
        },
        {
          type: 'text',
          content:
            'redux-thunk is the most common middleware. It lets you dispatch functions (thunks) instead of plain action objects. The thunk receives dispatch and getState, allowing async logic.',
        },
        {
          type: 'code',
          content: `// Thunk action creator — dispatches a function
function fetchUser(id) {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const data = await api.getUser(id);
      dispatch(setUser(data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

// Usage
dispatch(fetchUser(42)); // dispatching a function, not an object`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Redux Toolkit\'s configureStore includes redux-thunk by default. For more complex async flows (cancellation, race conditions), consider redux-saga or RTK Query.',
        },
      ],
      keyPoints: [
        'Middleware intercepts every dispatched action',
        'Signature: store => next => action => { ... }',
        'redux-thunk lets you dispatch functions for async logic',
        'Thunk receives (dispatch, getState) as arguments',
        'RTK includes thunk by default via configureStore',
      ],
    },
  },

  // ── 308 ──────────────────────────────────────────────────────────────────
  308: {
    title: 'How do you handle async operations with Redux Toolkit?',
    difficulty: 'Hard',
    tags: ['Redux', 'Async', 'Redux Toolkit'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Redux Toolkit provides createAsyncThunk to handle async operations. It automatically dispatches pending, fulfilled, and rejected action types based on the promise lifecycle.',
        },
        {
          type: 'code',
          content: `import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 1. Create the async thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/posts');
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// 2. Handle lifecycle in slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending,   state => { state.loading = true; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items   = action.payload;
      })
      .addCase(fetchPosts.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload;
      });
  },
});`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: createAsyncThunk handles the three states (loading/success/error) cleanly. For server state caching, consider RTK Query which is even more automated.',
        },
      ],
      keyPoints: [
        'createAsyncThunk generates pending/fulfilled/rejected actions',
        'Handle them in extraReducers using builder.addCase',
        'rejectWithValue passes custom error data to rejected action',
        'RTK Query is a higher-level alternative for API data fetching',
        'Always handle all three states in UI for good UX',
      ],
    },
  },

  // ── 309 ──────────────────────────────────────────────────────────────────
  309: {
    title: 'When should you use Redux vs Context API?',
    difficulty: 'Medium',
    tags: ['Redux', 'State Management', 'Context'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Context API is great for low-frequency updates like theme, auth, or locale. Redux is better when you have complex state logic, frequent updates across many components, or need advanced tooling.',
        },
        {
          type: 'code',
          content: `// Context — good for theme/auth (low frequency)
const ThemeContext = createContext('dark');
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

// Redux — better for shopping cart, complex forms, real-time data
// Every component subscribes only to the slice it needs
const cartItems = useSelector(state => state.cart.items);
dispatch(addToCart(product));`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Context re-renders ALL consumers when value changes. Redux components only re-render when their selected slice changes. For frequent updates (like a live feed), Redux wins on performance.',
        },
      ],
      keyPoints: [
        'Context: simple, built-in, good for global config (theme/auth)',
        'Redux: powerful DevTools, middleware, time-travel debugging',
        'Context re-renders all consumers; Redux is selective',
        'Use Redux for frequent state changes across many components',
        'RTK Query eliminates need for server state in Redux entirely',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 4 — Next.js (ids 401-408)
  ─────────────────────────────────────────────────────────────────────────── */

  401: {
    title: 'What is Next.js and how is it different from React?',
    difficulty: 'Easy',
    tags: ['Next.js', 'Fundamentals'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React is a UI library — it only handles the view layer. Next.js is a full-stack React framework built on top of React that adds file-based routing, server-side rendering, static generation, API routes, and more out of the box.',
        },
        {
          type: 'code',
          content: `// React — you set up everything yourself
// Next.js — file-based routing, zero config

// src/app/about/page.jsx  → automatically becomes /about route
export default function AboutPage() {
  return <h1>About Us</h1>;
}

// src/app/api/users/route.js → /api/users endpoint
export async function GET() {
  const users = await db.getUsers();
  return Response.json(users);
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Next.js 13+ App Router uses React Server Components by default — components render on the server, sending only HTML to the client, which improves performance and SEO.',
        },
      ],
      keyPoints: [
        'Next.js adds routing, SSR, SSG, and API routes to React',
        'File-based routing — folder structure defines URL structure',
        'App Router (Next 13+) uses React Server Components by default',
        'Built-in Image, Font, and Script optimisation',
        'Zero-config TypeScript, ESLint, and Tailwind support',
      ],
    },
  },

  402: {
    title: 'Explain file-based routing in Next.js',
    difficulty: 'Easy',
    tags: ['Next.js', 'Routing'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'In Next.js App Router, every folder inside src/app becomes a URL segment. A page.jsx file inside that folder becomes the UI for that route.',
        },
        {
          type: 'code',
          content: `// File structure → URL mapping
src/app/
  page.jsx              →  /
  about/page.jsx        →  /about
  blog/page.jsx         →  /blog
  blog/[slug]/page.jsx  →  /blog/:slug   (dynamic)
  shop/[...all]/page.jsx → /shop/*       (catch-all)

// Dynamic segment — access params
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Route groups like (app) let you organise files without affecting the URL. Layout files (layout.jsx) wrap all child routes automatically — great for shared navigation.',
        },
      ],
      keyPoints: [
        'page.jsx in a folder = that folder\'s route UI',
        'layout.jsx wraps all child routes automatically',
        '[param] creates dynamic segments',
        '[...param] catches all remaining segments',
        'Route groups (folder) organise code without affecting URLs',
      ],
    },
  },

  403: {
    title: 'What is the difference between SSR and SSG in Next.js?',
    difficulty: 'Medium',
    tags: ['Next.js', 'Rendering'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'SSG (Static Site Generation) generates HTML at build time. The same HTML is served to every user — perfect for pages that don\'t change often (blogs, docs). SSR (Server-Side Rendering) generates fresh HTML on every request — needed for personalised or real-time data.',
        },
        {
          type: 'code',
          content: `// SSG — fetch at build time (default in App Router with no cache option)
async function BlogPage() {
  const posts = await fetch('/api/posts', {
    cache: 'force-cache' // SSG behaviour
  }).then(r => r.json());
  return <PostList posts={posts} />;
}

// SSR — fetch on every request
async function DashboardPage() {
  const data = await fetch('/api/user', {
    cache: 'no-store' // SSR behaviour
  }).then(r => r.json());
  return <Dashboard data={data} />;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: In the App Router, you control SSR vs SSG via fetch cache options — no special functions needed. cache: "no-store" = SSR, cache: "force-cache" = SSG, revalidate = ISR.',
        },
      ],
      keyPoints: [
        'SSG: HTML built once at build time, served from CDN — fastest',
        'SSR: HTML generated fresh on every request — always up to date',
        'App Router: fetch() cache options control rendering strategy',
        'cache: "no-store" = SSR, cache: "force-cache" = SSG',
        'ISR: revalidate interval combines benefits of both',
      ],
    },
  },

  404: {
    title: 'What is Incremental Static Regeneration (ISR)?',
    difficulty: 'Medium',
    tags: ['Next.js', 'Rendering'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'ISR lets you update statically generated pages after build time, on a per-page basis. You set a revalidate interval — after that time passes, the next request triggers a background regeneration.',
        },
        {
          type: 'code',
          content: `// App Router — ISR via fetch revalidate
async function ProductPage({ params }) {
  const product = await fetch(\`/api/products/\${params.id}\`, {
    next: { revalidate: 60 }, // regenerate at most once per 60s
  }).then(r => r.json());

  return <Product data={product} />;
}

// On-demand revalidation (triggered by webhook)
import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/products'); // force regenerate now
  return Response.json({ revalidated: true });
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: ISR uses a stale-while-revalidate strategy — users always get a fast cached response while Next.js regenerates in the background. On-demand revalidation is ideal for CMS webhooks.',
        },
      ],
      keyPoints: [
        'ISR regenerates static pages after a set time interval',
        'Users always get a cached response (fast), background update happens',
        'Set via next: { revalidate: seconds } in fetch options',
        'revalidatePath() / revalidateTag() for on-demand invalidation',
        'Combines SSG speed with SSR freshness',
      ],
    },
  },

  405: {
    title: 'Explain the App Router vs Pages Router in Next.js 13+',
    difficulty: 'Hard',
    tags: ['Next.js', 'App Router'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'The Pages Router (pre-Next.js 13) used a pages/ directory where every file became a route. The App Router (Next.js 13+) uses an app/ directory and brings React Server Components, nested layouts, streaming, and server actions.',
        },
        {
          type: 'code',
          content: `// Pages Router — pages/blog/[slug].js
export async function getServerSideProps({ params }) {
  const post = await fetchPost(params.slug);
  return { props: { post } };
}
export default function BlogPost({ post }) { ... }

// App Router — app/blog/[slug]/page.jsx
// Server Component by default — no getServerSideProps needed
async function BlogPost({ params }) {
  const post = await fetchPost(params.slug); // direct async/await
  return <article>{post.title}</article>;
}

// Client Component — add 'use client' directive
'use client';
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>Like</button>;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: App Router is the future of Next.js. Server Components render on the server with zero JS sent to the client. Only interactive parts need "use client". This significantly reduces bundle size.',
        },
      ],
      keyPoints: [
        'App Router uses app/ directory, Pages Router uses pages/',
        'App Router: Server Components by default (no JS to client)',
        'Add "use client" only for interactive/stateful components',
        'App Router supports nested layouts and parallel routes',
        'Pages Router still works — migration is optional',
      ],
    },
  },

  406: {
    title: 'What are React Server Components and how do they work in Next.js?',
    difficulty: 'Hard',
    tags: ['Next.js', 'Server Components'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React Server Components (RSC) render entirely on the server. They can access databases, file systems, and secrets directly without sending any JavaScript to the browser.',
        },
        {
          type: 'code',
          content: `// Server Component (default in App Router)
// Runs ONLY on server — no JS shipped to browser
async function UserProfile({ userId }) {
  // Direct DB access — no API layer needed
  const user = await db.users.findById(userId);
  return (
    <div>
      <h1>{user.name}</h1>
      <ClientInteractions userId={userId} /> {/* client boundary */}
    </div>
  );
}

// Client Component — needs interactivity
'use client';
function ClientInteractions({ userId }) {
  const [following, setFollowing] = useState(false);
  return <button onClick={() => setFollowing(!following)}>Follow</button>;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Server Components can import Client Components, but NOT the other way around. Pass Server Component output as children or props to Client Components to keep server logic on the server.',
        },
      ],
      keyPoints: [
        'RSC render on server — zero JavaScript sent to client',
        'Can directly access DB, file system, env variables',
        'Cannot use useState, useEffect, or browser APIs',
        '"use client" marks a component as a Client Component',
        'Reduces bundle size significantly for content-heavy pages',
      ],
    },
  },

  407: {
    title: 'How does image optimisation work in Next.js?',
    difficulty: 'Medium',
    tags: ['Next.js', 'Performance'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Next.js provides a built-in Image component that automatically optimises images — it converts them to modern formats (WebP/AVIF), resizes them to the correct dimensions, and lazy loads them by default.',
        },
        {
          type: 'code',
          content: `import Image from 'next/image';

// Optimised image — always provide width and height
<Image
  src="/hero.jpg"
  alt="Hero banner"
  width={1200}
  height={600}
  priority        // preload above-the-fold images
  placeholder="blur"  // show blur while loading
/>

// Remote images — add domain to next.config.js
// next.config.mjs
export default {
  images: {
    remotePatterns: [{ hostname: 'cdn.example.com' }],
  },
};`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Always add priority to above-the-fold images (hero banners) to improve LCP (Largest Contentful Paint) score. The default lazy loading improves initial page load for below-fold images.',
        },
      ],
      keyPoints: [
        'next/image auto-converts to WebP/AVIF for smaller sizes',
        'Responsive sizing — serves correct size per device',
        'Lazy loading by default, use priority for LCP images',
        'placeholder="blur" improves perceived performance',
        'Remote images need domain allowlist in next.config',
      ],
    },
  },

  408: {
    title: 'What are middleware functions in Next.js?',
    difficulty: 'Hard',
    tags: ['Next.js', 'Middleware'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Next.js middleware runs before a request is completed — at the Edge, before the page renders. It can redirect, rewrite, modify headers, or block requests based on auth or geo-location.',
        },
        {
          type: 'code',
          content: `// middleware.js (at project root)
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request });
  const isAuth = Boolean(token);
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  // Redirect authenticated users away from login page
  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to login
  if (!isAuth && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Middleware runs at the Edge (close to the user), making it extremely fast for auth redirects. Use the matcher config to apply it only to specific routes.',
        },
      ],
      keyPoints: [
        'Middleware runs before every matched request at the Edge',
        'Can redirect, rewrite URLs, or modify request/response headers',
        'Perfect for auth guards, A/B testing, geo-redirects',
        'matcher config limits which routes trigger middleware',
        'Has access to cookies and headers but not Node.js APIs',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 5 — Advanced React (ids 501-507)
  ─────────────────────────────────────────────────────────────────────────── */

  501: {
    title: 'What is the Higher Order Component (HOC) pattern?',
    difficulty: 'Medium',
    tags: ['Advanced React', 'Patterns'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'A Higher Order Component is a function that takes a component and returns a new enhanced component. It is a pattern for reusing component logic — similar to higher order functions in JavaScript.',
        },
        {
          type: 'code',
          content: `// HOC — adds auth protection to any component
function withAuth(WrappedComponent) {
  return function AuthGuard(props) {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) return <Redirect to="/login" />;
    return <WrappedComponent {...props} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile   = withAuth(Profile);`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: HOCs were the primary pattern before hooks. Today, custom hooks cover most HOC use cases more cleanly. HOCs are still useful for code splitting and class component wrapping.',
        },
      ],
      keyPoints: [
        'HOC: (Component) => EnhancedComponent',
        'Used for cross-cutting concerns: auth, logging, styling',
        'Always forward props with {...props} to the wrapped component',
        'HOC names conventionally start with "with" (withAuth, withTheme)',
        'Custom hooks are now preferred over HOCs for logic reuse',
      ],
    },
  },

  502: {
    title: 'Explain the render props pattern',
    difficulty: 'Medium',
    tags: ['Advanced React', 'Patterns'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'The render props pattern involves a component that takes a function as a prop and calls it to render its output. This lets you share stateful logic between components.',
        },
        {
          type: 'code',
          content: `// MouseTracker — shares mouse position via render prop
function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)} {/* call the function prop with the data */}
    </div>
  );
}

// Usage — consumer decides what to render
<MouseTracker render={({ x, y }) => (
  <p>Mouse at {x}, {y}</p>
)} />

// children as a function — same pattern
<MouseTracker>
  {({ x, y }) => <p>Position: {x}, {y}</p>}
</MouseTracker>`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Like HOCs, render props are largely replaced by custom hooks. But they still appear in library APIs (React Router\'s Route component historically used this pattern).',
        },
      ],
      keyPoints: [
        'A component accepts a function prop that returns JSX',
        'The component calls that function with shared state/data',
        'Solves the same problem as HOCs with more explicit data flow',
        'children can also be a function (children as render prop)',
        'Custom hooks are the modern replacement for this pattern',
      ],
    },
  },

  503: {
    title: 'What are compound components and how do you implement them?',
    difficulty: 'Hard',
    tags: ['Advanced React', 'Patterns'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Compound components are a pattern where a parent component and its children share implicit state via Context. The parent manages the state; children access it without explicit prop drilling.',
        },
        {
          type: 'code',
          content: `const TabContext = createContext(null);

function Tabs({ children, defaultTab }) {
  const [active, setActive] = useState(defaultTab);
  return (
    <TabContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }) {
  const { active, setActive } = useContext(TabContext);
  return (
    <button
      className={active === id ? 'active' : ''}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  );
}

// Usage — clean, declarative API
<Tabs defaultTab="home">
  <TabList>
    <Tab id="home">Home</Tab>
    <Tab id="about">About</Tab>
  </TabList>
</Tabs>`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: You see this pattern in popular libraries like Radix UI, Headless UI, and Reach UI. It gives users flexibility to compose UI while the parent controls the logic.',
        },
      ],
      keyPoints: [
        'Parent manages state; children access it via Context',
        'Avoids prop drilling while keeping API clean',
        'Components only work together — not in isolation',
        'Used by Radix UI, Headless UI, Reach UI',
        'Attach sub-components as properties: Tabs.Tab, Tabs.List',
      ],
    },
  },

  504: {
    title: 'How does React.forwardRef work and when do you need it?',
    difficulty: 'Hard',
    tags: ['Advanced React', 'Refs'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'By default, refs are not passed through to children. forwardRef lets a component expose an internal DOM node or component instance to its parent via ref.',
        },
        {
          type: 'code',
          content: `// Without forwardRef — parent cannot access input's DOM node
// With forwardRef — parent CAN pass a ref through

const FancyInput = React.forwardRef((props, ref) => (
  <input
    ref={ref}           // forward the ref to the real DOM node
    className="fancy"
    {...props}
  />
));

// Parent usage
function Form() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <>
      <FancyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: In React 19, ref can be passed as a regular prop — forwardRef is no longer needed. But for React 16-18 projects, forwardRef is still the standard approach.',
        },
      ],
      keyPoints: [
        'forwardRef wraps a component to accept a ref from parent',
        'Signature: forwardRef((props, ref) => JSX)',
        'Needed when building reusable inputs, modals, or UI library components',
        'useImperativeHandle customises what the parent sees via ref',
        'React 19 makes forwardRef unnecessary — ref is a regular prop',
      ],
    },
  },

  505: {
    title: 'Explain React.lazy and Suspense for code splitting',
    difficulty: 'Hard',
    tags: ['Advanced React', 'Performance'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React.lazy lets you dynamically import a component, splitting it into a separate bundle chunk. Suspense provides a fallback UI while the component\'s code is loading.',
        },
        {
          type: 'code',
          content: `import { lazy, Suspense } from 'react';

// Heavy component loaded lazily — separate bundle chunk
const HeavyChart = lazy(() => import('./HeavyChart'));
const Settings   = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyChart />
    </Suspense>
  );
}

// Route-level code splitting — load pages on demand
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile   = lazy(() => import('./pages/Profile'));

function Router() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile"   element={<Profile />} />
      </Routes>
    </Suspense>
  );
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Route-level code splitting is the most impactful use of React.lazy — users only download the code for the page they visit. Next.js does this automatically.',
        },
      ],
      keyPoints: [
        'React.lazy(() => import(\'./Component\')) splits into separate chunk',
        'Must be wrapped in Suspense to handle the loading state',
        'fallback prop shows while the chunk is downloading',
        'Route-level splitting has biggest impact on initial load',
        'Next.js handles this automatically for page components',
      ],
    },
  },

  506: {
    title: 'What is the Context selector pattern to avoid re-renders?',
    difficulty: 'Hard',
    tags: ['Advanced React', 'Performance', 'Context'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'When a Context value changes, ALL consumers re-render — even if they only use a tiny part of the value. The selector pattern splits context into smaller pieces or uses a library like use-context-selector.',
        },
        {
          type: 'code',
          content: `// ❌ Problem — one big context, every consumer re-renders on any change
const AppContext = createContext({ user: null, theme: 'dark', cart: [] });

// ✅ Solution 1 — split into multiple contexts
const UserContext  = createContext(null);
const ThemeContext = createContext('dark');
const CartContext  = createContext([]);

// ✅ Solution 2 — split state + dispatch
const StateContext    = createContext(null); // rarely changes
const DispatchContext = createContext(null); // stable reference

// Components that only need dispatch don't re-render on state change
function AddButton() {
  const dispatch = useContext(DispatchContext); // stable
  return <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>;
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Splitting state and dispatch into separate contexts is the most practical pattern. The dispatch function never changes (stable reference), so consumers of DispatchContext never re-render unnecessarily.',
        },
      ],
      keyPoints: [
        'All Context consumers re-render when context value changes',
        'Split one large context into smaller focused contexts',
        'Separate state context from dispatch context',
        'use-context-selector library adds selector support',
        'Zustand/Jotai are better for fine-grained subscriptions',
      ],
    },
  },

  507: {
    title: 'How do you implement an error boundary in React?',
    difficulty: 'Medium',
    tags: ['Advanced React', 'Error Handling'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Error boundaries catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the whole app. They must be class components (no hook equivalent yet).',
        },
        {
          type: 'code',
          content: `class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to error reporting service
    logErrorToService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary fallback={<ErrorPage />}>
  <HeavyFeature />
</ErrorBoundary>`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Error boundaries do NOT catch errors in event handlers, async code, or SSR. Use the react-error-boundary library for a hook-friendly API with onError callback and resetErrorBoundary.',
        },
      ],
      keyPoints: [
        'Error boundaries must be class components with getDerivedStateFromError',
        'componentDidCatch is for logging the error',
        'Wrap features/routes in error boundaries for isolated failures',
        'Does NOT catch async errors or event handler errors',
        'react-error-boundary library provides a modern API',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 6 — Performance (ids 601-606)
  ─────────────────────────────────────────────────────────────────────────── */

  601: {
    title: 'What is React.memo and when should you use it?',
    difficulty: 'Medium',
    tags: ['Performance', 'Memoization'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React.memo is a Higher Order Component that memoizes a functional component. If the component receives the same props as the last render, React skips re-rendering and reuses the previous output.',
        },
        {
          type: 'code',
          content: `// Without memo — re-renders every time parent re-renders
function ExpensiveItem({ item }) {
  return <div>{item.name}</div>;
}

// With memo — only re-renders when item prop changes
const ExpensiveItem = React.memo(function({ item }) {
  return <div>{item.name}</div>;
});

// Custom comparison — fine-grained control
const ExpensiveItem = React.memo(
  ({ item }) => <div>{item.name}</div>,
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
);`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: React.memo compares props shallowly. If you pass a new object or function reference on every render, memo will not help — combine it with useMemo and useCallback.',
        },
      ],
      keyPoints: [
        'React.memo skips re-render if props have not changed (shallow compare)',
        'Second argument: custom (prevProps, nextProps) => boolean',
        'Only helps for components that re-render with same props often',
        'Needs stable prop references — combine with useMemo/useCallback',
        'Do not over-use — profiling should justify it',
      ],
    },
  },

  602: {
    title: 'How does useMemo help with performance?',
    difficulty: 'Medium',
    tags: ['Performance', 'Hooks'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'useMemo caches the result of a calculation between renders. The cached result is returned until a dependency changes, avoiding expensive recomputation on every render.',
        },
        {
          type: 'code',
          content: `// Expensive calculation — runs on every render without memo
const filtered = products.filter(p => p.category === activeCategory);

// With useMemo — only recalculates when products or activeCategory changes
const filtered = useMemo(() => {
  return products.filter(p => p.category === activeCategory);
}, [products, activeCategory]);

// Also stabilises object/array references for React.memo children
const style = useMemo(() => ({ color: 'red', padding: 16 }), []);
// Same object reference on every render — prevents unnecessary child re-renders`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: useMemo is most valuable for (1) expensive computations like sorting/filtering large arrays, and (2) stabilising object/array references passed to memoized child components.',
        },
      ],
      keyPoints: [
        'useMemo(fn, deps) caches fn\'s return value until deps change',
        'Best for expensive calculations (sort, filter, transform)',
        'Also stabilises object/array references for React.memo',
        'Has its own cost — only use when you have a perf problem',
        'Every dep must be listed — same rules as useEffect',
      ],
    },
  },

  603: {
    title: 'What causes unnecessary re-renders and how do you prevent them?',
    difficulty: 'Medium',
    tags: ['Performance', 'Re-renders'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'A component re-renders when its state changes, its parent re-renders, or its context value changes. The most common causes of unnecessary re-renders are new object/function references and over-broad context.',
        },
        {
          type: 'code',
          content: `// ❌ New object on every render — child always re-renders
<Child style={{ color: 'red' }} />

// ✅ Stable reference
const style = useMemo(() => ({ color: 'red' }), []);
<Child style={style} />

// ❌ New function on every render
<Child onClick={() => doSomething(id)} />

// ✅ Stable function reference
const onClick = useCallback(() => doSomething(id), [id]);
<Child onClick={onClick} />

// ❌ Context with changing object value
<Ctx.Provider value={{ user, setUser }}>

// ✅ Split state and setter — setter is stable
<StateCtx.Provider value={user}>
  <SetterCtx.Provider value={setUser}>`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Use React DevTools Profiler to identify which components re-render and why before optimising. Premature optimisation adds complexity without measurable benefit.',
        },
      ],
      keyPoints: [
        'Inline objects/functions create new references every render',
        'useMemo for values, useCallback for functions',
        'React.memo skips child re-renders with same props',
        'Split context to avoid broad re-renders',
        'Always profile before optimising',
      ],
    },
  },

  604: {
    title: 'Explain virtualisation and why libraries like react-window exist',
    difficulty: 'Hard',
    tags: ['Performance', 'Lists'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Virtualisation (windowing) renders only the items currently visible in the viewport, instead of all items in a long list. For a 10,000-item list, only ~20 DOM nodes exist at any time.',
        },
        {
          type: 'code',
          content: `import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}> {/* style contains position/height — required */}
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}       // visible height of the list
      width="100%"
      itemCount={items.length}  // total items
      itemSize={50}      // height of each row in px
    >
      {Row}
    </FixedSizeList>
  );
}`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Use react-window for fixed-size items (faster) and react-virtuoso or @tanstack/virtual for variable-size items or infinite scroll patterns.',
        },
      ],
      keyPoints: [
        'Virtualisation renders only visible items — huge DOM savings',
        'react-window is lightweight for fixed-size lists/grids',
        'react-virtuoso handles variable heights and infinite scroll',
        'Always pass the style prop to row components for positioning',
        'Critical for lists > 500 items to maintain 60fps',
      ],
    },
  },

  605: {
    title: 'How do you profile a React app using DevTools?',
    difficulty: 'Medium',
    tags: ['Performance', 'DevTools'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'React DevTools has a Profiler tab that records component renders. You can see which components rendered, how long they took, and why they rendered.',
        },
        {
          type: 'code',
          content: `// 1. Open React DevTools → Profiler tab
// 2. Click "Record" button
// 3. Interact with the app
// 4. Click "Stop" to see the flame chart

// Programmatic profiling with Profiler API
import { Profiler } from 'react';

function onRender(id, phase, actualDuration) {
  console.log(\`\${id} [\${phase}]: \${actualDuration.toFixed(2)}ms\`);
}

<Profiler id="SlowComponent" onRender={onRender}>
  <SlowComponent />
</Profiler>`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: The "Ranked" chart view shows the most expensive renders sorted by time — start optimising from the top. Look for components that re-render on every interaction without changing output.',
        },
      ],
      keyPoints: [
        'React DevTools Profiler records all component renders',
        'Flame chart shows render hierarchy and duration',
        'Ranked chart sorts components by render time',
        '"Why did this render?" tooltip shows the cause',
        'Profiler API enables programmatic performance measurement',
      ],
    },
  },

  606: {
    title: 'What is code splitting and how do you implement it in React?',
    difficulty: 'Hard',
    tags: ['Performance', 'Code Splitting'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        {
          type: 'text',
          content:
            'Code splitting breaks your JavaScript bundle into smaller chunks that are loaded on demand. Instead of shipping one large bundle, users download only the code needed for the current page.',
        },
        {
          type: 'code',
          content: `// 1. Route-level splitting with React.lazy
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings  = lazy(() => import('./pages/Settings'));

// 2. Component-level splitting for heavy features
const RichTextEditor = lazy(() => import('./RichTextEditor'));
const PDFViewer      = lazy(() => import('./PDFViewer'));

// 3. Dynamic import for libraries
async function handleExport() {
  const { exportToExcel } = await import('./exportUtils'); // loads only on click
  exportToExcel(data);
}

// All lazy components need a Suspense boundary
<Suspense fallback={<Spinner />}>
  <Dashboard />
</Suspense>`,
        },
        {
          type: 'tip',
          content:
            'Interview tip: Next.js handles route-level code splitting automatically — every page.jsx is a separate chunk. For client-side React apps with Vite or webpack, React.lazy is the standard approach.',
        },
      ],
      keyPoints: [
        'Code splitting reduces initial bundle size and load time',
        'React.lazy + Suspense is the standard React approach',
        'Route-level splitting is the highest-impact strategy',
        'Dynamic import() works for libraries too (load on demand)',
        'Next.js auto-splits by route; Vite/webpack split via import()',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 7 — Testing (ids 701-707)
  ─────────────────────────────────────────────────────────────────────────── */

  701: {
    title: 'What is the difference between unit, integration, and e2e tests?',
    difficulty: 'Easy',
    tags: ['Testing', 'Fundamentals'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Unit tests test a single function or component in isolation. Integration tests verify multiple units working together. End-to-end (e2e) tests simulate a real user flow in a browser.' },
        { type: 'code', content: `// Unit — isolated, fast
test('adds 1 + 1', () => expect(add(1, 1)).toBe(2));

// Integration — multiple components together
test('submits login form', async () => {
  render(<LoginForm />);
  await userEvent.type(screen.getByLabelText('Email'), 'a@b.com');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(screen.getByText('Welcome')).toBeInTheDocument();
});

// E2E — real browser (Playwright / Cypress)
test('user can checkout', async ({ page }) => {
  await page.goto('/shop');
  await page.click('text=Add to Cart');
  await page.click('text=Checkout');
  await expect(page).toHaveURL('/order-confirmation');
});` },
        { type: 'tip', content: 'Interview tip: Aim for the Testing Trophy (Kent C. Dodds) — a focus on integration tests, supported by unit tests for utilities and e2e tests for critical paths.' },
      ],
      keyPoints: [
        'Unit: one function/component in isolation — fastest',
        'Integration: multiple units together — best ROI for React',
        'E2E: real browser, full flow — slowest but highest confidence',
        'Testing Trophy: mostly integration tests, some unit and e2e',
        'RTL encourages integration-style testing by default',
      ],
    },
  },

  702: {
    title: 'How do you set up Jest with React?',
    difficulty: 'Easy',
    tags: ['Testing', 'Jest'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'For React apps created with Create React App, Jest is pre-configured. For Vite projects, use Vitest (Jest-compatible) or configure Jest manually with Babel/SWC transforms.' },
        { type: 'code', content: `// Vitest setup for Vite (recommended)
// vite.config.js
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});

// setupTests.js
import '@testing-library/jest-dom';

// package.json scripts
"scripts": {
  "test": "vitest",
  "test:run": "vitest run" // single run, no watch
}` },
        { type: 'tip', content: 'Interview tip: Vitest is faster than Jest for Vite projects and has the same API. For Next.js, use Jest with next/jest config or the built-in turbopack test runner.' },
      ],
      keyPoints: [
        'CRA includes Jest out of the box',
        'Vite projects: use Vitest (same API, much faster)',
        '@testing-library/jest-dom adds custom DOM matchers',
        'jsdom environment simulates browser APIs in Node',
        'setupFiles runs before each test file',
      ],
    },
  },

  703: {
    title: 'What is React Testing Library and why is it preferred over Enzyme?',
    difficulty: 'Medium',
    tags: ['Testing', 'RTL'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'React Testing Library (RTL) tests components from the user\'s perspective — finding elements by role, label, or text, just like a user would. Enzyme tests implementation details like component state and lifecycle, making tests brittle.' },
        { type: 'code', content: `// RTL — tests behaviour, not implementation
test('shows error on empty submit', async () => {
  render(<LoginForm />);

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
});

// Enzyme — tests implementation (brittle)
// wrapper.state('error') — breaks when you refactor to hooks` },
        { type: 'tip', content: 'Interview tip: RTL\'s guiding principle: "The more your tests resemble the way your software is used, the more confidence they give you." Enzyme is no longer maintained for React 17+.' },
      ],
      keyPoints: [
        'RTL queries by accessibility role, label, text — like a user',
        'Does not test implementation details — tests survive refactors',
        'Enzyme tests state/methods — breaks when you refactor',
        'RTL is the React team\'s recommended testing library',
        'Enzyme is no longer maintained for modern React',
      ],
    },
  },

  704: {
    title: 'How do you test a component that uses useState?',
    difficulty: 'Medium',
    tags: ['Testing', 'RTL'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'You test stateful components by interacting with them like a user would — clicking buttons, typing in inputs — and asserting on the visible output, not on the state value directly.' },
        { type: 'code', content: `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p data-testid="count">{count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}

// Test — interact and assert on UI output
test('increments counter on click', async () => {
  render(<Counter />);

  const count  = screen.getByTestId('count');
  const button = screen.getByRole('button', { name: /increment/i });

  expect(count).toHaveTextContent('0');
  await userEvent.click(button);
  expect(count).toHaveTextContent('1');
  await userEvent.click(button);
  expect(count).toHaveTextContent('2');
});` },
        { type: 'tip', content: 'Interview tip: Wrap state-updating interactions in act() — RTL\'s userEvent does this automatically. You should never need to check component.state() directly.' },
      ],
      keyPoints: [
        'Test via user interactions, not by reading state directly',
        'userEvent from @testing-library/user-event handles events realistically',
        'Assert on visible DOM output after interactions',
        'State updates are wrapped in act() automatically by userEvent',
        'data-testid is a last resort — prefer accessible queries',
      ],
    },
  },

  705: {
    title: 'How do you mock API calls in React tests?',
    difficulty: 'Hard',
    tags: ['Testing', 'Mocking'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'The recommended approach is MSW (Mock Service Worker) which intercepts network requests at the network level, making tests realistic without hitting real APIs.' },
        { type: 'code', content: `// MSW setup — src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([{ id: 1, name: 'Alice' }]);
  }),
];

// Test file
import { server } from './mocks/server';

beforeAll(()  => server.listen());
afterEach(()  => server.resetHandlers());
afterAll(()  => server.close());

test('loads and displays users', async () => {
  render(<UserList />);

  // Shows loading state first
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Users appear after fetch
  expect(await screen.findByText('Alice')).toBeInTheDocument();
});` },
        { type: 'tip', content: 'Interview tip: MSW is superior to jest.fn() mocking fetch because it tests the actual network layer. Override handlers per test with server.use() for error/edge case scenarios.' },
      ],
      keyPoints: [
        'MSW intercepts real HTTP requests — most realistic approach',
        'jest.fn() mocking fetch is simpler but less accurate',
        'Use findBy* queries (async) when waiting for data to load',
        'server.use() overrides handlers for specific error scenarios',
        'waitFor() retries assertion until it passes or times out',
      ],
    },
  },

  706: {
    title: 'What is the userEvent vs fireEvent difference in RTL?',
    difficulty: 'Medium',
    tags: ['Testing', 'RTL'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'fireEvent dispatches a single synthetic DOM event. userEvent simulates full user interactions — for a click it fires pointerdown, mousedown, pointerup, mouseup, click in sequence, just like a real browser.' },
        { type: 'code', content: `// fireEvent — single event, lower-level
fireEvent.click(button);
fireEvent.change(input, { target: { value: 'hello' } });

// userEvent — full interaction sequence (recommended)
import userEvent from '@testing-library/user-event';

const user = userEvent.setup(); // v14+ API

await user.click(button);
await user.type(input, 'hello'); // fires keydown, keypress, input, keyup per char
await user.clear(input);
await user.selectOptions(select, 'option1');` },
        { type: 'tip', content: 'Interview tip: Always prefer userEvent over fireEvent for interaction testing — it catches bugs that only appear when the full event sequence fires. Use fireEvent for uncommon events that userEvent does not support.' },
      ],
      keyPoints: [
        'fireEvent fires a single synthetic event — low-level',
        'userEvent simulates full interaction including pointer events',
        'userEvent catches more real-world bugs',
        'userEvent is async in v14+ — always await it',
        'Use fireEvent for events without userEvent equivalent',
      ],
    },
  },

  707: {
    title: 'How do you test custom hooks with renderHook?',
    difficulty: 'Hard',
    tags: ['Testing', 'Custom Hooks'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'renderHook from @testing-library/react lets you test a custom hook in isolation without wrapping it in a component. It returns result.current which holds the hook\'s return value.' },
        { type: 'code', content: `import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter(0));

  expect(result.current.count).toBe(0);

  act(() => result.current.increment()); // wrap state updates in act()

  expect(result.current.count).toBe(1);
});

test('resets to initial value', () => {
  const { result } = renderHook(() => useCounter(10));
  act(() => result.current.reset());
  expect(result.current.count).toBe(10);
});` },
        { type: 'tip', content: 'Interview tip: For hooks that need Context providers, pass a wrapper option to renderHook: renderHook(() => useTheme(), { wrapper: ThemeProvider }).' },
      ],
      keyPoints: [
        'renderHook tests hooks without needing a wrapper component',
        'result.current holds the hook\'s return value',
        'Wrap state-updating calls in act()',
        'Pass wrapper option for hooks that need Context',
        'Rerender with new props using result.rerender({ newProp })',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 8 — React Router (ids 801-806)
  ─────────────────────────────────────────────────────────────────────────── */

  801: {
    title: 'How does React Router v6 differ from v5?',
    difficulty: 'Medium',
    tags: ['React Router', 'Routing'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'React Router v6 is a significant rewrite with a cleaner API. Routes are nested declaratively, Switch is replaced by Routes, and exact is no longer needed.' },
        { type: 'code', content: `// v5 — Switch + component prop
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/users/:id" component={UserProfile} />
</Switch>

// v6 — Routes + element prop + automatic exact matching
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users/:id" element={<UserProfile />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// v6 nested routes — Outlet renders child route
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="settings" element={<Settings />} />
</Route>` },
        { type: 'tip', content: 'Interview tip: v6 uses relative paths in nested routes — you no longer repeat the parent path prefix. useNavigate() replaces useHistory(), and useParams() works the same.' },
      ],
      keyPoints: [
        'Routes replaces Switch; element prop replaces component',
        'All routes are exact by default in v6 — no exact prop needed',
        'Nested routes use Outlet to render child content',
        'useNavigate() replaces useHistory()',
        'Relative paths in nested routes — no need to repeat parent path',
      ],
    },
  },

  802: {
    title: 'What is the difference between BrowserRouter and HashRouter?',
    difficulty: 'Easy',
    tags: ['React Router', 'Routing'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'BrowserRouter uses the HTML5 History API for clean URLs (/about, /users/1). HashRouter uses the URL hash (#/about, #/users/1) — everything after # is not sent to the server.' },
        { type: 'code', content: `// BrowserRouter — clean URLs (requires server config)
// https://app.com/dashboard  ← server must handle this route

// HashRouter — hash-based (works on any static server)
// https://app.com/#/dashboard  ← server always serves index.html

// BrowserRouter — preferred for production
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter><App /></BrowserRouter>

// HashRouter — use only when you cannot configure the server
import { HashRouter } from 'react-router-dom';
<HashRouter><App /></HashRouter>` },
        { type: 'tip', content: 'Interview tip: Always use BrowserRouter for production apps deployed to a proper server. Configure your server (nginx/Apache) to redirect all routes to index.html for SPAs.' },
      ],
      keyPoints: [
        'BrowserRouter: clean URLs using HTML5 History API',
        'HashRouter: hash-based URLs — works without server config',
        'BrowserRouter needs server to serve index.html for all routes',
        'HashRouter is a fallback for static hosts without URL rewriting',
        'Prefer BrowserRouter for SEO and clean user experience',
      ],
    },
  },

  803: {
    title: 'How do you create nested routes in React Router v6?',
    difficulty: 'Medium',
    tags: ['React Router', 'Nested Routes'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'In v6 you nest Route components inside a parent Route, then place an Outlet component in the parent\'s element where child routes should render.' },
        { type: 'code', content: `// Route definition
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />       {/* /dashboard */}
    <Route path="analytics" element={<Analytics />} /> {/* /dashboard/analytics */}
    <Route path="settings"  element={<Settings />} />  {/* /dashboard/settings */}
  </Route>
</Routes>

// DashboardLayout.jsx — renders the active child route
function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Outlet /> {/* child route renders here */}
      </main>
    </div>
  );
}` },
        { type: 'tip', content: 'Interview tip: The index route renders when the parent path matches exactly. It is the default child — similar to a directory\'s index.html file.' },
      ],
      keyPoints: [
        'Nest Route elements inside a parent Route',
        'Place <Outlet /> in the parent element where children render',
        'index route matches the parent path exactly (no sub-path)',
        'Child paths are relative — no need to repeat /dashboard',
        'Multiple levels of nesting are supported',
      ],
    },
  },

  804: {
    title: 'How do you implement protected routes in React Router?',
    difficulty: 'Medium',
    tags: ['React Router', 'Auth'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Protected routes redirect unauthenticated users to a login page. In v6 you create a wrapper component that checks auth and renders either the child or a redirect.' },
        { type: 'code', content: `// ProtectedRoute component
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    // Preserve attempted URL for redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

// Usage — wrap any route that needs auth
<Routes>
  <Route path="/login" element={<LoginPage />} />

  <Route path="/dashboard" element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }>
    <Route index element={<DashboardHome />} />
  </Route>
</Routes>

// After login — redirect back to original destination
const navigate = useNavigate();
const { from } = location.state ?? { from: { pathname: '/dashboard' } };
navigate(from, { replace: true });` },
        { type: 'tip', content: 'Interview tip: Save the attempted URL in location.state so you can redirect users back to their intended destination after a successful login.' },
      ],
      keyPoints: [
        'Create a wrapper component that checks auth and redirects',
        'Use <Navigate replace> for redirect (no back button to protected page)',
        'Save location.state to redirect back after login',
        'Can also be implemented as a layout route with Outlet',
        'Server-side auth (Next.js middleware) is more secure for SSR',
      ],
    },
  },

  805: {
    title: 'What are loaders and actions in React Router v6.4+?',
    difficulty: 'Hard',
    tags: ['React Router', 'Data Loading'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Loaders fetch data for a route before it renders — similar to getServerSideProps in Next.js. Actions handle form submissions (mutations). Both are defined on Route objects using createBrowserRouter.' },
        { type: 'code', content: `import { createBrowserRouter, useLoaderData, Form } from 'react-router-dom';

// Define router with loader and action
const router = createBrowserRouter([
  {
    path: '/users/:id',
    loader: async ({ params }) => {
      const user = await fetchUser(params.id);
      return user; // available via useLoaderData()
    },
    action: async ({ request }) => {
      const formData = await request.formData();
      await updateUser(formData);
      return redirect('/users');
    },
    element: <UserProfile />,
  },
]);

// In component — data is already loaded when component mounts
function UserProfile() {
  const user = useLoaderData();

  return (
    <Form method="post"> {/* triggers the action */}
      <input name="name" defaultValue={user.name} />
      <button type="submit">Save</button>
    </Form>
  );
}` },
        { type: 'tip', content: 'Interview tip: Loaders and actions enable parallel data loading and eliminate loading states inside components. This is the same mental model as Next.js Server Components + Server Actions.' },
      ],
      keyPoints: [
        'loader runs before route renders — data is ready on mount',
        'action handles form POST/PUT/DELETE submissions',
        'Requires createBrowserRouter (not BrowserRouter JSX)',
        'useLoaderData() reads the loaded data in the component',
        'Enables parallel loading of multiple route loaders',
      ],
    },
  },

  806: {
    title: 'How do you handle 404 pages in React Router?',
    difficulty: 'Easy',
    tags: ['React Router', 'Routing'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Add a catch-all route with path="*" as the last route in your Routes component. It matches any URL that did not match earlier routes.' },
        { type: 'code', content: `// Catch-all 404 route
<Routes>
  <Route path="/"        element={<Home />} />
  <Route path="/about"   element={<About />} />
  <Route path="/users/:id" element={<User />} />
  <Route path="*" element={<NotFound />} /> {/* must be last */}
</Routes>

// NotFound.jsx
function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <p>No route for <code>{location.pathname}</code></p>
      <Link to="/">Go home</Link>
    </div>
  );
}

// createBrowserRouter — use errorElement instead
const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
]);` },
        { type: 'tip', content: 'Interview tip: With createBrowserRouter, add errorElement to a route to handle both 404s and loader/action errors in one place. useRouteError() gives you the error details.' },
      ],
      keyPoints: [
        'path="*" matches any unmatched route — must be last',
        'useLocation().pathname shows which URL was not found',
        'createBrowserRouter uses errorElement for error handling',
        'errorElement catches loader/action errors too, not just 404s',
        'useRouteError() reads the thrown error in errorElement',
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────────────────────
     TOPIC 9 — TypeScript + React (ids 901-908)
  ─────────────────────────────────────────────────────────────────────────── */

  901: {
    title: 'How do you type component props with TypeScript?',
    difficulty: 'Easy',
    tags: ['TypeScript', 'Props'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Define a TypeScript interface or type for your props and pass it as a generic to the component function. This gives you autocomplete and compile-time safety.' },
        { type: 'code', content: `// Using interface (recommended for props)
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;       // optional prop
  variant?: 'primary' | 'secondary'; // union type
}

function Button({ label, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={variant}>
      {label}
    </button>
  );
}

// Usage — TypeScript will error on wrong prop types
<Button label="Save" onClick={handleSave} />
<Button label="Delete" onClick={handleDelete} variant="secondary" />` },
        { type: 'tip', content: 'Interview tip: Use interface for props objects — they are open for extension (declaration merging). Use type for unions, intersections, or primitives.' },
      ],
      keyPoints: [
        'Define an interface or type for your props shape',
        'Optional props use the ? modifier',
        'Union types constrain string props to specific values',
        'Destructure props with the type in the function signature',
        'TypeScript catches wrong prop types at compile time',
      ],
    },
  },

  902: {
    title: 'What is the difference between interface and type in TypeScript?',
    difficulty: 'Medium',
    tags: ['TypeScript', 'Fundamentals'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Both interface and type can describe object shapes. The main differences are: interfaces support declaration merging and are open for extension; type aliases can represent unions, intersections, primitives, and tuples.' },
        { type: 'code', content: `// interface — use for object shapes and component props
interface User {
  id: number;
  name: string;
}
interface User { email: string; } // declaration merging — adds email to User

// type — use for unions, intersections, primitives
type Status = 'active' | 'inactive' | 'banned'; // union
type ID     = string | number;                   // union
type Admin  = User & { role: 'admin' };          // intersection

// Both can describe functions
interface Formatter { (value: string): string; }
type Formatter = (value: string) => string;` },
        { type: 'tip', content: 'Interview tip: For React props and component APIs, use interface (they show cleaner in hover tooltips and support merging). For utility types and unions, use type.' },
      ],
      keyPoints: [
        'interface supports declaration merging — type does not',
        'type handles unions (A | B), intersections (A & B), tuples',
        'Both can describe object shapes and function signatures',
        'Use interface for props and class contracts',
        'Use type for unions, mapped types, and complex compositions',
      ],
    },
  },

  903: {
    title: 'How do you type useState with TypeScript?',
    difficulty: 'Easy',
    tags: ['TypeScript', 'Hooks'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'TypeScript infers the type of useState from the initial value. When the initial value is null or undefined, or when you want a specific type, provide it as a generic argument.' },
        { type: 'code', content: `// Inferred — TypeScript knows it's a number
const [count, setCount] = useState(0);

// Explicit generic — needed when initial value is null
const [user, setUser] = useState<User | null>(null);

// Array type
const [items, setItems] = useState<string[]>([]);

// Object type
interface FormData { name: string; email: string; }
const [form, setForm] = useState<FormData>({ name: '', email: '' });

// Union type — component can be in different states
type Status = 'idle' | 'loading' | 'success' | 'error';
const [status, setStatus] = useState<Status>('idle');` },
        { type: 'tip', content: 'Interview tip: When the initial state is null but will later be an object, use useState<User | null>(null). This forces you to handle the null case before accessing properties.' },
      ],
      keyPoints: [
        'TypeScript infers type from the initial value when possible',
        'Use generic useState<Type> when initial value is null/undefined',
        'Explicitly type arrays: useState<Item[]>([])',
        'Union state types: useState<\'idle\' | \'loading\'>(\'idle\')',
        'The setter function is automatically typed to accept the same type',
      ],
    },
  },

  904: {
    title: 'How do you type event handlers in React + TypeScript?',
    difficulty: 'Medium',
    tags: ['TypeScript', 'Events'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'React provides built-in event types in @types/react. The generic parameter is the HTML element that fires the event.' },
        { type: 'code', content: `// onClick — React.MouseEvent<HTMLElement>
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log(e.currentTarget.id);
};

// onChange — React.ChangeEvent<HTMLInputElement>
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

// onSubmit — React.FormEvent<HTMLFormElement>
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
};

// Inline — TypeScript infers automatically
<input onChange={(e) => setValue(e.target.value)} />` },
        { type: 'tip', content: 'Interview tip: For inline handlers TypeScript infers the event type automatically — you only need explicit types when extracting handlers to separate functions.' },
      ],
      keyPoints: [
        'React.MouseEvent<T>, React.ChangeEvent<T>, React.FormEvent<T>',
        'Generic T is the HTML element (HTMLButtonElement, HTMLInputElement)',
        'Inline handlers are automatically inferred — no type needed',
        'e.currentTarget is typed to the element T',
        'React.KeyboardEvent, React.FocusEvent, React.DragEvent also available',
      ],
    },
  },

  905: {
    title: 'How do you use generics with React components?',
    difficulty: 'Hard',
    tags: ['TypeScript', 'Generics'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'Generic components accept a type parameter, letting you create reusable components that work with any data shape while maintaining full type safety.' },
        { type: 'code', content: `// Generic Select component — works with any data type
interface SelectProps<T> {
  options:  T[];
  value:    T;
  onChange: (value: T) => void;
  getLabel: (option: T) => string;
  getValue: (option: T) => string | number;
}

function Select<T>({ options, value, onChange, getLabel, getValue }: SelectProps<T>) {
  return (
    <select
      value={String(getValue(value))}
      onChange={e => {
        const selected = options.find(o => String(getValue(o)) === e.target.value);
        if (selected) onChange(selected);
      }}
    >
      {options.map(o => (
        <option key={String(getValue(o))} value={String(getValue(o))}>
          {getLabel(o)}
        </option>
      ))}
    </select>
  );
}

// Usage — fully typed for User objects
<Select<User>
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  getLabel={u => u.name}
  getValue={u => u.id}
/>` },
        { type: 'tip', content: 'Interview tip: In .tsx files, use <T,> (trailing comma) or <T extends object> to distinguish a generic from a JSX opening tag.' },
      ],
      keyPoints: [
        'Generic components use <T> type parameter in props interface',
        'Enables reusable components with full type safety',
        'In .tsx files: use <T,> or <T extends unknown> to avoid JSX ambiguity',
        'Common for List, Table, Select, and form components',
        'The consumer gets autocomplete for the specific data type',
      ],
    },
  },

  906: {
    title: 'What is the React.FC type and should you use it?',
    difficulty: 'Medium',
    tags: ['TypeScript', 'Components'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'React.FC (or React.FunctionComponent) is a type for functional components. It was popular but is now generally discouraged in favour of directly typing props.' },
        { type: 'code', content: `// React.FC — not recommended (pre-React 18)
const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <h1>Hello {name}</h1>;
};
// Problems: implicit children prop, harder return type flexibility

// ✅ Recommended — directly type the props
interface GreetingProps { name: string; }

function Greeting({ name }: GreetingProps) {
  return <h1>Hello {name}</h1>;
}

// Or with explicit return type when needed
function Greeting({ name }: GreetingProps): React.JSX.Element {
  return <h1>Hello {name}</h1>;
}` },
        { type: 'tip', content: 'Interview tip: React.FC was problematic in React 17 because it added children to all components implicitly. React 18 removed this, but the community standard is still to type props directly.' },
      ],
      keyPoints: [
        'React.FC adds implicit return type and displayName',
        'React 17 and earlier: React.FC wrongly included children always',
        'React 18 fixed this but community prefers direct prop typing',
        'Direct typing: function Component({ prop }: Props) is cleaner',
        'Use React.JSX.Element for explicit return type annotation',
      ],
    },
  },

  907: {
    title: 'How do you type the children prop correctly?',
    difficulty: 'Medium',
    tags: ['TypeScript', 'Props'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'In React 18+, children is not automatically included in props. You must explicitly type it using React.ReactNode (most permissive) or more specific types.' },
        { type: 'code', content: `import { ReactNode, PropsWithChildren } from 'react';

// Option 1 — explicit ReactNode (most common)
interface CardProps {
  title: string;
  children: ReactNode; // accepts JSX, string, number, null, array
}

function Card({ title, children }: CardProps) {
  return <div><h2>{title}</h2>{children}</div>;
}

// Option 2 — PropsWithChildren utility type
function Card({ title, children }: PropsWithChildren<{ title: string }>) {
  return <div><h2>{title}</h2>{children}</div>;
}

// Specific children types
interface TabsProps {
  children: ReactElement | ReactElement[]; // only React elements, no strings
}

// Single child only
interface WrapperProps {
  children: ReactElement; // exactly one element
}` },
        { type: 'tip', content: 'Interview tip: ReactNode is the most permissive type — use it for children in most cases. Use ReactElement when you only want JSX elements (not strings or numbers).' },
      ],
      keyPoints: [
        'React 18: children must be explicitly typed — not automatic',
        'ReactNode: accepts JSX, strings, numbers, null, arrays',
        'ReactElement: only JSX elements, not primitives',
        'PropsWithChildren<T> is a utility that adds children: ReactNode to T',
        'Use ReactNode unless you need to restrict children type',
      ],
    },
  },

  908: {
    title: 'How do you type useRef for DOM elements?',
    difficulty: 'Medium',
    tags: ['TypeScript', 'Hooks', 'Refs'],
    tabs: ['Answer', 'Key Points', 'Example', 'Discussion'],
    answer: {
      explanation: [
        { type: 'text', content: 'useRef has two overloads in TypeScript. For DOM elements, pass the element type as generic and null as initial value. For mutable values, pass the type directly.' },
        { type: 'code', content: `// DOM ref — type is HTMLElement, initial value null
const inputRef  = useRef<HTMLInputElement>(null);
const divRef    = useRef<HTMLDivElement>(null);
const buttonRef = useRef<HTMLButtonElement>(null);

// Access safely — .current can be null before mount
function focusInput() {
  inputRef.current?.focus(); // optional chaining for safety
}

<input ref={inputRef} />

// Mutable value ref — not null, just a value holder
const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

useEffect(() => {
  timerRef.current = setInterval(tick, 1000);
  return () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
}, []);` },
        { type: 'tip', content: 'Interview tip: When you pass null as the initial value to useRef<T>(null), TypeScript gives you MutableRefObject<T | null> — you need optional chaining (.current?.method()) to access it safely.' },
      ],
      keyPoints: [
        'useRef<HTMLInputElement>(null) for DOM element refs',
        '.current is null before the component mounts',
        'Use optional chaining: ref.current?.focus()',
        'For mutable values use useRef<Type>(initialValue)',
        'ReturnType<typeof setTimeout> types timer IDs correctly',
      ],
    },
  },
}); // end Object.assign
