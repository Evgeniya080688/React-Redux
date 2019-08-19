
function createId() {
	return "" + Math.random().toString(36).substr(2, 9);
}

function getDate() {
	const nowDate = new Date();
	const dayToday = nowDate.getDate();
	const monthToday = nowDate.getMonth()+1;
	const yearToday = nowDate.getFullYear();
	return "" + dayToday+"-"+ monthToday + "-" + yearToday;
}

function isEmptyString(text){
	return text.replace(/\s+/g," ").trim();
}

export {createId, getDate, isEmptyString};	