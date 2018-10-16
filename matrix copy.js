class Matrix{
  constructor(rows, cols){
      this.rows= rows;
      this.cols = cols;
      this.data =   Array(this.rows).fill().map(  x=>Array(this.cols).fill(0)  );
      // console.log("matrix created");


  }

  display(){
    console.log("rows="+this.rows);
    console.log("cols="+this.cols);
    console.log("data="+this.data);
  }


  randomize() {
    this.data.forEach(function(element) {
  element=5;
  //Math.random()*(-1)^(Math.random()*10)
  });
    // this.data.map( function (e) { return Math.random() });
  }

  static transform(arr) {
    let mat = new Matrix(arr.length, 1);
    mat.randomize();
    mat.data.map(  (e, i) => arr[i]  );
    return mat;
  }


  static multiply(a, b) {
    // Matrix product
    if (a.cols !== b.rows) {
      console.log('Columns of A must match rows of B.')
      return;
    }

    return new Matrix(a.rows, b.cols)
      .map((e, i, j) => {
        // Dot product of values in col
        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        return sum;
      });
  }

  multiply(n) {
    if (n instanceof Matrix) {
      if (this.rows !== n.rows || this.cols !== n.cols) {
        console.log('Columns and Rows of A must match Columns and Rows of B.');
        return;
      }

      // hadamard product
      return this.map((e, i, j) => e * n.data[i][j]);
    } else {
      // Scalar product
      return this.map(e => e * n);
    }
  }

  add(n) {
    if (n instanceof Matrix) {
      if (this.rows !== n.rows || this.cols !== n.cols) {
        console.log('Columns and Rows of A must match Columns and Rows of B.');
        return;
      }
      return this.map((e, i, j) => e + n.data[i][j]);
    } else {
      return this.map(e => e + n);
    }
  }
}
