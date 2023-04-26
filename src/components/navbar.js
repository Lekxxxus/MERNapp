import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <div className="navbar">  
      <Link to="/">Home</Link>
      <Link to="/create-recipe">create-recipe</Link>
     
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : ( 
        <>
      <Link to="/saved-recipes">saved-recipes</Link>
        <button onClick={logout}>logout</button>
        </>
      )}
    </div>
  );
};
