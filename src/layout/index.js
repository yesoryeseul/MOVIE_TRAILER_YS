import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const Layout = () => {
	return (
		<S.Container>
			<NavBar />
			<S.OutletWrapper>
				<Header />
				<Outlet />
				<Footer />
			</S.OutletWrapper>
		</S.Container>
	);
};

export default Layout;

const Container = styled.div`
	/* display: flex;
	justify-content: space-between; */
`;
const MainFooter = styled.div`
	/* width: 75%;
	margin-top: 54px;
	${flexColumn} */
`;

const OutletWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const S = {
	Container,
	MainFooter,
	OutletWrapper,
};
