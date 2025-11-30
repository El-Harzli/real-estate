import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="relative w-full min-h-[2000px] font-space">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
