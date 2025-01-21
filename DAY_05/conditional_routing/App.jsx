// Definition: Routes that are conditionally rendered based on some logic (e.g., user authentication).

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const isAuthenticated = true; // Example logic

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

// Use case: Protecting routes for authenticated users or restricting access to certain parts of the app.
