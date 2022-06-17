function Modal(props) {

    function noButton() {
        props.onNoButton();
    }

    function yesButton() {
        props.onYesButton();
    }

    return( 
    <div className='modal'>
        <p>Czy jestes pewny?</p>
        <button className='btn btn--alt' onClick={noButton}>Nie</button>
        <button className='btn' onClick={yesButton}>Tak</button>
    </div>
    );
}

export default Modal;