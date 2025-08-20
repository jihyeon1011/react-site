//<Book name ="html" numOfpage="100"/>

function Book(props){
    return(
    <div>
        <h3> 책이름{props.name} </h3>
        <h4> 책가격{props.numOfpage} </h4>
    </div>
    )
}

export default Book