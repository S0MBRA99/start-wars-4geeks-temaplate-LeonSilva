import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import LukeSkywalker from "./pages/characters/LukeSkywalker";
import C3po from "./pages/characters/C-3po";
import R2d2 from "./pages/characters/R2-D2";
import DarthVader from "./pages/characters/DarthVader";
import LeiaOrgana from "./pages/characters/LeiaOrgana";
import OwenLars from "./pages/characters/OwenLars";
import BeruWhitesunLars from "./pages/characters/BeruWhitesunLars";
import R5d4 from "./pages/characters/R5-D4";
import BiggsDarkLighter from "./pages/characters/BiggsDarklighter";
import ObiWanKenobi from "./pages/characters/ObiWanKenobi";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/Luke Skywalker" element={<LukeSkywalker />} />
      <Route path="/C-3PO" element={<C3po/>}/>
      <Route path="/R2-D2" element={<R2d2/>}/>
      <Route path="/Darth Vader" element={<DarthVader/>}/>
      <Route path="/Leia Organa" element={<LeiaOrgana/>}/>
      <Route path="/Owen Lars" element={<OwenLars/>}/>
      <Route path="/Beru Whitesun lars" element={<BeruWhitesunLars/>}/>
      <Route path="/R5-D4" element={<R5d4/>}/>
      <Route path="/Biggs Darklighter" element={<BiggsDarkLighter/>}/>
      <Route path="/Obi-Wan Kenobi" element={<ObiWanKenobi/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
