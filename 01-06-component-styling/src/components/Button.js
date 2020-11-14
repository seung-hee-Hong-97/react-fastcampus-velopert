import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//large, medium, small
//color: blue, pink, gray
function Button({ children, size, color, outline, fullWidth, ...rest }) {
    console.log(rest);
    return (
        <button
            className={classNames('Button', size, color, {
                outline,
                fullWidth,
            })}
            {...rest} // 나머지 속성을 적용해 주겠다.
        >
            {children}
        </button>
    );
}

/*
 🤷‍♂️ className이 겹치지 않는 방법 (팁)

 1. 컴포넌트의 이름을 고유하게 지정한다.
 2. 최상위 엘리먼트의 클래스 이름을 컴포넌트 이름과 동일하게 지정한다.
 3. 그 내부에서 셀렉터를 사용한다.
 ex)

 .UserProfile{
     .user{
         img{}
        .username{}
     }
     .about{}
 }

*/

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;
