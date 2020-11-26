import { useReducer, useEffect } from 'react';

/*
    🤷‍♂️ 3가지 상태로 관리할 예정
    1. LOADING
    2. SUCCESS
    3. ERROR
    ===============
*/
/*
    🤷‍♂️ Reducer 별 거 아니네!
    ## 기존 코드에서는 useState로 3개의 상태를 관리했다면?
    이번에는 `Reducer`라는 개념으로 상태를 관리한다.
    ## 이전에 useState로 관리했던 상탯값은 action으로!!! 
    그리고 상태의 유형과 상태의 값은 모두 action에서 관리한다고 보면 된다.
    
    📌 reducer: 상태를 업데이트하는 함수
    📌 dispatch: 상태르 업데이트하도록 요청하는 함수 (👍 운영체제론의 dispatch 상태와 비슷한 느낌인 듯하다?)
    📌 state: 말 그대로 현재의 상태 (reducer함수에서 반환하는 객체의 값이 곧  state가 된다고 생각하면 되겠다.)

    dispatch => 상태를 변경한다 

    🤷‍♂️ 리듀서로 사용할 수 있는 이점?
    - 지금은 코드가 길어보이지만 이 리듀서만을 따로 별도의 파일로 관리하여 재사용할 수 있다.
    - VSCODE에서 함수 이름에 오른쪽 버튼을 눌러 Refactor 기능을 이용하면 별도의 파일로 꺼낼 수 있음.
*/
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled Exception type: ${action.type}`);
    }
}

/* 
    😁 커스텀 훅 만들기
    - 아무래도 커스텀 훅을 만드는 패턴에 익숙해져야 할 필요성을 느낀다.
    반복되는 코드는 훅으로 만들어 사용하면 굉장히 유용하다.
     
    callback: api를 호출하는 함수
    deps: 컴포넌트가 로딩됐을 때나 값이 변경됐을 때 API를 재요청하기 위함.
*/
function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        laoding: false,
        data: null,
        error: null,
    });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data });
        } catch (error) {
            dispatch({ type: 'ERROR', error });
        }
    };

    useEffect(() => {
        if (skip) {
            return;
        }
        fetchData();
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData];
}

export default useAsync;
