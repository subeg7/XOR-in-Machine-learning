  // document.write("inside setup");
  //creating network
  let network = new NeuralNetwork(2,2,1);

  var input_arr= [ [1,0] , [0,1], [1,1], [0,0] ];
   let true_output=[[1],[1],[0],[0] ];
  let ind=parseInt((Math.random()*4) );
  let sets = network.feedforward(input_arr[ ind]);
  network.backpropagate(true_output[ind],sets[0],sets[1],sets[2]);
