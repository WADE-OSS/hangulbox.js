# kop.js

한글을 다양한 형태로 바꿀 수 있는 자바스크입트 라이브러리 입니다.

<br>
<br>
<br>

### wordSeparate : 한단어만 분리합니다
```js
  kop.wordSeparate('안');
  // return 'ㅇㅏㄴ'
```

### wordSeparateAll : 문장을 분리합니다
```js
  kop.wordSeparateAll('안녕하세요');
   // return 'ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ'
```



### wordSeparateToArray : 문자를 분리하고 Array로 받습니다
```js
kop.wordSeparateToArray('안녕하세요');
/* return [
0: (3) ['ㅇ', 'ㅏ', 'ㄴ']
1: (3) ['ㄴ', 'ㅕ', 'ㅇ']
2: (3) ['ㅎ', 'ㅏ', '']
3: (3) ['ㅅ', 'ㅔ', '']
4: (3) ['ㅇ', 'ㅛ', '']
] */
```

### toArray : 문자 하나하나를 Array로 분류합니다
```js
kop.toArray('안녕하세요. 안녕');
// return ['안', '녕', '하', '세', '요', '.', ' ', '안', '녕']
```

### toArrayNotDuplicate : toArray와 비슷하지만 중복 문자를 제거합니다
```js
kop.toArrayNotDuplicate('안녕하세요. 안녕');
// return ['안', '녕', '하', '세', '요', '.', ' ']
```
