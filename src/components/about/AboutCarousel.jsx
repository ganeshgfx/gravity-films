import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import Background from "../UI/Background";
import { Diversity1TwoTone } from "@mui/icons-material";
export default function AboutCarousel() {
	return (
		<Carousel
			axis="vertical"
			showThumbs={false}
			autoPlay={true}
			infiniteLoop={true}
		>
			<div
				className="card p-0 m-0"
				style={{ backgroundColor: "#0000", color: "white" }}
			>
				<Background />
				<div
					className="d-flex justify-content-center align-items-center flex-row flex-nowrap"
					style={{ height: "100%" }}
				>
					<div className="flex-fill text-start ps-5">
						<h1>Press Release & Magazines</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
							quidem facilis animi! Provident hic porro tempore repudiandae eum,
						</p>
						<NavLink to="/">
							<button type="button" class="btn btn-outline-light">
								Learn More
							</button>
						</NavLink>
					</div>
					<div className="m-5 card">
						<img src="https://picsum.photos/200/300" />
					</div>
				</div>
			</div>
			<div
				className="card p-0 m-0"
				style={{ backgroundColor: "#0000", color: "white" }}
			>
				<Background />
				<div
					className="d-flex justify-content-center align-items-center flex-row flex-nowrap"
					style={{ height: "100%" }}
				>
					<div className="flex-fill text-start ps-5">
						<h1>Press Release & Magazines</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
							quidem facilis animi! Provident hic porro tempore repudiandae eum,
						</p>
						<NavLink to="/">
							<button type="button" class="btn btn-outline-light">
								Learn More
							</button>
						</NavLink>
					</div>
					<div className="m-5 card">
						<img src="https://picsum.photos/200/300" />
					</div>
				</div>
			</div>
		</Carousel>
	);
}
