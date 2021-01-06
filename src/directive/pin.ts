const pin = (el: HTMLInputElement, binding: any) => {
	el.style.position = 'fixed'
	const s = binding.arg || 'top'
	el.style[s] = binding.value + 'px'
}

export default pin
