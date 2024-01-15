import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";

import { NotFound } from "./pages/NotFoundPage/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
