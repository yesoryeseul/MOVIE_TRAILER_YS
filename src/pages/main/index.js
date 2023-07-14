import styled from "styled-components";
import Popular from "./components/Popular";
import Responsive from "./components/Popular-slide";
import { useState } from "react";

const Main = () => {
	const [changeLanguage, setChangeLanguage] = useState("Ko-KR");

	const onChangeLanguage = e => {
		setChangeLanguage(e.target.value);
	};
	return (
		<S.Container>
			{/* 슬라이드 배너 돌리기 */}
			<Popular
				changeLanguage={changeLanguage}
				onChangeLanguage={onChangeLanguage}
			/>
			<Responsive />
		</S.Container>
	);
};

export default Main;

const Container = styled.div`
	margin: 80px 0 0 120px;
	width: 100%;
	/* padding: 3rem 40px; */
`;

const S = {
	Container,
};
