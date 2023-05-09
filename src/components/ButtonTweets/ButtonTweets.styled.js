import styled from "@emotion/styled";

export const Button = styled.button`
	border: none;
	padding: 0;
	padding: 14px 56px;

	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;

	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 18px;
	line-height: ${22 / 18};
	text-transform: uppercase;
	color: #373737;

	&:hover,
	&:focus{
		opacity: 0.85;
	}

	cursor: pointer;
	${(props) => {
			if (props.btnStatus) {
				return `background: #5CD3A8;`
			} else {
				return 'background: #EBD8FF;'
			}
		}
	}
`