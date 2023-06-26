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
			<Header />
			<S.MainFooter>
				<Outlet />
				<Footer />
			</S.MainFooter>
		</S.Container>
	);
};

export default Layout;

const Container = styled.div`
	display: flex;
`;
const MainFooter = styled.div`
	width: 75%;
	margin-top: 54px;
	${flexColumn}
`;

const S = {
	Container,
	MainFooter,
};
