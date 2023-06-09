import styled from "@emotion/styled";

export const UsersList = styled.ul`
	padding: 10px 0;
	margin-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
	gap: 174px;
	
	li {
		position: relative;
		max-width: 380px;
		background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
		box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
		border-radius: 20px;
	}
	.goit-logo {
		position: absolute;
		top: 20px;
		left: 20px;
	}
	.img-wrapper{
		position: relative;
		padding: 28px 36px 18px;

		&::after{
			content: '';
			display: block;
			position: absolute;
			left: 0;
			bottom: -8px;
			z-index: 0;
			width: 100%;
			height: 8px;
			background: #EBD8FF;
			box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
		}
	}
	
	.user-avatar{
		position: absolute;
		z-index: 100;
		left: 150px;
		bottom: -44px;
		border-radius: 85.9232px;
		border: 8px solid #EBD8FF;
		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
	}

	.user-info{
		padding: 62px 36px 36px;
		text-align: center;
		& p{
			margin: 0;
			margin-bottom: 16px;
			font-family: 'Montserrat', sans-serif;
			font-weight: 500;
			font-size: 20px;
			line-height: ${24 / 20};
			text-transform: uppercase;
			color: #EBD8FF;
		}
		& p:last-of-type {
			margin-bottom: 26px;
		}
	}
`