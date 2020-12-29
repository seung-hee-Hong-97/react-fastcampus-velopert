import React from 'react';

/** 🤷‍♂️ defaultProps가 작동하지 않으므로 default parameter를 설정해야 한다. */

// type GreetingsProps = {
//     name: string;
//     // default를 지정하고자 한다면 ? 키워드를 빠뜨리지 말 것.
//     mark?: string;
// };

// /*
//     default props를 선언하는 경우에는 올바르게 작동하지 않으므로 다음과 같이 선언
//      React.FC로 사용하면 children이 처음부터 탑재돼 있으므로 바로 사용이 가능하다.
//      그렇지만 React.FC를 사용하지 않는 경우도 있으므로 감안하여 사용해야 한다.
// */
// const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' , children}) => {
//     return (
//         <div>
//             Hello, {name}
//             {mark}
//         </div>
//     );
// };

/**
 * 🤷‍♂️ defaultProps를 사용할 때는 다음과 같이 사용하여야 작동한다.
 */

type GreetingsProps = {
    name: string;
    mark?: string;
    optional: string;
    onClick: (name: string) => void;
    children?: React.ReactNode; // function키워드로 컴포넌트로 children을 참조하려면 이를 선언해야 한다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello. {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>클릭</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!',
};

export default Greetings;
