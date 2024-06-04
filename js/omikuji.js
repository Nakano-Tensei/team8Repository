function Omikuji() {

	let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
	let r = Math.floor( Math.random() * omikuji.length) ;
	document.getElementById("kekka").innerHTML = omikuji[r];
    <button onclick="Omikuji();">　おみくじを引く　</button>
    
}
