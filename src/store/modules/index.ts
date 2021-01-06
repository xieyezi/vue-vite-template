// const files = require.context('.', false, /\.ts$/)
// const modules = {}

// files.keys().forEach((key) => {
// 	if (key === './index.js') return
// 	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
// })

// export default modules
// TODO: 实现类似 webpack require.context 的方法

const modules = {}

export default modules
