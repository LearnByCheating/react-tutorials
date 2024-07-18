import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.status === 404) {
    return (
      <div id="error-page" className="container mt-3 p-4 bg-light rounded-3 text-center">
        <h1>404 Error<br />
        Page not found</h1>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
  return (
    <div id="error-page" className="container mt-3 p-4 bg-light rounded-3 text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
