var cash = 0
var workers = 0
var workerRand = 10
var clickplus = 1

function sellGoods() {
	cash = cash + clickplus
	document.getElementById("totalCash").innerHTML = "Cash: " + String(cash);
}

function employWorker() {
	if (cash >= workerRand)
		cash = cash - workerRand
		workerRand = Math.floor((Math.random() * 10) + 1)
		clickplus = clickplus + 0.5
		workers = workers + 1
		document.getElementById("workers").innerHTML = "Workers: " + workers;
}
