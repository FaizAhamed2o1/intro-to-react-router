import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // Note: Describes the error information
  const error = useRouteError();
  //   console.log(error);
  const navigate = useNavigate();
  const handleGoHome = () => navigate("/");
  return (
    <div>
      <h2 style={{ fontSize: "70px" }}>{error.status}</h2>
      <p>{error.data}</p>
      <p>
        <em>{error.statusText || "Unknown Error"}</em>
      </p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
