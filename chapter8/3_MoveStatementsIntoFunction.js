/******* 8.3 문장을 함수로 옮기기 ********/
/***************************************/

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(aPhoto) {
    return [
        "<div>",
        emitPhotoData(aPhoto),
        "</div>",
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    return result = [
        `<p>제목 : ${aPhoto.title}</p>`,
        `<p>위치 : ${aPhoto.location}</p>`,
        `<p>날짜 : ${aPhoto.data.toDateString()}</p>`,
    ].join("\n");
}
