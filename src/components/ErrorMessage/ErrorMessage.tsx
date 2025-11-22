import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  errorInfo: Error;
}

function ErrorMessage({ errorInfo }: ErrorMessageProps) {
  return (
    <p className={css.text}>
      Oops, an error occurred! Error info: {errorInfo.message}
    </p>
  );
}

export default ErrorMessage;
