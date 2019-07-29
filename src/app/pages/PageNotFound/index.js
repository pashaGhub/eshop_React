import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <p>
        Oh no! Page not found{" "}
        <span role="image" aria-label="Scared face emoji">
          😱
        </span>
      </p>
      <Link to={ROUTES.defaultPage}>Go Home</Link>
    </div>
  );
}

export default PageNotFound;
