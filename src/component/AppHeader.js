import React from 'react'
import '../component/AppHeader.css'
function AppHeader(){
    return <header>
        <p className='headerTxt'> Currency Converter</p>
        <button className='addNewBtn'> + </button>
    </header>
}

export default AppHeader