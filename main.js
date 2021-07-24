class Test {
	number = 10
	color = 'rgba(255, 45, 20, .8)'
	constructor() {}
	less = value => `this is the result: ${this.number - value}`
	sum(value) {
		return 'this is the value ' + value + this.number
	}
	hello() {
		console.log('FT testing tabnine')
	}
}

const test = new Test()
console.log(test.sum(2))
