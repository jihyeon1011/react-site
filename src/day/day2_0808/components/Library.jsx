import Book from './Book'

function Library() {
    return (
        <div>
            <Book name="html" numOfpage="100" />
            <Book name="css" numOfpage="300" />
            <Book name="git" numOfpage="200" />
            <Book name="js" numOfpage="800" />
        </div>)
}
export default Library