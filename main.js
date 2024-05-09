function FindCount(target, searchstr) {
    const regex1 = new RegExp(searchstr, 'g');
    const matches = target.match(regex1);
    return matches ? matches.length : 0;
}

function FindReplace(target, find, replacement) {
    const regex2 = new RegExp(find, 'g');
    return target.replace(regex2, replacement);
}

function ReplaceDouble(target, replacement) {
    const regex3 = /\b(\w+)\s+\1\b/g;
    return target.replace(regex3, replacement);
}

function StartCap(target) {
    const regex4 = /(?<=^|\.|\?|\!)\s*\w/g;
    return target.replace(regex4, match => match.toUpperCase());
}

function CustomFunction(target) {
    const regex5 = /<[^>]*>/g;
    return target.replace(regex5, '');
}