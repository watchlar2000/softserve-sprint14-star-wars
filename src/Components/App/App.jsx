import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import { People, Planets, Starships, NotFound } from '../Pages';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
