"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Logo, Navbar, Sidebar } from "../../utils/helper";

const Header = () => {
	const [sticky, setSticky] = useState("");
	const [showSidebar, setShowSidebar] = useState(false);

	const sidebarHandler = () => setShowSidebar(!showSidebar);

	const isSticky = () => {
		const scrollTop = window.scrollY;
		const stickyClass = scrollTop >= 100 ? "is-Sticky" : "";
		setSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => window.removeEventListener("scroll", isSticky);
	}, []);

	let stickyTop = `${sticky}`;

	return (
		<header className={stickyTop}>
			<div className="container-fluid">
				<div className="header-wrapper">
					<Link href="/" className="nav-brand">
						<Image src={Logo} width="90" alt="Vault Payments solution" />
					</Link>

					<Navbar sidebarHandler={sidebarHandler} />

					<Sidebar
						classNm={showSidebar ? "sidebar-menu openSidebar" : "sidebar-menu"}
						handler={sidebarHandler}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
