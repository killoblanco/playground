import Landing from 'landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './not-found';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
