document.getElementById('blogin').disabled = true;
document.getElementById('bhome').disabled = true;
var getw = window.localStorage.getItem('nowname');
var dt = JSON.parse(pt('get',getw + '_ownpage'));
document.getElementById('myTextarea').value = dt[getw + '_ownpage'];
document.getElementById('shower').innerHTML = dt[getw + '_ownpage']; 
    function apt(tin,wm){
	    return '&' + tin + '=' + wm;
    }
    function apd(act){
		var yon = 'https://tinywebdb.appinventor.space/api?user=name317&secret=53c40c78&action=' + act;
		return yon;
    }
    function pt(o,...args){
		var xhr = new XMLHttpRequest();
        var url = '';
		if (o === 'count'){
			url = apd(o);
		}
		else if (o === 'get'){
			url = apd(o) + apt('tag',args[0]);
		}
		else if (o === 'delete'){
			url = apd(o) + apt('tag',args[0]);
		}
		else if (o === 'update'){
			url = apd(o) + apt('tag',args[0]) + apt('value',args[1]);
		}
		else if (o === 'search'){
			url = apd(o) + apt('no',args[0]) + apt('count',args[1]) + apt('tag',args[2]) + apt('type',args[3]);
		}
		xhr.open("GET", url, false); 
		xhr.send();
		if (xhr.status === 200) {
		    return(xhr.responseText);
		} else {
		    return(xhr.statusText);
		}
   	};
	function breaklogin(){
		window.localStorage.setItem('nowname','null');
		alert('已退登！正在刷新网页。');
		window.location.href = 'https://yxy317coder.github.io/chatroom/';
	}
	function login_do(){
		var div = document.getElementById('chatdiv');
  		div.style.display = 'block';
		var newDiv = document.createElement('h4');
		newDiv.innerHTML = '当前账户名：' + window.localStorage.getItem('nowname');
		if (div.children.length > 0) {
		    div.insertBefore(newDiv, div.children[0]);
		} else {
		    div.appendChild(newDiv);
		}
		document.getElementById('blogin').disabled = false;
		document.getElementById('bhome').disabled = false;
	};
	function home(){
		window.location.href = 'https://yxy317coder.github.io/chatroom/';
	}
	function newg() {
		document.getElementById('myTextarea').disabled = false;
	}
	function safv(){
		var textareaContent = document.getElementById('myTextarea').value;
		var geto = window.localStorage.getItem('nowname');
		var try1 = JSON.parse(pt('update',geto + '_ownpage',textareaContent));
		document.getElementById('myTextarea').disabled = true;
		alert('加载中……');
		window.location.href = 'https://yxy317coder.github.io/chatroom/user';
	}
	if (window.localStorage.getItem('nowname') !== 'null' && window.localStorage.getItem('nowname') !== null){
		login_do();
	}
	else{
		alert('无权访问该页面！');
		window.location.href = 'https://yxy317coder.github.io/chatroom/';
	}
