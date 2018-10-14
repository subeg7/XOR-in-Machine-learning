class NeuralNetwork{
  constructor(input_nodes, hidden_nodes,output_nodes){
    //init the nodes of each layer
    this.input_nodes = input_nodes;
    this.hidden_nodes = hidden_nodes;
    this.output_nodes = output_nodes;

    //init weights
    this.hi_weights = new Matrix(this.hidden_nodes,this.input_nodes);
    this.ho_weights = new Matrix(this.output_nodes,this.hidden_nodes);

    //randomize within -1 to 1
    this.hi_weights.randomize();
    this.ho_weights.randomize();

    //init biases and randomize
    this.bias_hidden = new Matrix(hidden_nodes,1);
    this.bias_output = new Matrix(output_nodes,1);
    this.bias_hidden.randomize();
    this.bias_output.randomize();

    //set learning_rate;
    this.learning_rate=0.1;


    this.bias =1 ;
  }

  let sigmoid = new ActivationFunction(
    x => 1 / (1 + Math.exp(-x)),
    y => y * (1 - y)
  );

  setActivationFunction(func = sigmoid){
    this.activation_function = func;
  }

   feedforward(input_values){

    //return output
  }




}
