import Image from "next/image";
import Link from "next/link";

import { Button, Logo, ScrollToTop, SocialLinks } from "../../utils/helper";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-wrapper">
					<div className="heading-flex ">
						<div className="footer-heading">
							<h2>Try our service now!</h2>
							<p>
								Eyerything you need to accept cord payments and grow your business anywhere on the
								planet.
							</p>
						</div>
						<Button target="contact" />
					</div>

					<div className="footer-items">
						<div className="footer-list">
							<Link href="/" className="ftr-brand">
								<Image src={Logo} width="100" alt="logo" />
							</Link>

							<SocialLinks />

							<p>
								© <Link href="/">Vault</Link> | Payment Solutions 2023. All Rights Reserved.{" "}
							</p>
						</div>

						<div className="footer-list">
							<h3>Products</h3>
							<a href="#">Banking</a>
							<a href="#">Billing</a>
							<a href="#">Accounts</a>
							<a href="#">Payments</a>
						</div>

						<div className="footer-list">
							<h3>Features</h3>
							<a href="#">Banking</a>
							<a href="#">Billing</a>
							<a href="#">Accounts</a>
							<a href="#">Payments</a>
						</div>

						<div className="footer-list">
							<h3>Support</h3>
							<a href="#">Contact Us</a>
							<a href="#">Accessibility</a>
							<a href="#">Support</a>
							<a href="#">Customer Service</a>
						</div>
					</div>
				</div>
			</div>

			<ScrollToTop />
		</footer>
	);
};

export default Footer;
