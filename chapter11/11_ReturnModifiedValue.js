/******* 11.11 수정된 값 반환하기 ********/
/******************************************/

const totalAscent = calculateAscent();
let totalTime = 0;
let totalDistance = 0;
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
    let result = 0;
    for(let i=1; i<points.length; i++ ){
        const verticalChange = points[i].elevation - points[i-1].elevation;
        result += (verticalChage > 0) ? verticalChange : 0;
    }
    return result;
}

