const Container = require("./Container").Container;
const productsFile = new Container("products.txt");

const run = async () => {
	await productsFile.save({ name: "Mother", price: 6000 });
	await productsFile.save({ name: "Cpu", price: 10500 });
	await productsFile.save({ name: "RAM", price: 5750 });
	await productsFile.save({ name: "PSU", price: 8950 });
	await productsFile.save({ name: "Disco Duro", price: 4600 });
	await productsFile.save({ name: "Gabinete", price: 2750 });
	console.log(await productsFile.getById(2));
	productsFile.deleteById(3);
	productsFile.deleteAll();
};

run();
