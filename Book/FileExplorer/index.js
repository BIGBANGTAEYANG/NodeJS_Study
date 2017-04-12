var fs = require('fs');
var stdin = process.stdin;
var stdout = process.stdout;
var dirname = '.';
var stats = [];


	fs.readdir(dirname,function(err,files){

	console.log('当前目录文件显示如下:');

	if(!files.length){
		return console.log('该目录没有文件!\n');
	}

	console.log('请选择你所需要查看的文件\n');

	function file(i){
		var filename = files[i];
		fs.stat(dirname+'/'+filename,function(err,stat){
			stats[i] = stat;
			if(stat.isDirectory()){
				console.log(i+'		文件夹:'+filename);
			}else{
				console.log(i+'		文件:'+filename);
			}

			
			if(++i==files.length){
				read();
			}else{
				file(i);
			}
		});
	}

	function read(){
				console.log('读取完毕');
				stdout.write('输入你选择文件的编号:');
				//等待用户输入
				stdin.resume();
				stdin.setEncoding('utf8');
				stdin.on('data',option);

	}

	function option(data){
		var filename = files[Number(data)];
		if(!filename){
			stdout.write('输入你选择文件的编号:');
		}else{

			//如果是选择的有的文件编号但是是文件夹，就将文件夹中的文件显示出来
			if (stats[Number(data)].isDirectory()) {
				fs.readdir(dirname+'/'+filename,function(err,files){
					console.log('\n');
					console.log('('+files.length+'files)');
					files.forEach(function(file){
						console.log('文件:'+file);
					});
					
				});
			}else{
				stdin.pause();
				fs.readFile(dirname+'/'+filename,'utf8', function (err,data){
					console.log('\n'+data.replace(/(.*)/g,'		$1'));
				});
			}
		}
	}

	file(0);
});




