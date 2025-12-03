export const Icon= ({icon})=>{
    return  <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                 alt="icon"
                 className='w-10 h-auto mx-auto'/>
}