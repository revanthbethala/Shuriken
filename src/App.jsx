import { Route, Routes } from 'react-router-dom';
import DashBoard from "./pages/DashBoard";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />

        <Route path="/resume" element={<ResumeBuilder />} />
      </Routes>
    </div>
  );
}

export default App;
