import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./screens";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
