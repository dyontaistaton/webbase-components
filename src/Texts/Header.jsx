import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Style = styled.h1`

`

const Header = props => { 
  const {
    size,
    children,
    override
  } = props

  const headerType = `h${size}`;
  const overrideType = `h${override||size}`;

  return (
    <Style as={headerType} className={overrideType}>
      {children}
    </Style>
  )
} 

Header.style = Style;

Header.propTypes = {
  /** Level / Size Of Header Element */
  size: PropTypes.oneOf('1','2','3','4','5',1,2,3,4,5).isRequired,
  
  /** 
   * Overrides Header Size 
   * Which Will Style Header as this
   * but it's tag will not change
   */
  override: PropTypes.oneOf('1','2','3','4','5',1,2,3,4,5)
}

Header.defaultProps = {
  size:1
}

export default Header;