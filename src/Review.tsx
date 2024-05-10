import heartFull from "./assets/heartFull.svg";
import heartEmpty from "./assets/heartEmpty.svg";
import { useEffect, useState } from "react";

interface ReviewProps {
    review: {
        img: {
            url: string;
            alt: string;
        };
        user: string;
        rating: number;
        comment: string;
        liked: boolean;
    };
    toggleHeart: () => void;
}

function Review({ review, toggleHeart }: ReviewProps) {
    const [hearted, setHearted] = useState<boolean>(review.liked);

    function handleHeartClick() {
        setHearted(!hearted);
        toggleHeart();
    }
    useEffect(() => {
        setHearted(review.liked)
    },[review])

    return (
        <div className="user">
            <div className="user-top">
                <div className="user-top-left">
                    <img className="user-image" src={review.img.url} alt={review.img.alt} />
                    <div className="user-text">{review.user}</div>
                </div>
                <div className="user-top-right">{review.rating} %</div>
            </div>
            <div className="user-bottom">
                <div className="user-text">{review.comment}</div>
                <div className="user-heart" onClick={handleHeartClick}>
                    {hearted ? <img className="heart" src={heartFull} alt="Full heart" /> : <img className="heart" src={heartEmpty} alt="Empty heart" />}
                </div>
            </div>
        </div>
    );
}

export default Review;
