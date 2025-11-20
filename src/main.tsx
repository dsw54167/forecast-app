import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {CityList} from "./components/CityList.tsx";
import {CityItemDetails} from "./components/CityItemDetails.tsx";
import {FavouriteCityList} from "./components/FavouriteCityList.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CityList/>}/>
            <Route path="/city/:city" element={<CityItemDetails/>}/>
            <Route path="/favourites" element={<FavouriteCityList/>}/>
        </Routes>
    </BrowserRouter>,
)
