const readline = require('readline');
const colors = require('colors');

let dict = {
	'a': 'Alice',
	'b': 'Boston',
	'c': 'Chicago',
	'd': 'David',
	'e': 'Edward',
	'f': 'Frank',
	'g': 'George',
	'h': 'Hotel',
	'i': 'India',
	'j': 'James',
	'k': 'Kate',
	'l': 'Love',
	'm': 'Mary',
	'n': 'New York',
	'o': 'Ocean',
	'p': 'Peter',
	'q': 'Queen',
	'r': 'Romeo',
	's': 'Samuel',
	't': 'Tom',
	'u': 'Uncle',
	'v': 'Victor',
	'w': 'William',
	'x': 'X-ray',
	'y': 'Young',
	'z': 'Zebra',
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
	let lines = line.split(' ')
	lines.forEach(line => {
		console.log(line.split('').
			map(c => c.toLowerCase()).
			map(char => {
				if(dict[char]){
					let [first, ...rest] = dict[char].split('')
					return `${char.toUpperCase().bold.red} as in ${first.bold.underline}${rest.join('').underline}`
				}
				return char
			}).
			join('\t')
		);
	})
 
	// console.log('hello'.green); // outputs green text
	// console.log('i like cake and pies'.underline.red) // outputs red underlined text
	// console.log('inverse the color'.inverse); // inverses the color
	// console.log('OMG Rainbows!'.rainbow); // rainbow
	// console.log('Run the trap'.trap); // Drops the bass
})