var CONFIG_DIR_BIN="./bin";
var CONFIG_DIR_EXT="./ext";
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

desc("Copy Task");
task("copy", [], {}, function(){
	jake.mkdirP(CONFIG_DIR_BIN);
	
	var fl = new jake.FileList();
	fl.include(CONFIG_DIR_EXT + "/html/*");
	fl.toArray().forEach(function(f) {
		jake.cpR(f, CONFIG_DIR_BIN);
	});
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