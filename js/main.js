"use strict"

$('.main-card').on('click', function () {
	var targetDetails = $(this).attr("data-order");
	$('.card-row').hide();
	$(".card-details").hide();
	$("." + targetDetails).show();
})

// 顶部导航点击事件

$(".nav-parent ul li").on("click", "a", function () {
	var temp = $(this).attr("data-nav");
	$(".card-row").hide();
	$(".card-details").hide();
	switch (temp) {
		case "nav-1":
			$(".card-row-1").show();
			break;
		default:
			break;
	}
})

//render 函数
//合作银行
var bankIconData = [{
	title: "1",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "2",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/f6153f1a-5887-49b1-b8ad-ff5de5cf7ca6.png"
}, {
	title: "3",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/c1af7a89-88cd-4747-b4ba-0299f0e8ff94.png"
}, {
	title: "4",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/f71931b4-e42e-4800-9e81-56c60b9a6ae8.png"
}, {
	title: "5",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/2f5bce6e-1c46-43e0-b11b-3093b190edc8.png"
}, {
	title: "6",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/f4b35c63-3cc6-4c4e-9f53-efc5a31b1386.png"
}, {
	title: "7",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/c338c618-93cd-4ab3-b700-a6ae047ecd2a.png"
}, {
	title: "8",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/ca3a9876-1d32-4646-b80d-7fd909947556.png"
}, {
	title: "9",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/79572b38-43d4-4598-ab1f-5f60430588f5.png"
}];

// 合作商家
var merchantIconData = [{
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}, {
	title: "sfsdfsdf",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/04/bf2e7736-f087-4268-900f-99126eec363c.png"
}];



renderFlexItemToTargetDOM(bankIconData, ".bank-icon-wrap"); // 渲染合作银行
// renderFlexItemToTargetDOM(bankIconData, ".bank-icon-wrap"); // 渲染合作商家


//渲染Flex项目  FlexItem样式在less文件中设置  渲染函数中只更改URL
function renderFlexItemToTargetDOM(data, targetDOM) {
	var _html = '';
	data.forEach(function (item, index) {
		_html += '<div style="background-image:url(' + item.url + ')"></div>';
		console.log(item)
	})
	$(targetDOM).html(_html);
}
