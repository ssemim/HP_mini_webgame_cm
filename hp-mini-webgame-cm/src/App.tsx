import './App.css'
import { Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import NoticePage from './pages/NoticePage/NoticePage.tsx';

function Layout() {
  return (
    <div className="flex flex-col justify-between h-100vh bg-backGroundBlack">
      <div className="flex flex-col  justify-between h-100vh bg-gradient-to-t from-backGroundGradientGray to-transparent">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}


function clickEffect(e: MouseEvent) {
  const d = document.createElement('div');
  d.className = 'clickEffect';
  // clientX/Y exist on MouseEvent when target is MouseEvent
  const me = e as MouseEvent & { clientX?: number; clientY?: number };
  if (typeof me.clientY === 'number') d.style.top = me.clientY + 'px';
  if (typeof me.clientX === 'number') d.style.left = me.clientX + 'px';
  document.body.appendChild(d);
  d.addEventListener('animationend', () => { d.parentElement?.removeChild(d); });
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', clickEffect);
}



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>} />
        <Route path="/notice" element={<NoticePage/>} />
      </Route>
    </Routes>
   
  )
}

export default App