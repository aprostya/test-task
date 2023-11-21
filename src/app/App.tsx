import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductCardDetail } from '../pages/ProductCardDetail';
import { Main } from '../pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:title" element={<ProductCardDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
