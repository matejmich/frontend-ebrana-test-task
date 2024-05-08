import Review from "./Review"
import fullStarIMG from "./assets/fullStar.svg"
import halfStarIMG from "./assets/halfStar.svg"
import emptyStarIMG from "./assets/emptyStar.svg"
import faceOne from "./assets/faceOne.svg"
import faceTwo from "./assets/faceTwo.svg"
import faceThree from "./assets/faceThree.svg"
import faceFour from "./assets/faceFour.svg"
import faceFive from "./assets/faceFive.svg"
import { useEffect, useState } from "react";


function Sidebar( currentProduct: object ) {
    
    const [fullStar, setFullStar] = useState(0);
    const [halfStar, setHalfStar] = useState(0);
    const [emptyStar, setEmptyStar] = useState(0);
    const [ratingIMG, setRatingIMG] = useState();

    useEffect(() => {
        calculateStar()
        calculateIMG()
        console.log(currentProduct)
        console.log(currentProduct.product.rating)
    }, [currentProduct])

    function calculateStar() {
		const full = Math.floor(currentProduct.product.rating / 20);
        const half = Math.floor((currentProduct.product.rating - (full * 20)) / 10);
        const empty = 5 - full - half;
        
        setFullStar(full);
        setHalfStar(half);
        setEmptyStar(empty);
	}
    function calculateIMG() {
		if (currentProduct.product.rating >= 0 && currentProduct.product.rating < 20) {
            setRatingIMG(faceOne);
        } else if (currentProduct.product.rating >= 20 && currentProduct.product.rating < 40) {
            setRatingIMG(faceTwo);
        } else if (currentProduct.product.rating >= 40 && currentProduct.product.rating < 60) {
            setRatingIMG(faceThree);
        } else if (currentProduct.product.rating >= 60 && currentProduct.product.rating < 80) {
            setRatingIMG(faceFour);
        } else if (currentProduct.product.rating >= 80 && currentProduct.product.rating <= 100) {
            setRatingIMG(faceFive);
        }
	}

    return (
        <div id="sidebar">
            <div id="sidebar-window">   
                <div id="sidebar-avg-rating">
                    <img src={ratingIMG} alt="obličej" className="avg-rating-face"/>
                    <div id="header-rating-stars">
                            {[...Array(fullStar)].map((_, index) => (
                                <img key={index} className="avg-rating-star" src={fullStarIMG} alt="plná hvězda" />
                            ))}
                            {[...Array(halfStar)].map((_, index) => (
                                <img key={index} className="avg-rating-star" src={halfStarIMG} alt="půl hvězdy" />
                            ))}
                            {[...Array(emptyStar)].map((_, index) => (
                                <img key={index}className="avg-rating-star" src={emptyStarIMG} alt="prázdná hvězda" />
                            ))}
                    </div>
                </div>
                {currentProduct.product.reviews && currentProduct.product.reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar