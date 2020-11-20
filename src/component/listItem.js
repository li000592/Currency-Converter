function ListItem(props){
    const data = props.data

    return (
    <div className ='countainer'>
        <div className='countryList'>
            <div className ='countryInfo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Twemoji2_1f1e8-1f1e6.svg" alt='countryImg'className='countryImg'/>
                <p className ='countryName'>Canada</p>
            </div>

            <p className ='date'>2020-11-18</p>
            
        </div>
        <div className='underline'></div>
    </div>
    
    )
    
}

export default ListItem