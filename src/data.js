const data = {
		champions:[
			{
				id:1,
				name:'Aatrox',
				matches: [{
						id:52112,
						kda:5
					},{
						id:2321,
						kda:2
					},{
						id:21345,
						kda:.4
					}]
			},{
				id:2,
				name:'Ahri',
				matches: [{
						id:657,
						kda:3
					},{
						id:3456,
						kda:4
					},{
						id:4345,
						kda:7
					}]
			},{
				id:3,
				name:'Caitlyn',
				matches: [{
						id:5678,
						kda:35
					},{
						id:768,
						kda:.2
					},{
						id:453,
						kda:.43
					}]
			},{
				id:4,
				name:'Darius',
				matches: [{
						id:6,
						kda:52
					},{
						id:23261,
						kda:21
					},{
						id:231345,
						kda:2
					}]
			},{
				id:5,
				name:'Draven',
				matches: [{
						id:5254112,
						kda:51
					},{
						id:546,
						kda:22
					},{
						id:21334545,
						kda:.43
					}]
			},
		],
		players:[
			{
				id:1,
				name:'Bjergerking',
				matches: [{
						id:52134512,
						kda:54
					},{
						id:23251,
						kda:25
					},{
						id:213545,
						kda:.46
					}]
			},{
				id:2,
				name:'Sneaky',
				matches: [{
						id:5112,
						kda:57
					},{
						id:434,
						kda:28
					},{
						id:123,
						kda:9.4
					}]
			},{
				id:3,
				name:'Peanut',
				matches: [{
						id:412,
						kda:10.5
					},{
						id:2341,
						kda:11.2
					},{
						id:124,
						kda:12.4
					}]
			},{
				id:4,
				name:'Faker',
				matches: [{
						id:124,
						kda:13.5
					},{
						id:23,
						kda:14.2
					},{
						id:43534,
						kda:15.4
					}]
			},{
				id:5,
				name:'Aphromoo',
				matches: [{
						id:44,
						kda:16.5
					},{
						id:445,
						kda:21
					},{
						id:2166345,
						kda:9
					}]
			},

		]
	}




// const dataMap = data.champions.reduce(function (map, champion) {
//   champion.itemsMap = champion.items.reduce(function (itemsMap, item) {
//     championsMap[item.name] = item
//     return itemsMap
//   }, {})
//   map[champion.name] = champion
//   return map
// }, {})

// const dataMap = data.reduce(function (map, category) {
//   category.itemsMap = category.items.reduce(function (itemsMap, item) {
//     itemsMap[item.name] = item
//     return itemsMap
//   }, {})
//   map[category.name] = category
//   return map
// }, {})



const dataMap = function(){
	data['championsMap'] = data.champions.reduce(function(map,currentChampion){
		currentChampion.matchesMap = currentChampion.matches.reduce(function (matchesMap, match) {
			matchesMap[match.id] = match
			return matchesMap
		}, {})

		map[currentChampion.name] = currentChampion;
		return map;
	}, {})

	return data
}();

exports.lookupChampion = function (name) {
  console.log('lookupChampion:', data.championsMap);
  return dataMap.championsMap[name]
}

exports.getAll = function () {
  return data
}

// exports.updateChampion = function(name) {

// }

// exports



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