import './App.css'
import {DATA} from "../mocks.ts";

function App() {

    return (
        <div className='flex gap-4 flex-col'>
            {DATA.map((item) => {
                return (
                    <div key={item.city}
                         className='flex w-96 bg-neutral-600 justify-between px-4 py-2 rounded-md items-center'>
                        <div className='flex items-center gap-2'>
                            <span className='bg-neutral-400 size-8 flex items-center justify-center rounded-md'>
                                {item.icon}
                            </span>
                        <div className='flex flex-col'>
                            <span className='text-lg text-white'>{`${item.city}, ${item.countryCode}`}</span>
                            <span className='text-sm text-neutral-300 text-left'>{item.description}</span>
                        </div>
                    </div>
                        <span className='text-sm font-bold'>{item.value}°C</span>
                    </div>)
            })}
        </div>)

}

export default App
