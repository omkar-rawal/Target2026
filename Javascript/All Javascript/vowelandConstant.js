// Count vowels and consonants
// 👉 Input: "hello" → Output: { vowels: 2, consonants: 3 }

const str="helAIOlo";
const vowelStr='aeiou';
vowelCount=0;
nonVowelCount=0;

for(let i of str){
    const val=i.toLowerCase()
    if(vowelStr.includes(val)){
        vowelCount++
    } else {
        nonVowelCount++
    }
}
console.log(`Vowel:${vowelCount} Non Vowel:${nonVowelCount}`);




