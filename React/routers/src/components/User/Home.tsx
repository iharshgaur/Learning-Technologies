import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <h1>Home Page</h1>
    </>
  );
}