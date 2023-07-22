export default function Background() {
	return (
		<div
			className="card border border-1 gradient p-0 m-0"
			style={{
				opacity: "10%",
				position: "absolute",
				width: "100%",
				height: "100%",
				zIndex: -1,
				backgroundColor: "#0000",
			}}
		></div>
	);
}
