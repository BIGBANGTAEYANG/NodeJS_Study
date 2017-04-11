var fs = require('fs');
var stdin = process.stdin;
var stdout = process.stdout;
var dirname = '.';

stdout.write('输入需要查看的目录路径:');
stdin.resume();
stdin.on('data',sin);

function sin(data){
	if(data==''&&data==null){
		read(dirname);
	}else{
		dirname=String(data);
		read(dirname);
	}
};



function read(dirname){
	fs.readdir(dirname,function(err,files){

	console.log('当前目录文件显示如下:');

	if(!files.length){
		return console.log('该目录没有文件!\n');
	}

	console.log('请选择你所需要查看的文件\n');

	function file(i){
		var filename = files[i];
		fs.stat(dirname+'/'+filename,function(err,stat){
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
			stdout.write('请选择你所需要查看的文件');
		}else{
			stdin.pause();
			fs.readFile(dirname+'/'+filename,'utf8', function (err,data){
				console.log('\n'+data.replace(/(.*)/g,'		$1'));
			});
		}
	}

	file(0);
});

};



