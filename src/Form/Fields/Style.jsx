import styled from 'styled-components';

const Style = styled.div`
	position: relative;
	width: 313px;
	max-width: 100%;
	${(props) => props.fill && `width:100%;`}
	${(props) => props.width && `width:${props.width};`}

  & ~ & {
		margin-top: 10px;
		${(props) => props.noSpacing === true && `margin-top:0;`}
	}

	// Inputs ( Fields )
	input,
	textarea,
	select {
		padding: 15px;
		border: solid 1px ${({theme}) => theme.colors[5]}30;
		background-color: ${({theme}) => theme.colors[4]};
		outline: none;
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		font-size: ${({theme}) => theme.sizes.p};
		font-family: ${({theme})=>theme.fonts[0]};
		transition: 0.3s ease-in-out;

		&:focus {
			outline: none;
		}

		// Hide The Placeholder
		::placeholder {
			color: transparent;
		}

		// Autofill
		&:-webkit-autofill {
			font-size: ${({theme}) => theme.sizes.p};
		}

		// Disabled
		&[disabled] {
			border-color: ${({theme}) => theme.colors[4]};

			// Field Label
			~ label {
				color: ${({theme}) => theme.colors[4]};
			}

			// Make Placeholder Color Gray
			&::placeholder {
				color: ${({theme}) => theme.colors[4]};
			}
		}
	}

	// Only Input & Textareas
	input,
	textarea {
		& ~ label {
			will-change: transform, color, bottom, top, height, bottom;
			pointer-events: none;
			position: absolute;
			left: 15px;
			color: ${({theme}) => theme.colors[5]}a3;
			height: ${({theme}) => theme.sizes.headers[2].replace('px', '') + 11}px;
			margin: auto;
			transition: ease-in-out 0.3s, color ease 0.2s;

			// Text Container
			h4 {
				transition: inherit;
			}
		}

		&:focus,
		&:not(:placeholder-shown) {
			border-color: ${({theme}) => theme.colors[5]}8a;

			& ~ label {
				color: ${({theme}) => theme.colors[5]};
				bottom: calc(100% - 21px);
				left: 7px;
				height: ${(({theme}) => theme.sizes.headers[3].replace('px', '') + 11) *
				0.4}px;
				h4 {
					font-size: calc(${({theme}) => theme.sizes.headers[3]} * 0.4);
				}
			}
		}
	}

	input,
	select {
		height: 60px;
		& ~ label {
			top: -1px;
			bottom: 0;
		}
	}
`;

export default Style;
