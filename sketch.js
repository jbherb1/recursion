let can;
let vst;
let vend;
let vees=[];

function setup() {
can=createCanvas(1100,500);
can.position(100,75);
can.class("bord");

vst=createVector(width/2,height);
vend=createVector(width/2,height/2);
vees.push(new vclass(vst,vend));

createburrito();

}

function draw() {
background(0);
for(let j=0;j<vees.length;j++){
	vees[j].show();
drawburrito();
}
}


