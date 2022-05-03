/*
 * hangulbox.js 1.0.0
 *
 * (c) 2022 WADE Open Source Software. and its affiliates.
 * Released under the MIT License.
 * https://github.com/WADE-OSS/hangulbox.js/blob/main/LICENSE
 */

const hangulbox = {
    wordSeparate(word) {
        const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
                'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
                'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
        const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
                'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
                'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
        const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
                'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
                'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
                'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

        const ga = 44032;
        let uni = word.charCodeAt(0);

        uni = uni - ga;

        let fn = parseInt(uni / 588);
        let sn = parseInt((uni - (fn * 588)) / 28);
        let tn = parseInt(uni % 28);

        return f[fn] + s[sn] + t[tn];
    },
    wordSeparateAll(input){
        let returnInput = "";
        for(var i = 0;i < input.length;i++){
            returnInput += this.wordSeparate(input[i]);
        }
        return returnInput;
    },
    wordSeparateToArray(word){
        const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
                'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
                'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
        const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
                'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
                'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
        const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
                'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
                'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
                'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

        const ga = 44032;

        let returnWord = [];
        for(var i = 0;i < word.length;i++){
            let uni = word.charCodeAt(i);
            uni = uni - ga;

            let fn = parseInt(uni / 588);
            let sn = parseInt((uni - (fn * 588)) / 28);
            let tn = parseInt(uni % 28);
            returnWord.push([f[fn] , s[sn] , t[tn]]);
        };

        return returnWord;
    },
    toArray(word){
        return [...word];
    },
    toArrayNotDuplicate(word){
        word = [...word];
        const notDuplicate = word.filter((val, index) => {
            return word.indexOf(val) === index;
        });
        return notDuplicate;
    },
    checkLastConsonantLetter(word) {
        if (typeof word !== 'string') return null;
        var lastLetter = word[word.length - 1];
        var unicode = lastLetter.charCodeAt(0);
       
        if (unicode < 44032 || unicode > 55203) return null;
       
        return (unicode - 44032) % 28 != 0;
    }
};
