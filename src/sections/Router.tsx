import { HashRouter, Route, Routes } from "react-router-dom";
import { rootStore } from "../stores";
import App from "./App";
import Scene from "./Relax/Scene/Scene";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/about" />
        <Route path="/users" />
        <Route
          path="/scene/:id"
          element={<Scene store={rootStore.timerStore} />}
        />
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
}
