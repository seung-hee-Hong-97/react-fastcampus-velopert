import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || 'black'};
    border-radius: 50%;
    ${(props) =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        ` /* 
            🤷‍♂️
            위 Template Literal에서 또 Props를 필요로 할 수가 있다. 
            그런데 Template Literal만 찍어버리면 Props를 참조할 수 없으므로
            styled-components에서 제공하는 css를 이용한다.
            */}
`;

function App() {
    return (
        <>
            <Circle />
            <Circle color='blue' huge />
        </>
    );
}

export default App;

// function App() {
//     const [check, setCheck] = useState(false);
//     const onChange = (e) => {
//         setCheck(e.target.checked);
//     };
//     return (
//         <div>
//             <CheckBox onChange={onChange} checked={check}>
//                 다음 약관에 모두 동의
//             </CheckBox>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div className='App'>
//             <div className='buttons'>
//                 <Button size='large'>Button</Button>
//                 <Button>Button</Button>
//                 <Button size='small'>Button</Button>
//             </div>
//             <div className='buttons'>
//                 <Button color='gray' size='large'>
//                     Button
//                 </Button>
//                 <Button color='gray'>Button</Button>
//                 <Button color='gray' size='small'>
//                     Button
//                 </Button>
//             </div>
//             <div className='buttons'>
//                 <Button color='pink' size='large'>
//                     Button
//                 </Button>
//                 <Button color='pink'>Button</Button>
//                 <Button color='pink' size='small'>
//                     Button
//                 </Button>
//             </div>
//             <div className='buttons'>
//                 <Button size='large' outline>
//                     Button
//                 </Button>
//                 <Button color='gray' outline>
//                     Button
//                 </Button>
//                 <Button color='pink' size='small' outline={true}>
//                     Button
//                 </Button>
//             </div>
//             <div className='buttons'>
//                 <Button size='large' fullWidth>
//                     Button
//                 </Button>
//                 <Button size='large' color='gray' fullWidth>
//                     Button
//                 </Button>
//                 <Button
//                     size='large'
//                     color='pink'
//                     fullWidth={true}
//                     onClick={() => {
//                         console.log('클릭!');
//                     }}
//                 >
//                     Button
//                 </Button>
//             </div>
//         </div>
//     );
// }
