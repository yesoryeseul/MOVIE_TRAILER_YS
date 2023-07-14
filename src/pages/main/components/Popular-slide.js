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
				top: "116px",
				right: "0",
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
				position: "absolute",
				zIndex: "1",
				top: "116px",
			}}
			onClick={onClick}
		>
			prev
		</div>
	);
};

const PopularSlide = () => {
	let upcomingMovie;
	const getUpcomingMovie = useGetMovies.ListMovie("upcoming");

	if (!getUpcomingMovie.data) upcomingMovie = [];
	else {
		upcomingMovie = getUpcomingMovie.data.data.results;
	}
	console.log("upcomingMovie", upcomingMovie);
	const imgUrl = "https://image.tmdb.org/t/p/w200";

	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 5,
		slidesToScroll: 3,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<S.SlideContainer>
			<h3>상영 기대작 Top 20</h3>
			<Sliders {...settings}>
				{upcomingMovie.map(movie => (
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
			</Sliders>
		</S.SlideContainer>
	);
};
export default PopularSlide;

const SlideContainer = styled.div`
	width: 1080px;
	margin: 0 auto;
	margin-top: 100px;
`;
const Sliders = styled(Slider)`
	margin-top: 20px;
`;

const Img = styled.img`
	border-radius: 4px;
`;

const S = {
	SlideContainer,
	Sliders,
	Img,
};
