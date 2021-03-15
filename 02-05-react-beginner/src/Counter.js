import React, { useReducer, useState, Component } from 'react';

class Counter extends Component {
    /* 
        constructor 내부에서 하는 방법 이외에도 밖에서 바로 값을 지정할 수 있다.
        이는 자바스크립트 문법이 아니라 바벨이 지원하는 class properties 문법 
    */
    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        },
    };

    constructor(props) {
        super(props);
        // 이 방법 말고는 handle메서드를 화살표 함수로 바꿔서 사용하기 (이것도 class properties 문법임)
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        // state는 무조건 객체여야 한다. 함수형 컴포넌트에서 useState의 초깃값 형태에 제약이 없는 것과는 대비되는 모습이다.
        this.state = {
            counter: 0,
            fixed: 1,
        };
    }

    handleIncrease() {
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    handleDecrease() {
        // setState는 함수를 즉시 바꾸는 것이 아니라 아래의 값으로 바꿔달라고 요청하는 것이다.
        // 그러므로 여러 번 쓴다고 해서 수치가 n만큼 감소하는 것이 아니다. 그걸 바랐다면 함수형 업데이트를 사용한다.
        this.setState({
            counter: this.state.counter - 1,
        });
        this.setState({
            counter: this.state.counter - 1,
        });
        this.setState({
            counter: this.state.counter - 1,
        });
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    handleToggle = () => {
        this.setState({
            // 객체 안의 객체의 경우에는 기존의 값을 유지해줘야 한다.
            updateMe: {
                ...this.updateMe,
                togglEMe: !this.state.updateMe.toggleMe,
            },
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

/*
    // 액션의 생김새
    {
        type: 'INCREMENT
    }
*/
// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled Exception');
//         // return state;
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({ type: 'INCREMENT' });
//     };
//     const onDecrease = () => {
//         dispatch({ type: 'DECREMENT' });
//     };

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }
export default Counter;
