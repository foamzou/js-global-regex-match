module.exports = (content, regex) => {
    let reg = new RegExp(regex, 'g');
    let responseList = [];
    let match;
    while (match = reg.exec(content)) {
        let item = match.length > 2 ? match.slice(-`${match.length-1}`) : match[1];
        responseList.push(item);
    }
    return responseList;
}
