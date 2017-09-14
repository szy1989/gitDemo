function ajaxGetPromise(url,data){
		//判断data是否有值
		if( data ){
			url = url + "?" + data;
		}
		
		var promise = new Promise(function(success,failed){
			var ajax = null;
			if( window.XMLHttpRequest ){
				ajax = new XMLHttpRequest();
			}else{
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			ajax.open("GET",url);
			ajax.send();
			
			ajax.onreadystatechange = function(){
				if( ajax.readyState == 4 && ajax.status == 200 ){
					//成功了 
					success( ajax.responseText );
				}
			}
			
			//延时      3秒内如果请求不成功     请求失败
			setTimeout(function(){
				failed();
			},3000)
		})
		
		//返回promise对象
		return promise;
}