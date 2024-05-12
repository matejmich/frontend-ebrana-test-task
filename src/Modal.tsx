import { useState, useEffect } from "react";
import fullStarIMG from "./assets/fullStar.svg";
import emptyStarIMG from "./assets/emptyStar.svg";

interface ProductProps {
    handleModalClose: () => void;
    currentProduct: {
        id: string;
        code: number;
        img: {
          url: string;
          alt: string;
        };
        name: string;
        rating: number;
        myReview?: {
            rating: number;
            comment: string;
        };
        reviews: Array<{
          img: {
            url: string;
            alt: string;
          };
          user: string;
          rating: number;
          comment: string;
          liked: boolean;
        }>;
    };
    handleModalSave: ( rating: number, comment: string ) => void

}

function Modal({ handleModalClose, currentProduct, handleModalSave }: ProductProps) {
    const [myRating, setMyRating] = useState<number>(currentProduct.myReview?.rating || 0);
    const [myComment, setMyComment] = useState<string>(currentProduct.myReview?.comment || "");

    useEffect(() => {
        setMyRating(currentProduct.myReview?.rating || 0)
        setMyComment(currentProduct.myReview?.comment || "")
    },[currentProduct])

    const handleStarClick = (rating: number) => {
        setMyRating(rating * 20);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMyComment(event.target.value);
    };

    function handleModalCloseClick() {
        handleModalClose();
    }
    function handleModalSaveClick() {
        event.preventDefault();
        handleModalSave(myRating, myComment)
        handleModalClose()
    }

    return (
        <div id="pop-up">
            <div id="pop-up-window">
                <div id="pop-up-window-header">
                    <h1>Hodnocení produktu</h1>
                    <button className="xBTN" onClick={handleModalCloseClick}>&times;</button>
                </div>
                <form>
                    <div className="pop-up-stars">
                    <p>Rating</p>

                        <div className="star-rating">

                            {[1, 2, 3, 4, 5].map((index) => (
                                <img
                                    key={index}
                                    src={index <= (myRating / 20) ? fullStarIMG : emptyStarIMG}
                                    alt="Star"
                                    className="avg-rating-star"
                                    onMouseEnter={() => handleStarClick(index)}
                                    onClick={() => handleStarClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <label>Popis produktu</label>
                    <textarea
                        name="popis"
                        id="popis"
                        cols="30"
                        rows="5"
                        value={myComment}
                        onChange={handleCommentChange}
                        placeholder="Okomentujte produkt..."
                        maxLength={130}
                    ></textarea>
                    <button
                        
                        className="defaultBTN"
                        onClick={() => {
                            handleModalSaveClick();
                        }}
                    >
                        Uložit moje hodnocení
                    </button>
                </form>
            </div>
            <div id="pop-up-escape" onClick={handleModalCloseClick}></div>
        </div>
    );
}

export default Modal;
