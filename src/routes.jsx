import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { PageLayout } from "./pages/LayoutPage/LayoutPage";
import { NotFound } from "./pages/NotFoundPage/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
