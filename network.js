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
     //array into single column matrix
     console.log("input="+input_values);
     let input_mat = Matrix.fromArray(input_values);
     console.log("mat.data="+input_mat.data);
      input_mat.display();


      //hidden layer inputs
      console.log("hidden part");
     let hidden = Matrix.multiply(this.hi_weights, input_mat);
     hidden.add(this.bias_hidden);

     //activation function
     hidden.map(this.activation_function.func)
     hidden.display();


     // output layer inputs(output of hidden)
     console.log("output layer");
     let output = Matrix.multiply(this.ho_weights, hidden);
     output.add(this.bias_output);
     output.display();

     output.map(this.activation_function.func);

     return [input_mat,hidden,output];

  }

  backpropagate(true_values,input,hidden,output){
    console.log("hidden:");
    hidden.display();
    console.log("output:");
    output.display();
    //transform array into matrix
    let targets = Matrix.fromArray(true_values);
    //calucalte error
    let error = Matrix.subtract(targets, output);
    //find garadients
    console.log("this.activation_function.dfunc"+this.activation_function.derivative);
    let gradients = Matrix.map(output, this.activation_function.derivative);
    gradients.multiply(this.learning_rate);
    console.log("gradients");
    gradients.display();
    // Calculate deltas
    let hidden_T = Matrix.transpose(hidden);
    let weight_ho_deltas = Matrix.multiply(gradients, hidden_T);

    // Adjust the weights by deltas
    this.ho_weights.add(weight_ho_deltas);
    // Adjust the bias by its deltas (which is just the gradients)
    this.bias_output.add(gradients);


    // Calculate the hidden layer errors
    let who_t = Matrix.transpose(this.ho_weights);
    let hidden_errors = Matrix.multiply(who_t, error);

    // Calculate hidden gradient
    let hidden_gradient = Matrix.map(hidden_errors, this.activation_function.derivative);
    hidden_gradient.multiply(hidden_errors);
    hidden_gradient.multiply(this.learning_rate);

    // Calcuate input->hidden deltas
    let inputs_T = Matrix.transpose(input);
    console.log("inputs.display");
    input.display();
    let weight_ih_deltas = Matrix.multiply(hidden_gradient, inputs_T);

    this.hi_weights.add(weight_ih_deltas);
    // Adjust the bias by its deltas (which is just the gradients)
    this.bias_hidden.add(hidden_gradient);

  }




}
