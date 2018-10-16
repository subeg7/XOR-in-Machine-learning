  // document.write("inside setup");
  //creating network
  let network = new NeuralNetwork(2,2,1);
// //console.log("First weights:");

  var input_arr= [ [1,0] , [0,1], [1,1], [0,0] ];
   let true_output=[[1],[1],[0],[0] ];

let ind;
// let output;
let sets;
   for(i=0;i<100;i++){
  ind=parseInt((Math.random()*4) );
 sets = network.feedforward(input_arr[ ind]);
  // console.log(i+"). input="+input_arr[ind]+", machine="+sets[2].data[0]);
  network.backpropagate(true_output[ind],sets[0],sets[1],sets[2]);
  }
  console.log(i+"). input="+input_arr[ind]+", machine="+sets[2].data[0]);
