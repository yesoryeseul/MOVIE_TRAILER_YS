import { BiBell } from "react-icons/bi";
import styled from "styled-components";
const Header = () => {
	return (
		<S.Container>
			<S.Headers>
				<BiBell size={30} />
				<S.Profile>Y</S.Profile>
			</S.Headers>
		</S.Container>
	);
};
export default Header;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 500;
	width: 100%;
	margin-left: 254px;
`;

const Headers = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	background-color: #141517;
	padding: 12px 40px;
`;

const Profile = styled.div`
	width: 30px;
	height: 30px;
	margin-left: 1rem;
	background-color: #fff;
	color: #ff0558;
	font-size: 24px;
	font-weight: 700;
	border-radius: 50%;
	text-align: center;
	line-height: 36px;
`;

const S = {
	Container,
	Headers,
	Profile,
};

{
	/* <p style={{ position: "fixed" }}>Header</p>; */
}
