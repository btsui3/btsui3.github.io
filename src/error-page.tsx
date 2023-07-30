import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  function isServerError(error: unknown): error is { message?: string, statusText?: string } {
    return error !== null && typeof error === 'object' && ('message' in error || 'statusText' in error);
  }

  let errorMessage = "An unknown error has occurred.";
  if (isServerError(error)) {
    errorMessage = error.message || error.statusText || errorMessage;
  }

  return (
    <div id="error-page">
      <h1>uh oh!</h1>
      <p>This is embarassing</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
