export const createPromiseThunk = (
    /*요청이 시작했음을 알려주는 액션의 type*/ type,
    /*postAPI.getPost처럼 Promise를 만들어주는 함수*/ promiseCreator
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    /* 파라미터는 1개라고 가정한다. 단, 여러 개의 인잣값을 전달해야 하면 객체로 구성하여 한 개로 구성한다. */
    const thunkCreator = (param) => async (dispatch) => {
        // FSA (Flux Standard Action) 규칙을 따랐다.
        // github.com/redux-utilities/flux-standard-action
        dispatch({ type });
        try {
            const payload = await promiseCreator(param);
            dispatch({
                type: SUCCESS,
                payload,
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
                error: true,
            });
        }
    };

    return thunkCreator;
};

const defaultIdSelector = (param) => param; // 파라미터 자체가 아이디임을 의미
export const createPromiseThunkById = (
    type,
    promiseCreator,
    /* 
        idSelector: API를 호출할 때 사용하는 파라미터에서 id를 어떻게 선택할지 정해주는 함수 
    */
    idSelector = defaultIdSelector
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    /* 파라미터는 1개라고 가정한다. 단, 여러 개의 인잣값을 전달해야 하면 객체로 구성하여 한 개로 구성한다. */
    const thunkCreator = (param) => async (dispatch) => {
        const id = idSelector(param);
        // FSA (Flux Standard Action) 규칙을 따랐다.
        // github.com/redux-utilities/flux-standard-action
        dispatch({ type, meta: id });
        try {
            const payload = await promiseCreator(param);
            dispatch({
                type: SUCCESS,
                payload,
                meta: id,
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
                error: true,
                meta: id,
            });
        }
    };

    return thunkCreator;
};

export const handleAsyncActions = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        // update
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(keepData ? state[key].data : null),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                };
            default:
                return state;
        }
    };
};

export const handleAsyncActionsById = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        const id = action.meta;
        // update
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            keepData ? state[key][id] && state[key][id].data : null
                        ),
                    },
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload),
                    },
                };
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload),
                    },
                };
            default:
                return state;
        }
    };
};
export const reducerUtils = {
    initial: (data = null) => ({
        data,
        loading: false,
        error: null,
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null,
    }),
    success: (data) => ({
        data,
        loading: false,
        error: null,
    }),
    error: (error) => ({
        data: null,
        loading: false,
        error,
    }),
};
