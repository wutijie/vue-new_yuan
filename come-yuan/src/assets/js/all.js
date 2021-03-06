/*------------------------------ 自适应长度 -----------------------------*/
	
;(function (doc, win, undefined) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (clientWidth === undefined) return;
		docEl.setAttribute("style","font-size:" + 20 * (clientWidth / 750) + "px !important");
	};
	if (doc.addEventListener === undefined) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);

export default {
	install(Vue, options){
		/*------------------------------ 图片转base64 -----------------------------*/
		Vue.prototype.tobase = function(input_file,get_data){
			/*input_file：文件按钮对象*/
			/*get_data: 转换成功后执行的方法*/
			if ( typeof(FileReader) === 'undefined' ){
			    alert("抱歉，你的浏览器不支持 FileReader，不能将图片转换为Base64，请使用现代浏览器操作！");
			} else {
			    try{
			        /*图片转Base64 核心代码*/
			        var file = input_file.files[0];
			        //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
			        if(!/image\/\w+/.test(file.type)){
			            alert("请确保文件为图像类型");
			            return false;
			        }
			        var reader = new FileReader();
			        reader.onload = function(){
			            get_data(this.result);
			        }
			        reader.readAsDataURL(file);
			    }catch (e){
			        alert('图片转Base64出错啦！'+ e.toString())
			    }
			}
		}
		
		
	}
}
