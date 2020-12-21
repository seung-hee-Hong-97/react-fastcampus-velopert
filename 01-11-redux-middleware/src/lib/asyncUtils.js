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
