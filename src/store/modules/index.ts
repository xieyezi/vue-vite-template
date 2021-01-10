const files = import.meta.glob('./*.ts')
const modules: any = {}

Object.keys(files).forEach((key) => {
	files[key]().then((moudle) => {
		modules[key.replace(/(\.\/|\.ts)/g, '')] = moudle.default
	})
})
console.log('modules', modules)

export default modules
