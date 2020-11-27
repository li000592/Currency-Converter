import React from 'react'
import '../component/fullCountryList.css'
import ListItem from './listItem'
import Search from './Search'

function FullCountryList (){
    return <div className='fullCountryList'>
        <Search/>
        <ListItem/>
    </div>
}
export default FullCountryList