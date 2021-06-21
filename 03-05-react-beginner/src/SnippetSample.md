### 1. [snippet-generator.app](snippet-generator.app) 들어가서 붙여넣기

```js
import React from 'react';

function ${TM_FILENAME_BASE}() {
    return (<div>
        Hello React!
    </div>);
}

export default ${TM_FILENAME_BASE};
```

### 2. 파일 > 기본 > 사용자 코드 조각

```json
{
    {
	"Create Functional React Component": {
		"prefix": "fc",
		"body": [
			"import React from 'react';",
			"",
			"function ${TM_FILENAME_BASE}() {",
			"    return (<div>",
			"        ${1:Hello React!}",
			"    </div>);",
			"}",
			"",
			"export default ${TM_FILENAME_BASE};",
			""
		],
		"description": ""
	}
}
```

### 3. 시험하기

-   새 파일 만들어서 열고 파일 형식을 `Javascript`가 아니라 `Javascript React`로 선택
-   fc 단축어 입력 후 엔터
