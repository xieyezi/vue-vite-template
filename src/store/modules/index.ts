const files = import.meta.globEager('./*.ts')

// eslint-disable-next-line
const modules: VuexMoudle = {}

Object.keys(files).forEach((key) => {
	modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
})

export default modules
