function Game(nama,jumlah) {
	this.nama=nama;
	this.harga=jumlah;

	Game.prototype.diskon=function(jumlahdiskon){
		// this.harga*=jumlahdiskon/100;
		let asu=this.harga*jumlahdiskon/100;
		this.harga-=asu;

		return 'selamat anda dapat diskon '+jumlahdiskon+'%, ='+asu;
	}
	Game.prototype.tambahharga=function(tambahkan){
		this.harga+=tambahkan;
		return 'selamat harga di tambahkan '+tambahkan;
	}
}

let naruto=new Game('naruto',100000);
let sasuke=new Game('sasuke',100000).diskon(100);
let asd=[];
console.log(asd.push('asu','asu'));