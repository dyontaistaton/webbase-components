import React from 'react';
import styled from 'styled-components';
import {default as FieldStyle} from './Style';
import {Field} from 'formik';
import {If} from '../../Logic';
import PropTypes from 'prop-types';

export const types = {};

export const Style = styled(FieldStyle)`
	select {
		${(props) => props.fill && `width:100%;`}

		// Right Hand Down Arrow ( IE )
    &:-ms-expand {
			display: none;
		}

		// Right Hand Down arrow ( Chrome + Firefox )
		-webkit-appearance: none;
		-moz-appearance: none;
		text-indent: 1px;
		text-overflow: '';

		// Input Labels
		& ~ label {
			will-change: transform, color, bottom, top, height;
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

		// When The Select Had An Valid Option
		&:not(:invalid) {
			border-color: ${({theme}) => theme.colors[4]}8a;

			& ~ label {
				top: 2px;
				color: ${({theme}) => theme.colors[4]};
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
`;

const Select = (props) => {
	const {options, caseSensitive, label, placeholder} = props;
	return (
		<Style {...props}>
			<Field {...props} noSpacing={null} as='select' placeholder='...' required>
				<option disabled selected hidden value='' />
				{options &&
					options.map((option) => (
						<option value={caseSensitive ? option : option.toLowerCase()}>
							{option}
						</option>
					))}
			</Field>
			<If value={label || placeholder}>
				<label>
					<h4>{label || placeholder}</h4>
				</label>
			</If>
		</Style>
	);
};

Select.propTypes = {
	/** All Option Values Within Select Input Field */
	options: PropTypes.arrayOf(PropTypes.string),

	/** Does The Value Of The Select Value Case-Sensitive | Default - Selected Option Value Is Turned To Lower Case */
	caseSensitive: PropTypes.bool,

	/** Text Within Select Field */
	label: PropTypes.string,

	/** Field Name */
	name: PropTypes.string.isRequired,

	/** Does Input Width Fill Parent Element? */
	fill: PropTypes.bool,

	/** The Width Of The Input Element */
	width: PropTypes.string,

	/** Disables Field Spacing */
	noSpacing: PropTypes.bool,
};

Select.style = Style;

Select.defaultProps = {
	label: 'Select',
	caseSensitive: false,
	options: [],
};

export default Select;
