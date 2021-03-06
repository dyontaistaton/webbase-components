import React from 'react';
import styled from 'styled-components';
import {Flex} from '../Layout';

export const Style = styled(Flex)`
	background-color: ${({theme}) => theme.colors[4]};
	padding: 10px 0;
`;

const Footer = (props) => {
	return (
		<Style center>
			<p>
				2021 © <strong>Company Name</strong> ⦁ Developed By{' '}
				<strong>StatonFoundation™</strong> ⦁ Powered by{' '}
				<strong>WebBase™</strong>
			</p>
		</Style>
	);
};

export default Footer;
