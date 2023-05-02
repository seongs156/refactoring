/******* 8.7 반복문 쪼개기 ********/
/*********************************/

function totalSalary() {

    return people.reduce((total,p) => total + p.salary,0);
    // let totalSalary = 0;
    // for(const p of people) {
    //     totalSalary += p.salary;
    // }
    // return totalSalary;
}

function youngestAge() {
    return Math.min(...people.map(p => p.age));
    // let youngest = people[0] ? people[0].age : Infinity;
    // for(const p of people) {
    //     if(p.age < youngest) {
    //         youngest = p.age;
    //     }
    // }
    // return youngest;
}
`최연소: ${youngest}, 총 급여: ${totalSalary}`;
