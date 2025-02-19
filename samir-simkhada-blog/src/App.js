import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Blog from "./Blog"; // Import Blog Component

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src="/logo.png" alt="Logo" width="150" style={{ marginBottom: "20px" }} />
      <h1>Welcome to Samir Simkhada Blog</h1>
    </div>
  );
}

function About() {
  return <h1>About Me</h1>;
}

function App() {
  return (
    <Router>
      {/* Navigation Bar with Logo */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
        background: "#f8f8f8"
      }}>
        <img src="/logo.png" alt="Logo" width="50" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
