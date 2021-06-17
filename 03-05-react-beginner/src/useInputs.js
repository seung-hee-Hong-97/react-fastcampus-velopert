import { useState, useCallback } from 'react';

// 커스텀 훅은 자주 사용되는 컴포넌트의 반복되는 로직을 포함시킨 내용이라고 생각하자.
// 커스텀 훅을 만들 때는  use라는 키워드로 시작해서 기능을 나타내는 단어를 선정하여 함수를 만듦.
function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
