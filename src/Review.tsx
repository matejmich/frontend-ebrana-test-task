import heartFull from "./assets/heartFull.svg"

interface ReviewProps {
    review: {
        img: {
            url: string;
            alt: string;
        };
    };
}

function Review( {review}: ReviewProps) {

    return (
        <div className="user">
            <div className="user-top">
                <div className="user-top-right">
                    <img src={review.img.url} alt={review.img.alt} />
                </div>
            </div>
            <div className="user-bottom">

            </div>
        </div>
    )
}

export default Review