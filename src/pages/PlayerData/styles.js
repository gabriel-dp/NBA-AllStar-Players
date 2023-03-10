import styled from 'styled-components';

export const Screen = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	background-color: ${({ theme }) => theme.light};

	display: flex;
	justify-content: center;
	align-items: flex-end;

	* {
		transition: all ease 0.2s;
	}
`;

export const PlayerDataContainer = styled.div`
	width: min(100%, 80rem);
	height: min(50rem, 40rem);
	min-height: 40rem;
	padding: 0 2rem;

	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(0, 2.5fr) minmax(0, 1fr);
	grid-template-rows: minmax(0, 1fr);
	align-items: end;

	* {
		user-select: none;
	}

	@media screen and (max-width: 1023px) {
		height: auto;
		display: flex;
		flex-direction: column;
	}
`;

export const FirstSummary = styled.div`
	width: 100%;
	height: 100%;
	text-align: right;
	padding: 3rem 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	* {
		color: ${(props) => props.colors.primary};
	}

	@media screen and (max-width: 1023px) {
		height: auto;
		.name {
			text-align: center;
		}

		.details {
			justify-content: center;
		}
	}
`;

export const NameContainer = styled.div`
	text-transform: uppercase;
	font-family: 'NBA';
	overflow-wrap: break-word;

	display: flex;
	flex-direction: column;

	* {
		:hover {
			letter-spacing: 0.25rem;
		}
	}

	.first {
		font-size: 4rem;
	}

	.last {
		font-size: 5rem;
	}
`;

export const DetailsContainer = styled.div`
	font-size: 1rem;
	font-weight: bold;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;

	:hover {
		letter-spacing: 0.1rem;
	}
`;

export const MidSummary = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	padding: 0 1rem;

	display: flex;
	flex-direction: column-reverse;
	align-items: center;

	@media screen and (max-width: 1023px) {
		height: auto;
	}
`;

export const TeamLogoContainer = styled.div`
	width: 100%;
	height: min(100%, 25rem);
	z-index: 0;
	filter: blur(1px);

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	img {
		height: 100%;
		width: 100%;
		opacity: 0.15;
		object-fit: contain;
	}

	@media screen and (max-width: 1023px) {
		height: min(100%, 30rem);
	}
`;

export const NumberContainer = styled.div`
	font-size: 5rem;
	color: ${(props) => props.colors.primary};
	-webkit-text-stroke: 1px ${({ theme }) => theme.light};

	position: absolute;
	left: 2rem;
	bottom: 50%;

	@media screen and (max-width: 1023px) {
		left: auto;
		bottom: 15rem;
		right: 10%;
	}

	:hover {
		letter-spacing: 0.25rem;
	}
`;

export const PlayerImageContainer = styled.div`
	height: min(100%, 35rem);
	width: 100%;
	filter: drop-shadow(0 0.5rem 1rem #00000077);

	display: flex;
	align-items: flex-end;

	img {
		max-height: 100%;
		width: 100%;
		object-fit: contain;
		vertical-align: bottom;
		transition: none;
	}

	@media screen and (max-width: 1023px) {
		height: auto;
		max-height: 25rem;
		transform: translate(0, 0.5rem); //hide image bottom corners

		img {
			max-height: 25rem;
		}
	}
`;

export const StatsContainer = styled.div`
	width: min(100%, 25rem);
	height: 6rem;
	margin-bottom: 1rem;
	z-index: 2;

	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);

	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-evenly;
	gap: 0.75rem;

	div {
		color: ${(props) => props.colors.primary};
		background-color: ${(props) => props.colors.secondary};
		border: 1px solid ${(props) => props.colors.primary};

		&.mainStat {
			background-color: ${(props) => props.colors.primary};
			border: 1px solid ${(props) => props.colors.secondary};
			color: ${(props) => props.colors.secondary};
		}

		:hover {
			filter: drop-shadow(0 0 0.5rem ${(props) => props.colors.secondary}aa);
		}
	}

	@media screen and (max-width: 1023px) {
		margin-bottom: 0;
	}
`;

export const SingleStatContainer = styled.div`
	height: min(20vw, 90%);
	width: min(20vw, 100%);

	border-radius: 0.75rem;
	font-weight: bold;
	font-size: 0.8rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	.number {
		font-size: 2.5rem;
		font-weight: normal;
	}

	:hover {
		span {
			letter-spacing: 0.15rem;
		}
	}

	&.mainStat {
		height: min(25vw, 100%);
		width: min(25vw, 90%);
		aspect-ratio: 1.5;

		.number {
			font-size: 3.5rem;
		}
	}

	@media screen and (max-width: 767px) {
		.number {
			font-size: 2rem;
		}

		&.mainStat {
			.number {
				font-size: 3rem;
			}
		}
	}
`;

export const EndSummary = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	padding: 1rem;

	.summary {
		background-color: ${(props) => props.colors.primary};
	}

	* {
		color: ${(props) => props.colors.secondary};
		border-color: ${(props) => props.colors.secondary};
		border-radius: 5px;
	}

	@media screen and (max-width: 1023px) {
		padding-top: 0;

		div {
			align-items: center;
			text-align: center;
		}
	}
`;

export const PlayerProfileContainer = styled.div`
	width: 100%;
	padding: 2rem;
	border-radius: 0.5rem;
	z-index: 2;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

export const PersonalDataItem = styled.div`
	width: 100%;
	font-size: 1rem;

	p {
		font-size: 2rem;
		text-transform: uppercase;
		margin-bottom: 0.25rem;
	}

	hr {
		margin-top: 0.75rem;
	}

	:hover {
		letter-spacing: 0.15rem;
	}
`;

export const SignatureContainer = styled.div`
	height: 3rem;
	margin-top: 0.5rem;
	filter: opacity(50%) drop-shadow(0 0 1px ${(props) => props.colors.secondary})
		drop-shadow(0 0 0 ${(props) => props.colors.secondary})
		drop-shadow(0 0 0 ${(props) => props.colors.secondary})
		drop-shadow(0 0 0 ${(props) => props.colors.secondary});

	display: flex;
	justify-content: center;

	img {
		max-height: 100%;
		max-width: 100%;
		object-fit: contain;
	}

	:hover {
		filter: opacity(50%) drop-shadow(0 0 1px ${(props) => props.colors.secondary})
			drop-shadow(0 0 0 ${(props) => props.colors.secondary})
			drop-shadow(0 0 0 ${(props) => props.colors.secondary})
			drop-shadow(0 0 0.2rem ${(props) => props.colors.secondary});
	}
`;
