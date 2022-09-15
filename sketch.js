
var weight = [20,35,30,45];

function weight_Avg(){
  
  var sum = weight[0] +weight[1] +weight[2] +weight[3];
  var avg = sum/weight.length;
  console.log(avg);
}

function setup() 
{
  createCanvas(400,400);
weight_Avg();


}

function draw() 
{
background(51);

}

