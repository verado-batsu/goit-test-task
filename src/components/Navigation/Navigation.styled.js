import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
	padding: 20px 0;
	color: #fff;
	font-size: 18px;
	text-decoration: none;
	&.active{
		color: #fbff5e;
		text-decoration: underline;
	}
`