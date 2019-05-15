module.exports = (content, regex) => {
    let reg = new RegExp(regex, 'g');
    let responseList = [];
    let match;
    while (match = reg.exec(content)) {
        responseList.push(match[1]);
    }
    return responseList;
}
