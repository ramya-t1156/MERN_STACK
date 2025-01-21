# React Hooks Basics

## 1. useState
Used to manage state in functional components.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 2. useEffect
Used to handle side effects like fetching data, setting up subscriptions, or manually changing the DOM.

### Example 1: Fetcher Hook
```jsx
import { useState, useEffect } from "react";

const useFetcher = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const resParse = await res.json();
      setData(resParse);
    };
    getData();
  }, []);

  return data;
};

export default useFetcher;
```

### Example 2: Timer
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []); // Empty dependency array means it runs once on mount

  return <p>Timer: {count}s</p>;
}
```

### Example 3: Message Alert
```jsx
import React, { useState, useEffect } from 'react';

function MessageAlert() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      alert(`New message: ${message}`);
    }
  }, [message]); // Runs only when 'message' changes.

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <p>Message: {message}</p>
    </div>
  );
}

export default MessageAlert;
```

---

## 3. useContext
Provides access to values stored in React's Context API without needing Consumer components.

```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}
```

---

## 4. useRef
Provides a way to access and manipulate DOM elements or persist values across renders without causing re-renders.

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

---

## 5. useReducer
An alternative to useState for managing complex state logic using a reducer.

```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
