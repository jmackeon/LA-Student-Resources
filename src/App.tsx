import { Navigate, Route, Routes } from "react-router-dom";
import { StageSelectorPage } from "./pages/StageSelectorPage";
import { StagePage } from "./pages/StagePage";
import { STAGES } from "./data/stages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StageSelectorPage />} />
      <Route path="/primary" element={<StagePage stage={STAGES.primary} />} />
      <Route path="/secondary/nc" element={<StagePage stage={STAGES["secondary-nc"]} />} />
      <Route path="/secondary/igcse" element={<StagePage stage={STAGES["secondary-igcse"]} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
