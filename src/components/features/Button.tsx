import Link from "next/link";
import { ButtonProps } from "../../definitions/types";

const Button = ({ target }: ButtonProps) => {
	return (
		<Link href={target} className="btn-primary">
			Get Started
		</Link>
	);
};

export default Button;
