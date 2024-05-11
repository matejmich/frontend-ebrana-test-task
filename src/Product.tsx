import { useEffect, useState } from "react";
import fullStarIMG from "./assets/fullStar.svg"
import halfStarIMG from "./assets/halfStar.svg"
import emptyStarIMG from "./assets/emptyStar.svg"
import editIMG from "./assets/edit.svg"
import deleteIMG from "./assets/delete.svg"
interface ProductProps {
    id: number
    codeP: number
    url: string
    alt: string
    name: string
    rating: number
    selected: boolean;
    handleProductSelect: (productId: number) => void;
    handleModalOpen: (_: boolean) => void;
    handleSidebarOpen: () => void;
    myReview?: {
        rating: number;
        comment: string;
    };
    handleDeleteMyReview: () => void
  }

function Product ({id, codeP, url, alt, name, rating, selected, handleProductSelect, handleModalOpen, handleSidebarOpen, myReview, handleDeleteMyReview }: ProductProps) {
    myReview = myReview || { rating: -100, comment: "" };
    const [fullStar, setFullStar] = useState(0);
    const [halfStar, setHalfStar] = useState(0);
    const [emptyStar, setEmptyStar] = useState(0);
    const [myFullStar, setMyFullStar] = useState(0);
    const [myHalfStar, setMyHalfStar] = useState(0);
    const [myEmptyStar, setMyEmptyStar] = useState(0);
    

    useEffect(() => {
        const full = Math.floor(rating / 20);
        const half = Math.floor((rating - (full * 20)) / 10);
        const empty = 5 - full - half;
        
        setFullStar(full);
        setHalfStar(half);
        setEmptyStar(empty);
    }, [rating]);
    useEffect(() => {
        if (myReview?.rating >= 0) {
        const full = Math.floor(myReview?.rating / 20);
        const half = Math.floor((myReview?.rating - (full * 20)) / 10);
        const empty = 5 - full - half;
        
        setMyFullStar(full);
        setMyHalfStar(half);
        setMyEmptyStar(empty);
        }
    }, [myReview.rating]);

    function handleClick()  {
        handleProductSelect(id);
    }

    function handleModalOpenClick() {
        handleModalOpen(true)

    }
    function handleSidebarOpenClick() {
        handleSidebarOpen()
    }
    function handleDeleteMyReviewClick() {
        handleDeleteMyReview()
    }
    
    

    return (
        
            <label className="product">
                <input
                    type="radio"
                    value={id}
                    checked={selected}
                    onChange={handleClick}
                />
                
                <div className="product-wrapper">
                    <div className="product-others">
                        <img className="product-image" src={url} alt={alt} />
                        <div className="product-info">
                            <div className="product-info-top">
                                <div className="product-info-top-left">
                                    <h3>{name}</h3>
                                    <p>Kód produktu: {codeP}</p>
                                </div>
                                {rating !== undefined &&
                                    <div className="product-info-top-right">
                                        {[...Array(fullStar)].map((_, index) => (
                                            <img key={index} src={fullStarIMG} alt="Full Star" />
                                        ))}
                                        {[...Array(halfStar)].map((_, index) => (
                                            <img key={index} src={halfStarIMG} alt="Half Star" />
                                        ))}
                                        {[...Array(emptyStar)].map((_, index) => (
                                            <img key={index} src={emptyStarIMG} alt="Empty Star" />
                                        ))}
                                        <b>{rating} %</b>
                                    </div>
                                }

                            </div>
                            <div className="product-info-down">
                                <button className="defaultBTN" onClick={() => { 
                                                                                handleClick()
                                                                                handleModalOpenClick()
                                                                                }}>Ohodnotit</button>
                                <button className="defaultBTN" onClick={() => { 
                                                                                handleClick()
                                                                                handleSidebarOpenClick()
                                                                                }}>Zobrazit recenze</button>

                            </div>
                            
                        </div>
                    </div>
                            {selected && ((myReview.rating !== undefined && myReview.rating >= 0) || (myReview.comment !== undefined) && myReview.comment !== "") &&  (
                            <div className="product-details">
                                <div className="myRating-header">Moje hodnocení</div>
                                <div className="myRating-comment">{myReview.comment}</div>
                                <div className="myRating-bottom">
                                    <div className="myRating-rating">
                                        {[...Array(myFullStar)].map((_, index) => (
                                            <img key={index} src={fullStarIMG} alt="Full Star" />
                                        ))}
                                        {[...Array(myHalfStar)].map((_, index) => (
                                            <img key={index} src={halfStarIMG} alt="Half Star" />
                                        ))}
                                        {[...Array(myEmptyStar)].map((_, index) => (
                                            <img key={index} src={emptyStarIMG} alt="Empty Star" />
                                        ))}
                                        <b>{myReview.rating} %</b>
                                    </div>
                                    <div className="myRating-buttons">
                                        <img title="Upravit hodnocení" onClick={handleModalOpenClick} src={editIMG} className="myRating-button" alt="edit button" />
                                        <img title="Odebrat hodnocení" onClick={handleDeleteMyReviewClick} src={deleteIMG} className="myRating-button" alt="delete button" />
                                    </div>
                                </div>
                            </div>
                            )}  
                </div>
                
            </label>
            

    )
}

export default Product
