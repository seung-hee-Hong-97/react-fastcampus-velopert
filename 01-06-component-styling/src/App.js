import React, { useState } from 'react';
import './App.scss';
import CheckBox from './components/CheckBox';

function App() {
    const [check, setCheck] = useState(false);
    const onChange = (e) => {
        setCheck(e.target.checked);
    };
    return (
        <div>
            <CheckBox onChange={onChange} checked={check}>
                다음 약관에 모두 동의
            </CheckBox>
        </div>
    );
}

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

export default App;
