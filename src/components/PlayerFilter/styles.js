import styled from 'styled-components';

export const FilterContainer = styled.div`
	width: 100%;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.background2};

	* {
		transition: all ease 0.2s;
	}
`;

export const FiltersList = styled.ul`
	height: 4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	gap: 5px;
`;

export const FilterElement = styled.li`
	width: 100%;
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 0.5rem 0.5rem 0 0;
	gap: 0.5rem;
	position: relative;
	z-index: 3;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	user-select: none;

	p {
		font-size: 2rem;
		color: ${({ theme }) => theme.text};
		text-transform: uppercase;
	}

	@media screen and (max-width: 767px) {
		p {
			font-size: 1.5rem;
		}
	}

	:hover {
		background-color: ${({ theme }) => theme.secondary};

		.filterElement {
			color: ${({ theme }) => theme.background};
		}

		* {
			opacity: 1;
			visibility: visible;
		}
	}
`;

export const DropdownOptions = styled.ul`
	opacity: 0;
	visibility: hidden;
	min-width: 100%;
	background-color: ${({ theme }) => theme.secondary}66;
	border-radius: 0 0 0.5rem 0.5em;
	padding: 0.5rem min(15%, 1rem);
	list-style-type: none;

	backdrop-filter: blur(1rem);
	border: 2px solid ${({ theme }) => theme.secondary}dd;
	filter: drop-shadow(0 1rem 0.5rem #000000aa);

	position: absolute;
	top: 100%;

	* {
		visibility: hidden;
	}
`;

export const Option = styled.li`
	height: 2rem;
	font-size: 0.9rem;
	white-space: nowrap;

	color: ${({ theme }) => theme.secondary};

	@media screen and (max-width: 767px) {
		font-size: 0.75rem;
	}

	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const CheckboxInput = styled.input.attrs({
	type: 'checkbox',
})`
	margin-right: 0.75rem;
	cursor: pointer;
	user-select: none;

	appearance: none;
	border: 2px solid ${({ theme }) => theme.secondary};
	width: 1rem;
	height: 1rem;
	border-radius: 0.2rem;

	position: relative;

	::before {
		position: absolute;
		content: '';
		width: 80%;
		height: 80%;
		left: 10%;
		top: 10%;
		background-color: transparent;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}

	:checked {
		::before {
			background-color: ${({ theme }) => theme.primary};
		}
	}
`;
