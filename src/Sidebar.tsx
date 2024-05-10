import React, { useEffect, useState } from "react";
import Review from "./Review";
import fullStarIMG from "./assets/fullStar.svg";
import halfStarIMG from "./assets/halfStar.svg";
import emptyStarIMG from "./assets/emptyStar.svg";
import faceOne from "./assets/faceOne.svg";
import faceTwo from "./assets/faceTwo.svg";
import faceThree from "./assets/faceThree.svg";
import faceFour from "./assets/faceFour.svg";
import faceFive from "./assets/faceFive.svg";

// Define interface for Sidebar props
interface SidebarProps {
  currentProduct: {
    id: string;
    code: number;
    img: {
      url: string;
      alt: string;
    };
    name: string;
    rating: number;
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
  handleSidebarClose: (index: number) => void;
  toggleHeart: () => void;

}


function Sidebar({ currentProduct, handleSidebarClose, toggleHeart }: SidebarProps) {
  const [fullStar, setFullStar] = useState(0);
  const [halfStar, setHalfStar] = useState(0);
  const [emptyStar, setEmptyStar] = useState(0);
  const [ratingIMG, setRatingIMG] = useState();


  useEffect(() => {
    calculateStar();
    calculateIMG();
  }, [currentProduct]);

  // Calculate star ratings
  function calculateStar() {
    const full = Math.floor(currentProduct.rating / 20);
    const half = Math.floor((currentProduct.rating - full * 20) / 10);
    const empty = 5 - full - half;

    setFullStar(full);
    setHalfStar(half);
    setEmptyStar(empty);
  }

  // Calculate rating image
  function calculateIMG() {
    if (currentProduct.rating >= 0 && currentProduct.rating < 20) {
      setRatingIMG(faceOne);
    } else if (currentProduct.rating >= 20 && currentProduct.rating < 40) {
      setRatingIMG(faceTwo);
    } else if (currentProduct.rating >= 40 && currentProduct.rating < 60) {
      setRatingIMG(faceThree);
    } else if (currentProduct.rating >= 60 && currentProduct.rating < 80) {
      setRatingIMG(faceFour);
    } else if (currentProduct.rating >= 80 && currentProduct.rating <= 100) {
      setRatingIMG(faceFive);
    }
  }


  function handleSidebarCloseClick() {
    handleSidebarClose();
  }
  


  return (
    <div id="sidebar">
      <div id="sidebar-window">
        <div id="sidebar-h">Hodnocení uživatelů</div>
        <div id="sidebar-avg-rating">
          <img src={ratingIMG} alt="obličej" className="avg-rating-face" />

          <div id="header-rating-stars">
            {[...Array(fullStar)].map((_, index) => (
              <img key={index} className="avg-rating-star" src={fullStarIMG} alt="plná hvězda" />
            ))}
            {[...Array(halfStar)].map((_, index) => (
              <img key={index} className="avg-rating-star" src={halfStarIMG} alt="půl hvězdy" />
            ))}
            {[...Array(emptyStar)].map((_, index) => (
              <img key={index} className="avg-rating-star" src={emptyStarIMG} alt="prázdná hvězda" />
            ))}
          </div>
        </div>
        {currentProduct.reviews &&
            currentProduct.reviews.map((review, index) => (
                <Review key={index} review={review} toggleHeart={() => toggleHeart(currentProduct.id, index)} />
            ))
        }
      </div>
      <div id="sidebar-escape" onClick={handleSidebarCloseClick}></div>
    </div>
  );
}

// Export Sidebar component
export default Sidebar;
