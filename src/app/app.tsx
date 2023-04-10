import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Game from './views/Game/Game';
import Finish from './views/Finish/Finish';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/finish',
    element: <Finish />,
  },
]);
export function App() {
  return <RouterProvider router={router} />;
}

export default App;
