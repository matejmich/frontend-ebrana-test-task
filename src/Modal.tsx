
interface ProductProps {
    // id: number
    // codeP: number
    // url: string
    // alt: string
    // name: string
    // rating: number
    // selected: boolean;
    // handleProductSelect: (productId: number) => void;
    // handleModalOpen: (_: boolean) => void;
    handleModalClose: (_: boolean) => void;
  }

function Modal({ handleModalClose }: ProductProps) {

function handleModalCloseClick() {
    handleModalClose(true)
}

    return (
        <div id="pop-up">
            <div id="pop-up-window">
                <div id="pop-up-window-header">
                    <h1>Hodnocení produktu</h1>
                    <button className="xBTN" onClick={handleModalCloseClick}>&times;</button>
                </div>
                <form>
                    <p>Rating</p>
                    <div>stars</div>
                    <label>Popis produktu</label>
                    <textarea name="popis" id="popis" cols="30" rows="5">

                    </textarea>
                    <button type="submit" className="defaultBTN" 
                    onClick={() => {
                                    handleModalCloseClick()
                                      }}>Uložit moje hodnocení</button>
                </form>
                    
            </div>
        </div>  
    )
}

export default Modal