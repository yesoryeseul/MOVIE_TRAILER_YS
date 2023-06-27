import styled from "styled-components";
const Upcoming = () => {
	return (
		<S.Container>
			<S.Title>상영 예정작</S.Title>
		</S.Container>
	);
};

export default Upcoming;

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
