var CONFIG_DIR_EXT="./ext";
var CONFIG_DIR_LIB="./lib";
var CONFIG_DIR_SRC="./src";

desc("Default Task");
task("default", [], {async: true}, function(){
	var cmds = [
		"jake -T"
	];
	
	jake.exec(cmds, {interactive: true}, function(){
		complete();
	});
});

desc("Build Task");
task("build", ["compile"], {}, function(){
	jake.mkdirP(CONFIG_DIR_LIB);
	jake.cpR(CONFIG_DIR_SRC, CONFIG_DIR_LIB);
});

desc("Compile Task");
task("compile", [], {async: true}, function(){
	var cmds = [
		"tsc --project ."
	];
	
	jake.exec(cmds, {interactive: true}, function(){
		complete();
	});
});

desc("Watch Task");
task("watch", [], {async: true}, function(){
	var cmds = [
		"tsc --watch --project ."
	];
	
	jake.exec(cmds, {interactive: true}, function(){
		complete();
	});
});
