function Modal() {
    return (
        <div id="pop-up">
            <div id="pop-up-window">
                <div id="pop-up-window-header">
                    <h1>Hodnocení produktu</h1>
                    <button className="xBTN">&times;</button>
                </div>
                <form>
                    <p>Rating</p>
                    <div>stars</div>
                    <label>Popis produktu</label>
                    <textarea name="popis" id="popis" cols="30" rows="5">

                    </textarea>
                    <button type="submit" className="defaultBTN">Uložit moje hodnocení</button>
                </form>
                    
            </div>
        </div>  
    )
}

export default Modal