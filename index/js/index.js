const lia = document.getElementsByClassName('lia');
const top1 = document.getElementsByClassName('top')[0];
const content = document.getElementsByClassName('content')[0];
const name = document.getElementsByClassName('name')[0];

name.addEventListener('click', function (arg) {
	top1.className = 'top no_use';
	content.className = 'content no_use';
})

for(let item of lia) {
	item.addEventListener('click', function (arg) {
		// 变换背景
		const index = arg.toElement.dataset.index;
		
		// content.classList.remove(content.classList[content.classList.length - 1]);
		// content.classList.add(`content${index}`);

		//这样只操作一次DOM，性能会更好些
		const contentClassList = content.classList.value.split(" ");
		contentClassList.pop();
		contentClassList.push(`content${index}`);
		content.classList.value = contentClassList.join(" ");

		// 原理同上
		const top1ClassList = top1.classList.value.split(" ");
		top1ClassList.pop();
		top1ClassList.push(`top${index}`);
		top1.classList.value = top1ClassList.join(" ");

		// 显示
		
	})
}