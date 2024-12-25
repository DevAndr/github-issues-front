import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("@/pages/HomePage.tsx"));
const StatisticPage = lazy(() => import("@/pages/StatisticPage.tsx"));
const IssueDetailsPage = lazy(() => import("@/pages/IssueDetailsPage.tsx"));
import BaseLayout from "@/layouts/BaseLayout.tsx";
import FullScreenLoader from "@/components/loader/FullScreenLoader";

function App() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<StatisticPage />} path="/statistic" />
          <Route element={<IssueDetailsPage />} path="/issue/:owner/:repo/:idIssue" />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
