const products = [
	{
		tag: "",
		articleNumber: "675b3e48-2761-40a4-a47a-88f131ff9182",
		name: "Black Coat",
		description: "lorem lorem blabla",
		category: "Coats",
		price: 33,
		rating: 2,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/black-coat.png",
	},
	{
		tag: "",
		articleNumber: "6049ec73-8ad4-451d-b9a8-6c20d080c860",
		name: "Black Dress",
		description: "dfgdfg",
		category: "",
		price: 12,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/black-dress.png",
	},
	{
		tag: "featured",
		articleNumber: "5f9cb2aa-3190-4110-84b7-32b58c6b878b",
		name: "Black Set",
		description: "ffff",
		category: "",
		price: 55,
		rating: 4,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/black-set.png",
	},
	{
		tag: "featured",
		articleNumber: "6b57658f-cd93-4fea-b85d-01fbdcc86674",
		name: "BW Set",
		description: "hrthrthrth",
		category: "",
		price: 64,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/black-white-set.png",
	},
	{
		tag: "",
		articleNumber: "e6f340b4-d6fd-4d37-a5e8-0f36c19990d6",
		name: "Blue Jacket",
		description: "dfgdfgdfg",
		category: "",
		price: 234,
		rating: 5,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png",
	},
	{
		tag: "featured",
		articleNumber: "ac41a294-184b-4107-912c-b37f265bebae",
		name: "Blue Set",
		description: "dfgdfgdfg",
		category: "",
		price: 66,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/blue-set.png",
	},
	{
		tag: "",
		articleNumber: "982e1851-c7e1-42b7-abbe-c75fa79fc8e8",
		name: "Brown Sweater",
		description: "dfgdfgdf",
		category: "",
		price: 2,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png",
	},
	{
		tag: "featured",
		articleNumber: "d62170fa-16f9-4bd9-a463-5eca7c4f35b3",
		name: "Brown Watch",
		description: "dfgdfg",
		category: "",
		price: 87,
		rating: 1,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/brown-watch.png",
	},
	{
		tag: "",
		articleNumber: "3ffe1d2f-7059-4703-980e-a395c76e7a06",
		name: "Blue Shirt",
		description: "hdfjdfgjd",
		category: "",
		price: 45,
		rating: 2,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png",
	},
	{
		tag: "",
		articleNumber: "8da31f50-a3f6-4cce-aa52-0b7b5afa216a",
		name: "Chrome Shoes",
		description: "vbcvbcvb",
		category: "",
		price: 84,
		rating: 5,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png",
	},
	{
		tag: "featured",
		articleNumber: "4ddb2910-546e-4c53-b5a9-91bd0d530fa5",
		name: "Gray Shirt",
		description: "ghfghd",
		category: "",
		price: 885,
		rating: 4,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png",
	},
	{
		tag: "",
		articleNumber: "f657fe12-585f-42a2-9ce5-b78e4c69b988",
		name: "Jeans Dress",
		description: "ghfdhdfgh",
		category: "",
		price: 6756,
		rating: 5,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png",
	},
	{
		tag: "",
		articleNumber: "b2191815-9a3f-49fc-be55-4215cb2c59ab",
		name: "Olive Sweater",
		description: "fghfghfgh",
		category: "",
		price: 6756,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png",
	},
	{
		tag: "",
		articleNumber: "0879a3b2-8072-468f-a106-95682cac05ed",
		name: "Thirt",
		description: "ghghgh",
		category: "",
		price: 67,
		rating: 2,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png",
	},
	{
		tag: "featured",
		articleNumber: "5fde6039-e0bd-46cc-af79-2a66e37c2aaa",
		name: "Purple Bag",
		description: "fghdfgh",
		category: "",
		price: 6756,
		rating: 5,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/purple-bag.png",
	},
	{
		tag: "",
		articleNumber: "7cba2aa4-6667-480b-97fa-15f6759c0eb1",
		name: "Red Bag",
		description: "dfghfgh",
		category: "",
		price: 674,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/red-bag.png",
	},
	{
		tag: "",
		articleNumber: "a7d94609-c31b-47d2-8341-e6b14577fda8",
		name: "Red Dress",
		description: "dfghdfgh",
		category: "",
		price: 4,
		rating: 5,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/red-dress.png",
	},
	{
		tag: "",
		articleNumber: "0ccdd502-5a48-40d9-b0ee-d725ff44e971",
		name: "Striped Top",
		description: "kjhgk",
		category: "",
		price: 234,
		rating: 2,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/striped-top.png",
	},
	{
		tag: "",
		articleNumber: "3134a6ae-3859-4e5e-aa12-560b96bbd68c",
		name: "Pants striped",
		description: "dfghdfgh",
		category: "",
		price: 37,
		rating: 1,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/striped-pants.png",
	},
	{
		tag: "featured",
		articleNumber: "1d41b47b-ab1e-44ea-8173-4eeb64bd3496",
		name: "A Sweater",
		description: "ghjfghj",
		category: "",
		price: 55,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/white-sweater.png",
	},
	{
		tag: "",
		articleNumber: "51a8c478-cd64-4316-9406-01425356b038",
		name: "White Boots",
		description: "sdfgsdfg",
		category: "",
		price: 88,
		rating: 3,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/winter-boots.png",
	},
	{
		tag: "featured",
		articleNumber: "0b83f1a1-3cc6-458c-89f4-19f87a507e7d",
		name: "Jeans Set",
		description: "fghjfghj",
		category: "",
		price: 56,
		rating: 4,
		imageName:
			"https://win22imgstorage.blob.core.windows.net/images/jeans-set.png",
	},
];
module.exports = products;

//https://win22imgstorage.blob.core.windows.net/images/

// const users = []
// module.exports = users
