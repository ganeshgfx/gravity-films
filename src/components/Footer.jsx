import Logo from "./logo.svg";
export default function Footer() {
	return (
		<footer class="d-flex flex-wrap justify-content-between align-items-center pt-2 pb-2">
			<p class="col-md-4 mb-0">© 2023 Gravity Films, Inc</p>

			<a
				href="/"
				class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
			>
				<img
					src={Logo}
					alt="Gravity Films"
					style={{
						height: "38pt",
					}}
				/>
			</a>

			<ul class="nav col-md-4 justify-content-end">
				<li class="nav-item">
					<p>Pricing</p>
				</li>
				<li class="nav-item">
					<p class="px-2">FAQs</p>
				</li>
				<li class="nav-item">
					<p class="pe-2">About</p>
				</li>
			</ul>
		</footer>
	);
}
