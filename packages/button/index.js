import React from 'react';
import { string, bool, func, element } from 'prop-types';

import styled from 'styled-components';
import { default as MaterialCoreUIButton } from '@material-ui/core/Button';

export default function Button({
    disabled,
    variant,
    startIcon,
    endIcon,
    onClick,
    children,
}) {
    return (
        <StyledButton
            disabled={disabled}
            variant={variant === 'outlined' ? 'outlined' : 'contained'}
            startIcon={startIcon ? startIcon : null}
            endIcon={endIcon ? endIcon : null}
            onClick={onClick}
            color={variant}
        >
            {children}
        </StyledButton>
    );
}

const StyledButton = styled(MaterialCoreUIButton)`
    &.MuiButton-root {
        color: ${props => textColor(props.color)};
        border-radius: 21px;
        font-weight: 600;
        letter-spacing: 0;
        box-shadow: none;
        text-transform: none;
        background-color: ${props => backgroundColor(props.color)};
        ${props => props.color === 'outlined' && { border: '1px solid #2196F3' }}

        &:hover {
            background-color: ${props => backgroundColor(props.color)};
        }

        &.MuiButton-contained {
            &:hover,
            &:active {
                backround-color: ${props => backgroundColor(props.color)};
            }
        }

        &:disabled {
            color: #bdbdbd;
            background-color: #fafafa;
            border: 1px solid #ddd;
            cursor: not-allowed;
            &:hover {
                cursor: not-allowed;
            }
        }
    }
`;

const textColor = variant => {
    switch (variant) {
        case 'outlined':
            return '#2196F3';
        default:
            return '#ffffff';
    }
};

const backgroundColor = variant => {
    switch (variant) {
        case 'outlined':
            return '#ffffff';
        case 'success':
            return '#4CAF50';
        case 'error':
            return '#F44336';
        default:
            return '#2196F3';
    }
};

Button.propTypes = {
    /**
     *  available props: succes, error, outlined
     **/
    variant: string,
    disabled: bool,
    onClick: func.isRequired,
    startIcon: element,
    endIcon: element,
};
