import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
// oneMovie
const OneMovie = ({ movie }) => {
	const { poster_path, title, vote_average } = movie;
	const imgUrl = "https://image.tmdb.org/t/p/w200";
	return (
		<div>
			{poster_path ? (
				<S.Img src={`${imgUrl}${poster_path}`} />
			) : (
				<p>no image</p>
			)}
			<p style={{ width: "200px" }}>{title}</p>
			<div>
				평점
				<span>
					<AiFillStar size={16} color={"rgb(252, 213, 63)"} />
					{(vote_average / 2).toFixed(1)}
				</span>
			</div>
		</div>
	);
};

export default OneMovie;

const Img = styled.img`
	border-radius: 4px;
`;

const S = {
	Img,
};
