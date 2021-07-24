import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import { Flex } from '../Layout';

const Style = styled(Flex)`
  min-height:100vh;
`

const Page = props => {
  return (
    <ThemeProvider theme={props.theme}>
      <HelmetProvider>
        <Helmet>
          {props.helmet}
        </Helmet>
        <Style d='column' {...props}>
          {props.children}
        </Style>
      </HelmetProvider>
    </ThemeProvider>
  )
}

Page.Header = Header;
Page.Footer = Footer;
Page.Body = Body;

export default Page;
