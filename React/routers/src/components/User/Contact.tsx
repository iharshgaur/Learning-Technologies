import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();


  const handleListItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <li onClick={() => handleListItemClick("/")}>Home</li>
      <li onClick={() => handleListItemClick("/about")}>About</li>
      <h1>Contact Page</h1>
    </>
  );
}