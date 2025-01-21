// Definition: Routes that accept parameters and dynamically render content based on those parameters.

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

// Use case: Applications where paths depend on user data, like /user/123.
