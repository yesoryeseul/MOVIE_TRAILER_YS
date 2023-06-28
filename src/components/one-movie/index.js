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

// const Title = styled.p`
// 	font-size: 15px;
// 	word-break: keep-all;
// 	line-height: 1.2rem;
// 	font-weight: 500;
// 	width: 200px;
// 	color: #1c1d1f;
// 	margin-top: 6px;
// `;

const Img = styled.img`
	border-radius: 4px;
`;

// const VoteLine = styled.p`
// 	font-size: 13px;
// 	margin-top: 6px;
// 	${flexalignItemCenter}

// 	& svg {
// 		color: #fcd53f;
// 		margin-right: 2px;
// 	}
// `;

// const FlexWrapper = styled.div`
// 	display: flex;
// 	margin-bottom: 20px;
// `;

const S = {
	// Title,
	Img,
	// VoteLine,
	// FlexWrapper,
};
