function areAnagrams(str1, str2) {
    let cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
    let cleanStr2 = str2.toLowerCase().replace(/\s/g, '');
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    let sortedStr1 = cleanStr1.split('').sort().join('');
    let sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

let string1 = "listen";
let string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
areAnagrams(string1, string2);