var regex = /^hello/g;
var searchString = `hello World hello
HeLLO hhello HEllo
HellO
`;
console.log(searchString.match(regex));
var regex_ends_with = /hello$/igm;
console.log(searchString.match(regex_ends_with));