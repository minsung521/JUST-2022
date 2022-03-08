import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "assets/Image/card1.png";
import Img2 from "assets/Image/card2.png";
import Img3 from "assets/Image/card3.png";

const CardSetContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const CardSet = styled.div`
	display: flex;
	width: 1000px;
	height: 360px;
	border-radius: 40px;
	background-color: ${(props) => props.theme.textColor};
	overflow: hidden;
	margin: 30px 0;
	box-sizing: border-box;
`;

const Card = styled.img`
	background-color: aliceblue;
	width: 500px;
	height: 360px;
	z-index: 2;
	box-sizing: border-box;
`;

const CardCover = styled.div`
	background-color: ${(props) => props.theme.pointColor};
	width: 500px;
	height: 360px;
	z-index: 1;
	transform: translateX(-500px);
`;

const KeyWord = styled.strong`
	display: block;
	color: ${(props) => props.theme.pointColor};
	font-size: 12px;
`;
const Title = styled.strong`
	display: block;
	color: ${(props) => props.theme.bgColor};
	font-size: 28px;
	letter-spacing: -2px;
	margin-bottom: 8px;
`;
const Discription = styled.div`
	color: ${(props) => props.theme.bgColor};
	font-size: 16px;
	letter-spacing: -1px;
`;
const TextWrapper = styled.div`
	padding: 76px 0 0 56px;
	background-color: white;
	width: 500px;
	height: 360px;
`;
const Point = styled.span`
	color: ${(props) => props.theme.pointColor};
`;

const TitleText = styled.strong`
	color: ${(props) => props.theme.textColor};
	font-size: 40px;
	margin: 160px 0;
`;
const Content = [
	{
		keyword: ["#개발 ", "#기획 ", "#디자인 "],
		title: ["각 분야 선배들의", <br />, "전문화된 교육을 통해 성장합니다."],
		discription: [
			"저스트에서는 공통 교육시간, 팀별 교육시간을",
			<br />,
			"활용하여 기획, 디자인, 개발분야에 활동하고 있는",
			<br />,
			"선배들이 준비한 교육내용과 교육자료를 통해 전문지식과",
			<br />,
			"다양한 정보를 얻을 수 있습니다.",
		],
	},
	{
		keyword: ["#프로젝트 ", "#창업 "],
		title: ["자신의 아이디어로", <br />, "창업 할 수 있습니다."],
		discription: [
			"매일 머리 속에만 있었던 아이디어를 구체화 하여",
			<br />,
			"동아리 내에서 팀을 구성하며 창업경험이 있는 선배들이",
			<br />,
			"사업계획서 작성과 더불어 실제 창업을 도움 받으며",
			<br />,
			"이윤창출의 경험을 할 수 있습니다.",
		],
	},
	{
		keyword: ["#대회 ", "#협업 "],
		title: ["서로 협업하여", <br />, "대회에 참여합니다."],
		discription: [
			"기획, 디자인, 개발 3가지 분야의 학생들이 한 팀으로 ",
			<br />,
			"서로 협업하여 창업경진대회, 해커톤등 다양한 대회에",
			<br />,
			"참가할 수 있습니다. 대회 경험을 통해 서로 성장하는",
			<br />,
			"경험을 할 수 있습니다.",
		],
	},
];

const JustCards = () => {
	return (
		<section data-scroll-section>
			<CardSetContainer>
				<TitleText>
					<Point>저스트</Point>에서 어떤 경험을 할 수 있을까요?
				</TitleText>
				<CardSet>
					<Card src={Img1}></Card>
					<TextWrapper>
						<KeyWord>{Content[0].keyword}</KeyWord>
						<Title>{Content[0].title}</Title>
						<Discription>{Content[0].discription}</Discription>
					</TextWrapper>
				</CardSet>
				<CardSet>
					<TextWrapper>
						<KeyWord>{Content[1].keyword}</KeyWord>
						<Title>{Content[1].title}</Title>
						<Discription>{Content[1].discription}</Discription>
					</TextWrapper>
					<Card src={Img2}></Card>
				</CardSet>
				<CardSet>
					<Card src={Img3}></Card>
					<TextWrapper>
						<KeyWord>{Content[2].keyword}</KeyWord>
						<Title>{Content[2].title}</Title>
						<Discription>{Content[2].discription}</Discription>
					</TextWrapper>
				</CardSet>
				{/* <CardCover></CardCover> */}
			</CardSetContainer>
		</section>
	);
};

export default JustCards;
