function introduction(name){
    return (`Hi, my name is ${name}.`)}
function introductionWithLanguage(value1, value2) {
    return (`Hi, my name is ${value1} and I am learning to program in ${value2}.`)
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
    }