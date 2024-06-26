import Image from "next/image";
import Link from "next/link";

import { SidebarProps } from "../../definitions/types";
import { Logo, SocialLinks } from "../../utils/helper";

const Sidebar = ({ classNm, handler }: SidebarProps) => {
	return (
		<div className={classNm}>
			<div className="container-fluid">
				<div className="sidebar-wrapper">
					<div className="sidebar-topbar">
						<Link href="/" className="sidebar-brand">
							<Image src={Logo} width="100" alt="Vault Payments solution" />
						</Link>

						<Link href="#!" className="btn-close" onClick={handler}>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
								<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
							</svg>
						</Link>
					</div>

					<nav aria-labelledby="Mobile Navigation">
						<ul className="sidebar-navlist">
							<li className="sidebar-item">
								<Link href="/" className="sidebar-link" onClick={handler}>
									Home
								</Link>
							</li>
							<li className="sidebar-item">
								<Link href="/about" className="sidebar-link" onClick={handler}>
									About Us
								</Link>
							</li>
							<li className="sidebar-item">
								<Link href="/solutions" className="sidebar-link" onClick={handler}>
									Solutions
								</Link>
							</li>
							<li className="sidebar-item">
								<Link href="/contact" className="sidebar-link" onClick={handler}>
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					<div className="sidebar-footer">
						<SocialLinks />
						<Link href="../contact" className="btn-primary" onClick={handler}>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
