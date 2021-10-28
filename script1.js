
// let TRs = new Array(6);
// // TRs[undefined, ...olympic]
// // TRs.unshift(undefined);
// console.log(TRs)
// let getCont = function(array) {
//     debugger
//     switch(index) {
//         case 'fr':
//         case 'it':
//         case 'ru':
//         case 'no':
//         case 'gb':
//         case 'se':
//         case 'ro':
//         case 'ua':
//         case 'dk':
//         case 'de':
//             index = 1;
//             break;
//         case 'us':
//         case 'ca':
//             index = 3;
//             break;
//         case 'jp':
//             index = 4;
//             break;
//         case 'au':
//             index = 5;
//     }

// }

// // let users = [
// //     {id: 1, name: "Вася"},
// //     {id: 2, name: "Петя"},
// //     {id: 3, name: "Маша"}
// //   ];
  
// //   let user = users.find(item => item.id == 1);
  
// //   alert(user.name); // Вася




Array.prototype.getTR = function(array) {
    let TR = new Array(6);
    let TD = [];

    resultSport = sports.find(item => item[1] === array[0]);
	resultSport[0] = ${TR[0]};

    resultMedal = medals.find(item => item[1] === array[1]);
	resultMedal[0] = `<td>${TD[0]} - `;

    resultFlag = flags.find(item => item[0] === array[2]);
	resultFlag[1] = `${TD[1]}</td>`;

    TR[getCont(array)] = TD.join('');
    console.log(TR);
    document.write(`<tr>${TR}</tr>`);
    return TR
}