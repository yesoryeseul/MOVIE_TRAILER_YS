import styled from "styled-components";
import { TbMovie } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { flexAlignCenter } from "styles/common";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	const onNavigate = endpoint => {
		navigate(`/${endpoint}`);
	};
	return (
		<S.Container>
			<S.Nav>
				<S.Logo onClick={() => onNavigate("")}>What's Movie?</S.Logo>
				<section>
					<S.Ul>
						<li onClick={() => onNavigate("nowplaying")}>
							<TbMovie size={18} />
							Now Playing
						</li>
						<li onClick={() => onNavigate("upcoming")}>
							<RiMovie2Line size={18} />
							Upcoming
						</li>
						<li onClick={() => onNavigate("top-rated")}>
							<AiOutlineTrophy size={18} />
							Top Rank
						</li>
					</S.Ul>
				</section>
			</S.Nav>
		</S.Container>
	);
};
export default NavBar;

const Container = styled.div`
	width: 254px;
`;

const Nav = styled.nav`
	position: fixed;
	padding: 24px 16px 16px 16px;
	height: 100vh;
	background: #141517;
	border-right: 1px #1b1c1d solid;
`;

const Logo = styled.li`
	font-family: "Caprasimo", cursive;
	font-size: 28px;
	padding: 0 10px;
	color: #ff0558;
	cursor: pointer;
`;

const Ul = styled.ul`
	margin-top: 2rem;

	li {
		margin-bottom: 20px;
		background-color: #303133;
		border-radius: 4px;
		padding: 10px;
		font-weight: 500;
		cursor: pointer;
		${flexAlignCenter}

		& svg {
			margin-right: 6px;
		}
	}
`;

const S = { Container, Nav, Logo, Ul };
