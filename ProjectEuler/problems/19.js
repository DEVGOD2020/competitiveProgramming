let start = new Date("01-01-1901");
const end = new Date("12-31-2000");

let count = 0;
while(start<=end){
	if( start.getDay() == 0 && start.getDate() == 1){
		console.log(start, start.getDate());
		count++;
	}
	start = new Date( start.getTime() + 1000*60*60*24 );
}

console.log( count );
