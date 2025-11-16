import './App.css'
import {useState} from "react";
import {DATA} from "../mocks.ts";
import {CityListItem} from "./components/CityListItem.tsx";

function App() {
    const [query,setQuery] = useState<string>('')
    const filteredList = DATA.filter((item) => item.city.toLowerCase().startsWith(query.toLowerCase()))
    return (
        <div className='flex gap-4 flex-col'>
            <input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Search for a city' className='border border-neutral-600 rounded-md px-2'/>
            {filteredList.map((item) =>
                <CityListItem key={item.city} {...item} />)}

        </div>
    )


}

export default App
