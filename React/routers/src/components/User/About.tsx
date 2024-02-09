import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();


  const handleListItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <li onClick={() => handleListItemClick("/")}>Home</li>
      <li onClick={() => handleListItemClick("/contact")}>Contact</li>
      <h1>About Page</h1>
    </>
  );
}