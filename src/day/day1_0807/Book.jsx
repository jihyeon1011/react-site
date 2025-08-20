
function Book(props) {
    return (
        <div>
            <h5>이 책의 이름은 {props.name}</h5>
            <p>이 책은 {props.total}page로 이루어져 있다.</p>
        </div >
    )
}
export default Book;

