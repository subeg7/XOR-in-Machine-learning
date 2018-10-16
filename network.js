//making sigmoid funciton(object of class AF) global
  let sigmoid = new ActivationFunction(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
);


//main NeuralNetwork class
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

    console.log("hi_weights at init");
    this.hi_weights.display();
    // console.log("break");
    this.ho_weights.randomize();

    //init biases and randomize
    this.bias_hidden = new Matrix(hidden_nodes,1);
    this.bias_output = new Matrix(output_nodes,1);
    this.bias_hidden.randomize();
    this.bias_output.randomize();

    //set learning_rate;
    this.learning_rate=0.1;

    //initialize the activation function(sigmoid)
    this.setActivationFunction();

  }

  //the default activation function is sigmoid
  setActivationFunction(func = sigmoid){
    this.activation_function = func;
  }

   feedforward(input_values){
     console.log("input="+input_values);

     let input_mat = Matrix.fromArray(input_values);

     console.log("mat.data="+input_mat.data);

      input_mat.display();
     
     let hidden = Matrix.multiply(this.hi_weights, input_mat);
     console.log(hidden);

     // let hidden= this.hi_weights.multiply(input_set);
     hidden.add(this.bias_hidden);
     //activation function
     hidden.map(this.activation_function.func)

     //for output layer
     let output = Matrix.multiply(this.ho_weights, hidden);
     output.add(this.bias_o);
     output.map(this.activation_function.func);


     console.log("output=");
     console.log(output.data[0]);

     //return final output
  }

  backpropagate(input_values,true_values){
    //train the weights
  }




}
