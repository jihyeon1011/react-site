import Button from './Button'
import './css/style.css'

function ConfirmDialog() {
    return (
        <>
            <Button color="green" children="test">확인</Button><br /><br />
            <Button color="red" children="test">취소</Button><br /><br />
            <Button color="yellow" children="test">결과</Button>

        </>
        )

}

export default ConfirmDialog