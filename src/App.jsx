import { Navbar, Footer } from "./components/layout"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Record } from "./components/record"
import { Reviews } from "./components/reviews"
import { Partner } from "./components/partner"

export default function App() {
	return(
		<>
			<Navbar/>
			<main className="max-w-6xl mx-auto px-5 xl:px-0">
				<Hero/>
				<About/>
				<Record/>
				<Reviews/>
				<Partner/>
			</main>
			<Footer/>
		</>
	)
}