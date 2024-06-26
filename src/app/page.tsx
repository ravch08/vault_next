import { Banner, Billing, Counter, Testimonials, VirtualCards, WhyVault } from "@/utils/helper";

export default function Home() {
	return (
		<main>
			<Banner />
			<Counter />
			<WhyVault />
			<VirtualCards />
			<Billing />
			<Testimonials />
		</main>
	);
}
