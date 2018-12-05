"use strict"

$('.main-card,.square-card').on('click', function () {
	var targetDetails = $(this).attr("data-order");
	$('.card-row').hide();
	$(".card-details").hide();
	$("." + targetDetails).show();
})

// 顶部导航点击事件

$(".nav-parent ul li").on("click", "a", function () {
	var temp = $(this).attr("data-nav");
	$(".details-wrap").hide();
	$(".card-row").hide();
	$(".card-details").hide();
	switch (temp) {
		case "nav-1":
			$(".details-wrap-1").show();
			$(".card-row-1").show();
			break;
		case "nav-2":
			$(".details-wrap-2").show();
			$(".card-row-2").show();
			break;
		case "nav-3":
			$(".details-wrap-3").show();
			$(".card-row-3").show();
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
}, {
	title: "10",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/d810f0e9-5c6f-4f72-95d5-0b600d4333ce.png"
}, {
	title: "11",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/f8b29713-8671-4751-89e3-f70fbbcc08ee.png"
}, {
	title: "12",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/c1b96f76-5cef-4db2-a166-f154cb9dfb5d.png"
}, {
	title: "13",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/3edbe676-103c-4171-8042-56b549fc049f.png"
}, {
	title: "14",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/6b307e5d-a854-472d-9ff5-9c75526b2e00.png"
}, {
	title: "15",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/726e0229-e756-47d8-966f-4c1d0a063f93.png"
}, {
	title: "16",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/52ffabae-a246-4412-ad3b-281281af7c39.png"
}, {
	title: "17",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/ce233b33-d5de-4c7f-89b4-46ac14e67993.png"
}];


// 合作商家
var merchantIconData = [{
	title: "1",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/071473ed-116e-4f2a-8754-cfedc11b6df6.png"
}, {
	title: "2",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/42d27a0c-248c-4691-8e0c-47796865923a.png"
}, {
	title: "3",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/92ad3f4b-baec-4340-b9e2-36cd28e994a8.png"
}, {
	title: "4",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/fd97dda7-ca85-4930-9874-4d6efde61b79.png"
}, {
	title: "5",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/df247096-bb82-4d5a-918a-e9a348adf361.png"
}, {
	title: "6",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/ed9ce215-7e82-42f0-bbcc-06a969d428dc.png"
}, {
	title: "7",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/6defe0e3-266f-42ae-848d-f42053dfa0aa.png"
}, {
	title: "8",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/3d872c86-8d82-4886-a303-dd1fbb85a9e6.png"
}, {
	title: "9",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/2af5a028-7761-4add-8eab-bc39fa1e6f62.png"
}, {
	title: "10",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/8acbf73c-9db9-485d-ae3e-4a7cc05db3a8.png"
}, {
	title: "11",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/0dca6f99-72d5-4ced-9a71-9c9e70ef8f13.png"
}, {
	title: "12",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/2547d758-8177-48d9-b535-110765117fa8.png"
}, {
	title: "13",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/99c335e7-3f3c-46a4-add4-603eae535aec.png"
}, {
	title: "14",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/d1509b16-f0e2-405b-b687-caec1d9af360.png"
}, {
	title: "15",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/2537295e-adab-48e5-8f8b-868f32c50d38.png"
}, {
	title: "16",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/c06b76f4-d7f0-4876-92b6-23bfab6f97cf.png"
}, {
	title: "17",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/f5f4c905-0212-4de4-aac7-119be1b83861.png"
}, {
	title: "18",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/1b47943f-f5f8-44ae-9c2c-d3532099e011.png"
}, {
	title: "19",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/30e4ebf7-10fe-4558-a621-6786e328f932.png"
}, {
	title: "20",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/085a6ed8-541b-4fbb-b028-39da618fe6d8.png"
}, {
	title: "21",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/933429d4-682c-4ada-b99d-e6922c7d62cb.png"
}, {
	title: "22",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/d27de8e9-0669-4ef6-a319-cd4bce04aa26.png"
}, {
	title: "23",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/5a36aa30-9133-4354-907d-a65166500355.png"
}, {
	title: "24",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/1f8d1be9-17a8-4ec4-a6f0-8e60f9d15ced.png"
}, {
	title: "25",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/d32ba24e-cc20-4997-b470-797f063d9c68.png"
}, {
	title: "26",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/412c36bf-1e42-4b95-a4a5-895b38d5c315.png"
}, {
	title: "27",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/b4b51314-4c5a-4747-92a2-2f5dd0859a88.png"
}, {
	title: "28",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/073fa95f-aefc-49bb-954e-90bca38ec2b3.png"
}, {
	title: "29",
	url: "https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/12/05/689e1fda-4b52-4632-bccf-a36a5118231b.png"
}];



renderFlexItemToTargetDOM(bankIconData, ".bank-icon-wrap"); // 渲染合作银行
renderFlexItemToTargetDOM(merchantIconData, ".merchant-icon-wrap"); // 渲染合作商家


//渲染Flex项目  FlexItem样式在less文件中设置  渲染函数中只更改URL
function renderFlexItemToTargetDOM(data, targetDOM) {
	var _html = '';
	data.forEach(function (item, index) {
		_html += '<div style="background-image:url(' + item.url + ')"></div>';
	})
	$(targetDOM).html(_html);
}

// function renderSquareCard(data, targetDOM) {
// 	var _html = '';
// 	data.forEach(function (item, index) {
// 		_html += '<div class="square-card bg-blue animation-card card-2-1"> '+
//               '<div class="corner-icon" style="background-image:url(' + item.url + ')"></div>' +
//               '</div>';
//     
//     
//     ';
// 	})
// 	$(targetDOM).html(_html);
// }
