import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    /* 색상 */
    // Props 안에 다음과 같이 작성도 가능하다.
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
        `;
    }}
`;

const sizes = {
    // 🤷‍♂️ 별도의 객체로 속성을 지정하여 코드의 반복을 줄였음.
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
    },
};

const sizeStyles = css`
    /* 크기 지정하기 */
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    ${colorStyles}
    ${sizeStyles}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function StyleButton({ children, color, size, ...rest }) {
    return (
        <StyledButton color={color} size={size} {...rest}>
            {children}
        </StyledButton>
    );
}

StyleButton.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default StyleButton;
