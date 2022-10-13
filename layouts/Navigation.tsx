import { Link } from "react-router-dom";
import { RouteKey } from "../routes/RoutesKey";

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to={RouteKey.Index}>Home</Link>
        <Link to={RouteKey.Favourite}>Favourite</Link>
      </nav>
    </header>
  );
};

export default Navigation;
