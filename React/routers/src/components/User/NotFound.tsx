import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <h1>404: Page Not Found</h1>
    </>
  );
}