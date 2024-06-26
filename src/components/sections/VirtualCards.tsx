import Image from "next/image";

import { Button, VirtualCard1, VirtualCard2, VirtualCard3 } from "../../utils/helper";

const VirtualCards = () => {
	return (
		<section className="virtual-cards" aria-labelledby="Virtual Cards With Built-In Rules">
			<div className="container">
				<div className="virtual-card-wrapper">
					<div className="virtual-card-content">
						<h2>Let Players Use Virtual Cards With Built-In Rules.</h2>
						<p>
							Encourage foster purchasing by allowing each employee to buy personal items through a
							company-issued credit card in an efficient, secure manner.
						</p>
						<Button target="../contact" />
					</div>

					<div className="virtual-card-images">
						<Image
							src={VirtualCard1}
							className="virtual-img-1"
							alt="payment-solutions-spending-breakdown-card"
						/>

						<div className="virtual-img">
							<Image
								src={VirtualCard2}
								className="virtual-img-2"
								alt="payment-solutions-balance-money-card"
							/>

							<Image
								src={VirtualCard3}
								className="virtual-img-3"
								alt="payment-solutions-received-money-card"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VirtualCards;
