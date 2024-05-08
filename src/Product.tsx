import { useEffect, useState } from "react";
import fullStarIMG from "./assets/fullStar.svg"
import halfStarIMG from "./assets/halfStar.svg"
import emptyStarIMG from "./assets/emptyStar.svg"

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
    handleSidebarOpen: (_: boolean) => void;
  }

function Product ({id, codeP, url, alt, name, rating, selected, handleProductSelect, handleModalOpen, handleSidebarOpen }: ProductProps) {

    const [fullStar, setFullStar] = useState(0);
    const [halfStar, setHalfStar] = useState(0);
    const [emptyStar, setEmptyStar] = useState(0);
    

    useEffect(() => {
        const full = Math.floor(rating / 20);
        const half = Math.floor((rating - (full * 20)) / 10);
        const empty = 5 - full - half;
        
        setFullStar(full);
        setHalfStar(half);
        setEmptyStar(empty);
    }, [rating]);

    function handleClick()  {
        handleProductSelect(id);
    }

    function handleModalOpenClick() {
        handleModalOpen(true)

    }
    function handleSidebarOpenClick() {
        handleSidebarOpen(true)
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
                
                    <img className="product-image" src={url} alt={alt} />
                    <div className="product-info">
                        <div className="product-info-top">
                            <div className="product-info-top-left">
                                <h3>{name}</h3>
                                <p>Kód produktu: {codeP}</p>
                            </div>
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
                {selected && (
                <div className="product-details">
                    
                </div>
                )}  
            </label>
            

    )
}

export default Product
