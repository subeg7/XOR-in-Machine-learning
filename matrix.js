class Matrix{
  constructor(rows, cols){
      this.rows= rows;
      this.cols = cols;
      this.data =   Array(this.rows).fill().map(  x=>Array(this.cols).fill(0)  );
      // console.log("matrix created");
  }


  randomize() {
    return this.data.map(e => Math.random() * 2 - 1);
  }
}
