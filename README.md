# hangulbox.js
hangulbox는 한글을 조금더 쉽게 다룰 수 있게 도와주는 JavaScript 라이브러리입니다.<br>
다음 설명서에서 hangulbox.js에 대한 모든것을 알아보세요.

<br>
<br>

## 시작하기
사용 사례 및 기본 설정에 따라 빌드 단계를 포함하거나 포함하지 않고 hangulbox.js를 사용할 수 있습니다.

### CDN으로 시작하기
```
https://cdn.jsdelivr.net/gh/WADE-OSS/hangulbox.js@1.0.0-alpha.1/dist/core.js
```

### npm으로 설치하기
```
> npm install hangulbox
```


<br>
<br>
<br>

## 사용 설명서

### wordSeparate(word)
한단어만 분리합니다

```js
hangulbox.wordSeparate('안');
  // return 'ㅇㅏㄴ'
```

<br>
<br>

### wordSeparateAll(word)
문장을 분리합니다

```js
  hangulbox.wordSeparateAll('안녕하세요');
   // return 'ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ'
```

<br>
<br>

### wordSeparateToArray(word)
문자를 분리하고 Array로 받습니다

```js
hangulbox.wordSeparateToArray('안녕하세요');
/* return [
0: (3) ['ㅇ', 'ㅏ', 'ㄴ']
1: (3) ['ㄴ', 'ㅕ', 'ㅇ']
2: (3) ['ㅎ', 'ㅏ', '']
3: (3) ['ㅅ', 'ㅔ', '']
4: (3) ['ㅇ', 'ㅛ', '']
] */
```

<br>
<br>

### toArray(word)
문자 하나하나를 Array로 분류합니다

```js
hangulbox.toArray('안녕하세요. 안녕');
// return ['안', '녕', '하', '세', '요', '.', ' ', '안', '녕']
```

<br>
<br>

### toArrayNotDuplicate(word)
toArray와 비슷하지만 중복 문자를 제거합니다

```js
hangulbox.toArrayNotDuplicate('안녕하세요. 안녕');
// return ['안', '녕', '하', '세', '요', '.', ' ']
```

<br>
<br>

### checkLastConsonantLetter(word)
마지막 글자가 받침을 가지면 true를, 받침을 가지지 않으면 false를 return합니다

```js
hangulbox.checkLastConsonantLetter('안녕');
// return true

hangulbox.checkLastConsonantLetter('안녕하세요');
// return false
```
