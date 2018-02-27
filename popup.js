window.onload = function(){

	chrome.storage.sync.get('site1',function(data){
			document.getElementById('name1').value=data.site1;
		});
	chrome.storage.sync.get('site2',function(data){
			document.getElementById('name2').value=data.site2;
		});
	chrome.storage.sync.get('site3',function(data){
			document.getElementById('name3').value=data.site3;
		});
	chrome.storage.sync.get('site4',function(data){
			document.getElementById('name4').value=data.site4;
		});
	chrome.storage.sync.get('site5',function(data){
			document.getElementById('name5').value=data.site5;
		});

	document.getElementById('save1').onclick = function(){
		var value=document.getElementById('name1').value;
		chrome.storage.sync.set({'site1':value},function(){
			alert('URL saved!');
		});
	}

	document.getElementById('load1').onclick = function(){
		chrome.storage.sync.get('site1',function(data){
			chrome.tabs.create({url:data.site1});
		});
	}
	document.getElementById('save2').onclick = function(){
		var value=document.getElementById('name2').value;
		chrome.storage.sync.set({'site2':value},function(){
			alert('URL saved!');
		});
	}

	document.getElementById('load2').onclick = function(){
		chrome.storage.sync.get('site2',function(data){
			chrome.tabs.create({url:data.site2});
		});
	}
	document.getElementById('save3').onclick = function(){
		var value=document.getElementById('name3').value;
		chrome.storage.sync.set({'site3':value},function(){
			alert('URL saved!');
		});
	}

	document.getElementById('load3').onclick = function(){
		chrome.storage.sync.get('site3',function(data){
			chrome.tabs.create({url:data.site3});
		});
	}
	document.getElementById('save4').onclick = function(){
		var value=document.getElementById('name4').value;
		chrome.storage.sync.set({'site4':value},function(){
			alert('URL saved!');
		});
	}

	document.getElementById('load4').onclick = function(){
		chrome.storage.sync.get('site4',function(data){
			chrome.tabs.create({url:data.site4});
		});
	}
	document.getElementById('save5').onclick = function(){
		var value=document.getElementById('name5').value;
		chrome.storage.sync.set({'site5':value},function(){
			alert('URL saved!');
		});
	}

	document.getElementById('load5').onclick = function(){
		chrome.storage.sync.get('site5',function(data){
			chrome.tabs.create({url:data.site5});
		});
	}
}