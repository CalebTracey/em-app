const useErrorBoundry = ({error, resetErrorBoundary}) => {
    const ErrorFallback = () => {
        return (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        )};
    return [ErrorFallback]
};
export default useErrorBoundry;