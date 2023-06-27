import styled from "styled-components";
const TopRated = () => {
	return (
		<S.Container>
			<S.Title>영화 랭킹순</S.Title>
		</S.Container>
	);
};

export default TopRated;

const Container = styled.div`
	padding: 3rem 40px;
`;

const Title = styled.p`
	font-size: 24px;
	font-weight: bold;
`;

const S = {
	Container,
	Title,
};
