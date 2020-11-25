import React from 'react'
import ListItem from './listItem'
import '../component/listView.css'

function listView (){
    
    return <div className='List'>
        <ListItem />
        <ListItem />
        <ListItem />
    </div>
}

export default listView