import { useState } from "react";
interface ProductProps {
    id: number
    codeP: number
    url: string
    alt: string
    name: string
    rating: number
    selected: boolean;
    handleProductSelect: (productId: number) => void;
  }

function Product ({id, codeP, url, alt, name, rating, selected, handleProductSelect }: ProductProps) {



    const handleClick = () => {
        handleProductSelect(id);
    };

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
                                <b>{rating} %</b>
                            </div>

                        </div>
                        <div className="product-info-down">
                            <button className="defaultBTN">Ohodnotit</button>
                            <button className="defaultBTN">Zobrazit recenze</button>

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
