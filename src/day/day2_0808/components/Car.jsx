import './css/style.css'

function Car(props) {
    return (
        <div className={`car-${props.label}`}>
            {props.name} 차
        </div>
    )
}

export default Car