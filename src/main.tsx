import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CityList} from "./components/CityList.tsx";
import {CityItemDetails} from "./components/CityItemDetails.tsx";
import {FavouriteCityList} from "./components/FavouriteCityList.tsx";
import {store} from "./components/Store.tsx";
import {Provider} from "react-redux";
import UnitSwitcher from "./components/SwitchUnit.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <UnitSwitcher></UnitSwitcher>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CityList/>}/>
                <Route path="/city/:city" element={<CityItemDetails/>}/>
                <Route path="/favourites" element={<FavouriteCityList/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>

    ,
)
