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
import Tatooine from "./pages/planets/Tatooine";
import Alderaan from "./pages/planets/Alderaan";
import YavinIV from "./pages/planets/YavinIV";
import Hoth from "./pages/planets/Hoth";
import Dagobah from "./pages/planets/Dagobah";
import Bespin from "./pages/planets/Bespin";
import Endor from "./pages/planets/Endor";
import Naboo from "./pages/planets/Naboo";
import Coruscant from "./pages/planets/Coruscant";
import Kamino from "./pages/planets/Kamino";
import Cr90Corvete from "./pages/starships/Cr90Corvete";
import starDestroyer from "./pages/starships/StarDestroyer";
import SentinelClassLandingCraft from "./pages/starships/SentinelClassLandingCraft";
import DeathStar from "./pages/starships/DeathStar";
import Ywing from "./pages/starships/Y-wing";
import MilleniummFalcon from "./pages/starships/MillenniumFalcon";
import TIEAdvancex1 from "./pages/starships/TIEAdvancedx1";
import Executor from "./pages/starships/Executor";
import Xwing from "./pages/starships/X-wing";
import RebelTransport from "./pages/starships/RebelTransport";
import StarDestroyer from "./pages/starships/StarDestroyer";
import TIEAdvancedx1 from "./pages/starships/TIEAdvancedx1";

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
      <Route path="/Tatooine" element={<Tatooine/>}/>
      <Route path="/Alderaan" element={<Alderaan/>}/>
      <Route path="/Yavin IV" element={<YavinIV/>}/>
      <Route path="/Hoth" element={<Hoth/>}/>
      <Route path="/Dagobah" element={<Dagobah/>}/>
      <Route path="/Bespin" element={<Bespin/>}/>
      <Route path="/Endor" element={<Endor/>}/>
      <Route path="/Naboo" element={<Naboo/>}/>
      <Route path="/Coruscant" element={<Coruscant/>}/>
      <Route path="/Kamino" element={<Kamino/>}/>
      <Route path="/CR90 corvette" element={<Cr90Corvete/>}/>
      <Route path="/Star Destroyer" element={<StarDestroyer/>}/>
      <Route path="/Sentinel-class landing craft" element={<SentinelClassLandingCraft/>}/>
      <Route path="/Death Star" element={<DeathStar/>}/>
      <Route path="/Y-wing" element={<Ywing/>}/>
      <Route path="/Millennium Falcon" element={<MilleniummFalcon/>}/>
      <Route path="/TIE Advanced x1" element={<TIEAdvancedx1/>}/>
      <Route path="/Executor" element={<Executor/>}/>
      <Route path="/X-wing" element={<Xwing/>}/>
      <Route path="/Rebel transport" element={<RebelTransport/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
