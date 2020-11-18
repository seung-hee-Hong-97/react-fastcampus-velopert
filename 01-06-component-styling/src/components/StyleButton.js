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
<<<<<<< Updated upstream
=======
            ${(props) =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `}
>>>>>>> Stashed changes
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

const fullWidthStyle = css`
    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
            justify-content: center;
            & + & {
                margin-left: 0;
                margin-top: 1rem;
            }
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
    /* 기타 */
    & + & {
        margin-left: 1rem;
    }

    ${colorStyles}
    ${sizeStyles}
    ${fullWidthStyle}
`;

function StyleButton({ children, color, size, outline, fullWidth, ...rest }) {
    return (
        <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
            {children}
        </StyledButton>
    );
}

StyleButton.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default StyleButton;
