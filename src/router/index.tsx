import Landing from 'landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlappyBird from '../playground/flappy-bird';
import NotFound from './not-found';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="flappy-bird" element={<FlappyBird />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
