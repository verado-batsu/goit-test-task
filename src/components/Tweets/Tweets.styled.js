import styled from "@emotion/styled";

export const UsersList = styled.ul`

	li {
		position: relative;
		max-width: 380px;
		/* height: 460px; */
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
	}
	
	.user-avatar{
		position: absolute;
		left: 150px;
		bottom: -40px;
		border-radius: 85.9232px;
		border: 8px solid #EBD8FF;
		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
	}

	.white-line{
		width: 100%;
		height: 8px;
		background: #EBD8FF;
		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
	}

	.user-info{
		
		padding: 62px 36px 36px;
		p{
			margin: 0;
			font-family: 'Montserrat', sans-serif;
			font-weight: 500;
			font-size: 20px;
			line-height: 24px;
			text-transform: uppercase;
			color: #EBD8FF;
		}
		/* p:not(:last-child){
			margin-bottom: 16px;
		} */

		button{
			border: none;
			padding: 0;
		}
	}
`