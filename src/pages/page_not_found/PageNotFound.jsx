import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

const PageNotFound = () => {
  usePageTitle("Page Not Found");
  return (
    <div className="not-found">
      <h1>404</h1>
      <p className="title">Page Not Found</p>
      <p className="desc">Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
