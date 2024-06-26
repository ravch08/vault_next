"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { Button } from "../../utils/helper";

const navlinks = [
	{
		id: 1,
		name: "Home",
		route: "/",
	},
	{
		id: 2,
		name: "About Us",
		route: "/about",
	},
	{
		id: 3,
		name: "Solutions",
		route: "/solutions",
	},
	{
		id: 4,
		name: "Contact",
		route: "/contact",
	},
];

const Navbar = ({ sidebarHandler }: { sidebarHandler: () => void }) => {
	const path = usePathname();

	return (
		<>
			<nav aria-labelledby="Primary Navigation" className="navbar">
				<ul className="nav-list">
					{navlinks?.map((link) => (
						<li className="nav-item" key={link.id}>
							<Link
								href={link.route}
								className={path === link.route ? "nav-link active" : "nav-link"}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<Button target="contact" />
			</nav>

			<div className="hamburger-menu" onClick={sidebarHandler}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</>
	);
};

export default Navbar;
