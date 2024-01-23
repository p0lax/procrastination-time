import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
