  // document.write("inside setup");
  //creating network
  let network = new NeuralNetwork(2,2,1);

  var input_arr= [ [1,1] , [0,0], [0,1], [1,0] ];
  network.feedforward(input_arr[ parseInt((Math.random()*4) )]);
