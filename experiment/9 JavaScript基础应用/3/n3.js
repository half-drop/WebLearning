function $(id) {
	return document.getElementById(id);
}

function inputName() {
	var name = prompt("请输入你的姓名：", "你好！");
	if (name != null) {
		alert("你的名字是：" + name);
		$("name1").value = name;
	} else {
		alert("请你输入姓名！");
	}
}