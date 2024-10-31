import { useState } from "react"
import Logo from "../assets/logo-navbar.png"

export const Navbar = () => {
	const [burgerClick, setBurgerClick] = useState(false)

	function handleBurger(){
		!burgerClick ? setBurgerClick(true) : setBurgerClick(false);
	}

  return(
		<header className="z-50 fixed w-full bg-white top-0 h-20 border-b-2 border-black">
			<div className="max-w-6xl h-full mx-auto flex justify-between items-center px-5 xl:px-0">
				<div className="h-full py-2">
					<img className="h-full brightness-0" src={Logo} alt="Logo" />
				</div>
				
				<nav className="relative group">
					<button onClick={handleBurger} className="lg:hidden w-8 h-8 flex flex-col justify-between">
						<div className="group-hover:translate-x-1 duration-300 w-full h-1 bg-black"></div>
						<div className="group-hover:-translate-x-1 duration-300 w-full h-1 bg-black"></div>
						<div className="group-hover:translate-x-1 duration-300 w-full h-1 bg-black"></div>
					</button>
					
					<ul className={burgerClick ? 'nav-menu flex' : 'nav-menu hidden lg:flex'}>
						<li className="tracking-wider font-semibold">
							<a href="#">
								Home
							</a>
						</li>
						<li className="tracking-wider font-semibold">
							<a href="#about">
								About
							</a>
						</li>
						<li className="tracking-wider font-semibold">
							<a href="#reviews">
								Reviews
							</a>
						</li>
						<li>
							<button className="btn-primary">
								Let's Talk
							</button>
						</li>
					</ul>
				</nav>	
			</div>
		</header>
	)
}

export const Wrapper = ({children, index}) => {
  return(
    <section className="mb-10" id={index}>
      {children}
    </section>
  )
}

export const Footer = () => {
  return(
		<footer className="w-full h-max bg-white h-20 border-t-2 border-black">
			<div className="max-w-6xl mx-auto px-5 pt-10 pb-20 xl:px-0 gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:justify-between items-center">	
				<div>
					<img className="h-full brightness-0" src={Logo} alt="Logo" />
				</div>
				
				<nav className="flex gap-10 flex-col md:flex-row text-center md:text-left">
					<ul>
						<li className="text-2xl tracking-wider font-semibold mb-3">Social Media</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Whatsapp</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Instagram</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Facebook</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Youtube</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Linkedin</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Tiktok</li>
					</ul>
					<ul>
						<li className="text-2xl tracking-wider font-semibold mb-3">Contacts</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Public Relation</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Sponsorship</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">Branding</li>
					</ul>
					<ul>
						<li className="text-2xl tracking-wider font-semibold mb-3">Links</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">
							<a href="#">
								Home
							</a>
						</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">
							<a href="#about">
								About
							</a>
						</li>
						<li className="text-lg tracking-widest cursor-pointer underline mb-1">
							<a href="#reviews">
								Review
							</a>
						s</li>
					</ul>
				</nav>
			</div>

			<div className="pb-5">
				<p className="text-center tracking-widest text-sm">
					Crafted with <span className="animate-pulse">❤</span> by Peri Nurjaman
				</p>
			</div>
		</footer>
	)
}