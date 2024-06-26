import Image from "next/image";
import { FeatureProps } from "../sections/Features";

const FeatureItem = ({ imgSrc, title, description }: FeatureProps) => {
	return (
		<div className="feature-item">
			<Image src={imgSrc} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default FeatureItem;
