const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

let getCont = function(array) {
    // debugger
	let Index = new Number;
    switch(array[2]) {
        case 'fr':
        case 'it':
        case 'ru':
        case 'no':
        case 'gb':
        case 'se':
        case 'ro':
        case 'ua':
        case 'dk':
        case 'de':
            Index = 1;
            break;
        case 'us':
        case 'ca':
            Index = 3;
            break;
        case 'jp':
            Index = 4;
            break;
        case 'au':
            Index = 5;
    }
	return Index
}

let olyTable = [];
let TRsHeader = ['',...olympic];
TRsHeaderTable = `<tr>${TRsHeader
	.map(function(item) {
		return `<td width = '50'>${item}</td>`
	})
	.join('')}</tr>`
	olyTable.push(TRsHeaderTable);

Array.prototype.getTR = function() {
    let TR = new Array(6);
    let TD = [];
// debugger
    resultSport = sports.find(item => item[1] === this[0]);
	TR[0] = `<td>${resultSport[0]}`;

    resultMedal = medals.find(item => item[1] === this[1]);
	TD[0] = `<td>${resultMedal[0]}-`;

    resultFlag = flags.find(item => item[0] === this[2]);
	TD[1] = `${resultFlag[1]}</td>`;
	for(i=1; i<TR.length; i++){
		if(i!=getCont(this)){
		TR[i] = `<td width = '50'></td>`;
		}
	}
    TR[getCont(this)] = TD.join('');
    return `<tr>${TR.join('')}</tr>`
}

Array.prototype.getTable = function() {
	// debugger
	olyTable = this
				.map(function(item){
					// debugger
					return  item.getTR()
				});
olyTable.unshift(TRsHeaderTable);
    return olyTable.join('')
}


// debugger
document.write(`<table border = '1'> ${winners.getTable()} </table>`)
console.log(winners.getTable())