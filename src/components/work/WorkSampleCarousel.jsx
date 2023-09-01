import { Box, Card, Grid } from "@mui/material";

export default function WorkSampleCarousel() {
	return (
		<Grid
			sx={{ width: "full", borderWidth: 1, borderColor: "white" }}
			container
			spacing={2}
		>
			<Grid item xs={8}>
				<Card variant="outlined">
					<iframe
						src="https://www.youtube.com/embed/GUSx0xqoew0?si=pbj7bi_Jdp1iY4oc"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						style={{ height: "400px", width: "100%" }}
					></iframe>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card variant="outlined">1</Card>
			</Grid>
			<Grid item xs={4}>
				<Card variant="outlined">1</Card>
			</Grid>
			<Grid item xs={4}>
				<Card variant="outlined">1</Card>
			</Grid>
			<Grid item xs={4}>
				<Card variant="outlined">1</Card>
			</Grid>
			<Grid item xs={4}>
				<Card variant="outlined">1</Card>
			</Grid>
			<Grid item xs={8}>
				<Card variant="outlined">1</Card>
			</Grid>
		</Grid>
	);
}
