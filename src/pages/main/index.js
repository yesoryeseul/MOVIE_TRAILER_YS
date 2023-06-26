import styled from "styled-components";
import Popular from "./components/Popular";

const Main = () => {
	return (
		<S.Container>
			<S.Title>홈</S.Title>
			{/* <CenterMode /> */}
			<Popular />
		</S.Container>
	);
};

export default Main;

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
