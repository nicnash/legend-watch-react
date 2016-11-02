const data = {
		champions:[
			{
				id:1,
				name:'Aatrox',
				matches: [
					{
						id:52112,
						kda:5
					},{
						id:2321,
						kda:2
					}
				]
			},
			{
				id:2,
				name:'Ahri'
			},
			{
				id:3,
				name:'Caitlyn'
			},
			{
				id:4,
				name:'Darius'
			},
			{
				id:5,
				name:'Draven'
			},
		],
		players:[
			{
				id:1,
				name:'Bjergerking'
			},{
				id:2,
				name:'Sneaky'
			},{
				id:3,
				name:'Peanut'
			},{
				id:4,
				name:'Faker'
			},{
				id:5,
				name:'Aphromoo'
			},

		]
	}



exports.getAll = function () {
  return data
}

// const dataMap = data.reduce(function (map, category) {
//   category.itemsMap = category.items.reduce(function (itemsMap, item) {
//     itemsMap[item.name] = item
//     return itemsMap
//   }, {})
//   map[category.name] = category
//   return map
// }, {})

// exports.lookupCategory = function (name) {
//   console.log('datamap:', dataMap);
//   return dataMap[name]
// }