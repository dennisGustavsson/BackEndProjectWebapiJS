const products = [
	// {
	// 	tag: "firstflashsale",
	// 	articleNumber: "675b3e48-2761-40a4-a47a-88f131ff9182",
	// 	name: "Black Coat",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Coats",
	// 	price: 33,
	// 	rating: 2,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/black-coat.png",
	// },
	// {
	// 	tag: "firstflashsale",
	// 	articleNumber: "6049ec73-8ad4-451d-b9a8-6c20d080c860",
	// 	name: "Black Dress",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Dresses",
	// 	price: 12,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/black-dress.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "5f9cb2aa-3190-4110-84b7-32b58c6b878b",
	// 	name: "Black Set",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Sets",
	// 	price: 55,
	// 	rating: 4,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/black-set.png",
	// },
	// {
	// 	tag: "firstflashsale",
	// 	articleNumber: "6b57658f-cd93-4fea-b85d-01fbdcc86674",
	// 	name: "BW Set",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "",
	// 	price: 64,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/black-white-set.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "e6f340b4-d6fd-4d37-a5e8-0f36c19990d6",
	// 	name: "Blue Jacket",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Jackets",
	// 	price: 234,
	// 	rating: 5,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "ac41a294-184b-4107-912c-b37f265bebae",
	// 	name: "Blue Set",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Sets",
	// 	price: 66,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/blue-set.png",
	// },
	// {
	// 	tag: "firstflashsale",
	// 	articleNumber: "982e1851-c7e1-42b7-abbe-c75fa79fc8e8",
	// 	name: "Brown Sweater",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Tops",
	// 	price: 2,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "d62170fa-16f9-4bd9-a463-5eca7c4f35b3",
	// 	name: "Brown Watch",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Accessories",
	// 	price: 87,
	// 	rating: 1,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/brown-watch.png",
	// },
	// {
	// 	tag: "secondflashsale",
	// 	articleNumber: "3ffe1d2f-7059-4703-980e-a395c76e7a06",
	// 	name: "Blue Shirt",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Tops",
	// 	price: 45,
	// 	rating: 2,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png",
	// },
	// {
	// 	tag: "",
	// 	articleNumber: "8da31f50-a3f6-4cce-aa52-0b7b5afa216a",
	// 	name: "Chrome Shoes",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Shoes",
	// 	price: 84,
	// 	rating: 5,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "4ddb2910-546e-4c53-b5a9-91bd0d530fa5",
	// 	name: "Gray Shirt",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Tops",
	// 	price: 885,
	// 	rating: 4,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png",
	// },
	// {
	// 	tag: "secondflashsale",
	// 	articleNumber: "f657fe12-585f-42a2-9ce5-b78e4c69b988",
	// 	name: "Jeans Dress",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Dresses",
	// 	price: 6756,
	// 	rating: 5,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png",
	// },
	// {
	// 	tag: "secondflashsale",
	// 	articleNumber: "b2191815-9a3f-49fc-be55-4215cb2c59ab",
	// 	name: "Olive Sweater",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Tops",
	// 	price: 6756,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "0879a3b2-8072-468f-a106-95682cac05ed",
	// 	name: "Tshirt",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Tops",
	// 	price: 67,
	// 	rating: 2,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "5fde6039-e0bd-46cc-af79-2a66e37c2aaa",
	// 	name: "Purple Bag",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Accessories",
	// 	price: 6756,
	// 	rating: 5,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/purple-bag.png",
	// },
	// {
	// 	tag: "secondflashsale",
	// 	articleNumber: "7cba2aa4-6667-480b-97fa-15f6759c0eb1",
	// 	name: "Red Bag",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Accessories",
	// 	price: 674,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/red-bag.png",
	// },
	// {
	// 	tag: "thirdflashsale",
	// 	articleNumber: "a7d94609-c31b-47d2-8341-e6b14577fda8",
	// 	name: "Red Dress",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Dresses",
	// 	price: 4,
	// 	rating: 5,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/red-dress.png",
	// },
	// {
	// 	tag: "thirdflashsale",
	// 	articleNumber: "0ccdd502-5a48-40d9-b0ee-d725ff44e971",
	// 	name: "Striped Top",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Tops",
	// 	price: 234,
	// 	rating: 2,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/striped-top.png",
	// },
	// {
	// 	tag: "thirdflashsale",
	// 	articleNumber: "3134a6ae-3859-4e5e-aa12-560b96bbd68c",
	// 	name: "Pants striped",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Pants",
	// 	price: 37,
	// 	rating: 1,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/striped-pants.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "1d41b47b-ab1e-44ea-8173-4eeb64bd3496",
	// 	name: "A Sweater",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Tops",
	// 	price: 55,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/white-sweater.png",
	// },
	// {
	// 	tag: "thirdflashsale",
	// 	articleNumber: "51a8c478-cd64-4316-9406-01425356b038",
	// 	name: "White Boots",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ipsum, feugiat convallis sagittis a, auctor tristique leo. Phasellus accumsan nulla non gravida laoreet. Integer faucibus magna neque. Fusce hendrerit turpis eu.",
	// 	category: "Shoes",
	// 	price: 88,
	// 	rating: 3,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/winter-boots.png",
	// },
	// {
	// 	tag: "featured",
	// 	articleNumber: "0b83f1a1-3cc6-458c-89f4-19f87a507e7d",
	// 	name: "Jeans Set",
	// 	description:
	// 		"Nullam tempus magna posuere placerat tincidunt. Praesent vitae orci tellus. In mollis feugiat dui, rutrum ornare tellus consequat ac. Nam nec leo mauris. Vestibulum sodales nulla eget lacus posuere convallis.",
	// 	category: "Sets",
	// 	price: 56,
	// 	rating: 4,
	// 	imageName:
	// 		"https://win22imgstorage.blob.core.windows.net/images/jeans-set.png",
	// },
];
module.exports = products;

//https://win22imgstorage.blob.core.windows.net/images/

// const users = []
// module.exports = users
