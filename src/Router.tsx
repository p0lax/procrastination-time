import { HashRouter, Route, Routes } from "react-router-dom";
import Scene from "./features/WorkTimer/components/Scene/Scene";
import Main from "pages/Main";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/about" />
        <Route path="/users" />
        <Route path="/scene/:id" element={<Scene />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}
