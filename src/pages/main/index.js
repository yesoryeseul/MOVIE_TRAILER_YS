import styled from "styled-components";
import Popular from "./components/Popular";
import { useState } from "react";
import PopularSlide from "./components/Popular-slide";

const Main = () => {
	const [changeLanguage, setChangeLanguage] = useState("Ko-KR");

	const onChangeLanguage = e => {
		setChangeLanguage(e.target.value);
	};
	return (
		<S.Container>
			<Popular
				changeLanguage={changeLanguage}
				onChangeLanguage={onChangeLanguage}
			/>
			<PopularSlide />
		</S.Container>
	);
};

export default Main;

const Container = styled.div`
	padding: 80px 0 0 254px;
	width: 100%;
`;

const S = {
	Container,
};
