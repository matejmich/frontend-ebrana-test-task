import "./App.scss";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function App() {

	const [isModalOpen, setIsModalOpen] = useState(true)
	const [data, setData] = useState()

	useEffect(() => {
		// http://localhost:3000/products
		async function fetchData() {
			try {
				const response = await fetch("http://localhost:3000/products")
				const jsonData = await response.json()
				setData(jsonData)
			} catch (error) {
				console.error("Error fetchování dat", error)
				
			}
			
		}
		fetchData()

	},[])


	return (
		<>
			<div id="wrapper">
				<header>
					<div id="header-description">
						<h2>Hodnocení zakoupených produktů</h2>
						<div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
						<button className="defaultBTN">Odeslat moje hodnocení</button>
						{/* TODO: func */}
					</div>
					<div id="header-rating">
						{/* FIXME: reaguje na průměrný rating */}
						{/* <img src="" alt="" /> */}
						<div id="header-rating-stars">
							{/* TODO: přidat hvězdy */}
						</div>
						<p>Moje celková spokojenost: <span>{} %</span></p>
					</div>
				</header>
				<main>
					<div id="main-sorting">
						<p>Seřadit: </p>
						<button className="defaultBTN">Od nejlépe hodnocených</button>
						<button className="defaultBTN">Od nejhůře hodnocených</button>
					</div>
					<div id="main-products">
						{/* FIXME: mock */}
						<div className=""></div>
					</div>
				</main>
			</div>
			{/* // template */}
			{isModalOpen ? <Modal /> : null}

			<section>
				aaa
				<button className="defaultBTN">Button</button>
				<button className="activeBTN">Button</button>
				<button className="disabledBTN">Button</button>
			</section>
		</>
	);
}

export default App;
