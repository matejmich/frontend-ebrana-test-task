import "./App.scss";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Product from "./Product";
import Sidebar from "./Sidebar";
import fullStarIMG from "./assets/fullStar.svg"
import halfStarIMG from "./assets/halfStar.svg"
import emptyStarIMG from "./assets/emptyStar.svg"
import faceOne from "./assets/faceOne.svg"
import faceTwo from "./assets/faceTwo.svg"
import faceThree from "./assets/faceThree.svg"
import faceFour from "./assets/faceFour.svg"
import faceFive from "./assets/faceFive.svg"


interface Product {
    id: string;
    code: number;
    img: {
        url: string;
        alt: string;
    };
    name: string;
    rating: number;
	myReview: Array<{
		rating: number;
		comment: string;
	}>
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
}



function App() {

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSidebarOpen, setIsSideBarOpen] = useState(false)
	const [data, setData] = useState<Product[]>([])
    const [selectedProductID, setSelectedProductID] = useState<number>(0);
	const [currentProduct, setCurrentProduct] = useState()
    const [displayedProducts, setDisplayedProducts] = useState(4);
    const [avgRating, setAvgRating] = useState(50);
	const [fullStar, setFullStar] = useState(0);
    const [halfStar, setHalfStar] = useState(0);
    const [emptyStar, setEmptyStar] = useState(0);
    const [ratingIMG, setRatingIMG] = useState(faceOne);

	

	

	// data loading
	useEffect(() => {
		// http://localhost:3000/products
		async function fetchData() {
			try {
				const response = await fetch("http://localhost:3000/products")
				const jsonData = await response.json()
				console.log(jsonData)
				setData(jsonData)
			} catch (error) {
				console.error("Error fetchování dat", error)
				
			}
			
		}
		fetchData()


	},[])

	useEffect(() => {
		// Select the first product only when data is initially fetched
		if (selectedProductID === 0 && data.length > 0) {
			setCurrentProduct(data[0]);
		}
	}, [data, selectedProductID]);
	// když se změní currentProduct
	useEffect(() => {
		filterCurrentProduct()
	}, [selectedProductID])
	
	// kalkulace avg ratingu
	useEffect(() => {
		let numberOfRatedItems: number = 0;
		const totalRating: number = data.reduce((total, currentItem) => {
			if (currentItem.myReview && currentItem.myReview.rating) {
				numberOfRatedItems++;
				return total + currentItem.myReview.rating;
			} else {
				return total;
			}
		}, 0);
		
		if (numberOfRatedItems > 0) {
			setAvgRating(totalRating / numberOfRatedItems);
		} else {
			// Handle case when there are no rated items
			setAvgRating(0);
		}
	}, [data]);
	// když se změní avgRating
	useEffect(() => {
		calculateStar()
		calculateIMG()
    }, [avgRating]);

	// console.log(data)
	function filterCurrentProduct() {
		const product = data.find(item => item.id ===selectedProductID)
		setCurrentProduct(product)

	}

	function calculateIMG() {
		if (avgRating >= 0 && avgRating < 20) {
            setRatingIMG(faceOne);
        } else if (avgRating >= 20 && avgRating < 40) {
            setRatingIMG(faceTwo);
        } else if (avgRating >= 40 && avgRating < 60) {
            setRatingIMG(faceThree);
        } else if (avgRating >= 60 && avgRating < 80) {
            setRatingIMG(faceFour);
        } else if (avgRating >= 80 && avgRating <= 100) {
            setRatingIMG(faceFive);
        }
	}

	function calculateStar() {
		const full = Math.floor(avgRating / 20);
        const half = Math.floor((avgRating - (full * 20)) / 10);
        const empty = 5 - full - half;
        
		console.log('Full:', full);
		console.log('Half:', half);
		console.log('Empty:', empty);

        setFullStar(full);
        setHalfStar(half);
        setEmptyStar(empty);
	}

	function handleProductSelect (productId: number) {
        setSelectedProductID(productId);
    };

	function handleModalOpen() {
		setIsModalOpen(true)
	}
	function handleModalClose() {
		setIsModalOpen(false)
	}
	function loadMore() {
		setDisplayedProducts(p => p + 2)
	}
	function handleSidebarOpen() {
		setIsSideBarOpen(true)
	}
	function handleSidebarClose () {

		setIsSideBarOpen(false)
	}
	function toggleHeart(productId: number, reviewIndex: number) {
		const updatedData = [...data];
		const productIndex = updatedData.findIndex(product => product.id === productId);
		if (productIndex !== -1) {
			const review = updatedData[productIndex].reviews[reviewIndex];
			if (review) {
				updatedData[productIndex].reviews[reviewIndex] = { ...review, liked: !review.liked };
				setData(updatedData);
			}
		}
	}

	return (
		<>
			<div id="wrapper">
				<header>
					<div id="header-top">
						<div id="header-description">
							<h2>Hodnocení zakoupených produktů</h2>
							<div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
							<button className="defaultBTN">Odeslat moje hodnocení</button>
							{/* TODO: func */}
						</div>
						<div id="header-rating">
							{/* FIXME: reaguje na průměrný rating */}
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
							<p>Moje celková spokojenost: <b>{avgRating} %</b></p>

						</div>
					</div>
				</header>
				<main>
					<div id="main-sorting">
						<p>Seřadit: </p>
						<button className="defaultBTN">Od nejlépe hodnocených</button>
						<button className="defaultBTN">Od nejhůře hodnocených</button>
					</div>
					<div id="product-holder">
					{data.slice(0, displayedProducts).map((item) => (


						<Product
						key={item.id}
						id={item.id}
						codeP={item.code}
						url={item.img.url}
						alt={item.img.alt}
						name={item.name}
						rating={item.rating}
						selected={selectedProductID === item.id}
                        handleProductSelect={handleProductSelect}
						handleModalOpen={handleModalOpen}
						handleSidebarOpen={handleSidebarOpen}
						myReview={item.myReview}
						/>
					))}
					</div>
					{(displayedProducts >= data.length) ? null :
					<button className="defaultBTN" id="loadMore" onClick={loadMore}>Načíst další</button>
					}
				</main>
			</div>
			{/* popup */}
			{isModalOpen ? <Modal
								handleModalClose={handleModalClose}
								/> : null}
			{/* sidebar */}
			{isSidebarOpen ? <Sidebar 
								currentProduct={currentProduct} 
								handleSidebarClose={handleSidebarClose}
								toggleHeart={toggleHeart}
								/> : null}
			
		</>
	);
}

export default App;
