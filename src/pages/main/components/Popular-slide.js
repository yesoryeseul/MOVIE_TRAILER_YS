import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMovies } from "hooks/queries/use-query";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const NextArrow = ({ style, onClick }) => {
	return (
		<div
			style={{
				...style,
				width: "30px",
				height: "30px",
				display: "block",
				position: "absolute",
				zIndex: "1",
				marginTop: "-125px",
				marginLeft: "1050px",
			}}
			onClick={onClick}
		>
			next{" "}
		</div>
	);
};

const PrevArrow = ({ style, onClick }) => {
	return (
		<div
			style={{
				...style,
				width: "30px",
				height: "30px",
				display: "block",
				zIndex: "1",
				marginTop: "120px",
				marginLeft: "-30px",
			}}
			onClick={onClick}
		>
			prev
		</div>
	);
};

const Responsive = () => {
	let popularMovie;
	const getPopularMovie = useGetMovies.ListMovie("popular");

	if (!getPopularMovie.data) popularMovie = [];
	else {
		popularMovie = getPopularMovie.data.data.results;
	}
	console.log("popularMovie", popularMovie);
	const imgUrl = "https://image.tmdb.org/t/p/w200";
	const mock = [
		{ number: "1" },
		{ number: "2" },
		{ number: "3" },
		{ number: "4" },
		{ number: "5" },
		{ number: "6" },
		{ number: "7" },
		{ number: "8" },
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<Slider {...settings}>
			{/* {mock.map(num => (
				<div style={{ backgroundColor: "gray" }}>
					<h3
						style={{
							backgroundColor: "gray",
							width: "100%",
							height: "200px",
						}}
					>
						{num.number}
					</h3>
				</div>
			))} */}
			{popularMovie.map(movie => (
				<div>
					{movie.poster_path ? (
						<S.Img src={`${imgUrl}${movie.poster_path}`} />
					) : (
						<p>no image</p>
					)}
					<p style={{ width: "200px" }}>{movie.title}</p>
					<div>
						평점
						<span>
							<AiFillStar size={16} color={"rgb(252, 213, 63)"} />
							{(movie.vote_average / 2).toFixed(1)}
						</span>
					</div>
				</div>
			))}
		</Slider>
	);
};
export default Responsive;

const Img = styled.img`
	border-radius: 4px;
`;

const S = {
	Img,
};
