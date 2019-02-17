if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js',{

	scope:'./'

	})
	.then(reg=>{
		console.log("success");
	})

	.catch(error=>{
		console.log("error");
	});
}