result = document.querySelector("#res");
function figure(id){
num = document.getElementById("num").value;
 switch (id) {
        case 1:
		for(i=0; i<num; i++){
			rand = Math.random();
			f = document.createElement("div");
			f.classList.add("square");
			f.style.width = rand*101+15+"px";
			f.style.height = rand*101 +15+ "px";
			f.style.left=Math.random()*1201 + "px";
			f.style.top=Math.random()*501 + "px";
			f.addEventListener("click", (event)=>{event.target.style.backgroundColor="yellow"});
			f.addEventListener("dblclick", del);			
			result.appendChild(f);
			}
			break;
        case 2:
		for(i=0; i<num; i++){
			rand = Math.random();
			f = document.createElement("div");
			f.classList.add("triangle");
			f.style.borderLeftWidth=rand*101+15 + "px";
			f.style.borderRightWidth=rand*101+15 + "px";
			f.style.borderBottomWidth=(rand*101+15)/1.1 + "px";
			f.style.left=Math.random()*1201 + "px";
			f.style.top=Math.random()*501 + "px";
			f.addEventListener("click", (event)=>{event.target.style.borderBottomColor="yellow"});
			f.addEventListener("dblclick", del);			
			result.appendChild(f);
			}
			break;
        case 3:
		for(i=0; i<num; i++){
			rand = Math.random();
			f = document.createElement("div");
			f.classList.add("circle");
			f.style.width = rand*101+15+"px";
			f.style.height = rand*101+15 + "px";
			f.style.borderRadius=(rand*101+15)/2 + "px";
			f.style.left=Math.random()*1201 + "px";
			f.style.top=Math.random()*501 + "px";
			f.addEventListener("click", (event)=>{event.target.style.backgroundColor="yellow"});
			f.addEventListener("dblclick", del);			
			result.appendChild(f);
			}
			break;
        default:
            break;
    }}
function del(event){
	if(event.target.className=="triangle"||event.target.className=="square"||event.target.className=="circle")
		event.target.style.display = "none";
}