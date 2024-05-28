//////////////////////////////////////////////////////
/*  CttCJim_keyListener.js                          */
/*  by James Reinsch                                */
/*  Free for use, GPL 3 license                     */
/*  https://github.com/CttCJim/JSKeyListener        */
//////////////////////////////////////////////////////

function CttCJim_setUpKeyListener() {
	document.addEventListener( "keyup", CttCJim_KeyListener );
}

function CttCJim_KeyListener(event){
	switch(event.key) {
		case "Enter": {
			CttCJim_enterKey(event.target);	
		} break;
		//here you can add your own listeners, ie:
		//case "Tab": { doSomethingAboutTab(event); } break;
		default: return;
	}
}

function CttCJim_enterKey(node) {
	var cmd = node.dataset.enter;
	if(typeof(cmd)=="undefined") return;
	switch(cmd) {
		//here you can add your own events, ie:
		//case "logElement": { console.log(node); } break;
		default: {
			//click the element that matches the query in the data-enter property
			document.querySelector(cmd).click(); 
		} break;
	}
}
