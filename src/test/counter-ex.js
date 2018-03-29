class Counter extends React.Component {
   constructor(props){
      super(props);
         this.handleAddOne = this.handleAddOne.bind(this);
         this.handleMinusOne = this.handleMinusOne.bind(this);
         this.handleReset = this.handleReset.bind(this);
         this.state = {
            count: 0
         };
   }
   handleAddOne() {
      // console.log('clicked');
      this.setState((prevState) => {
         return {
            count: prevState.count + 1
         };
      });
   }
   handleMinusOne() {
      // console.log('clicked');
      this.setState((prevState) => {
         return{
            count: prevState.count - 1
         }
      });

   }
      
   
   handleReset() {
      console.log('clicked');
      this.setState(() => {
         return {
            count: 0
         }
      })
      // console.log('clicked');
      // this.setState((prevState) => {
      //    return {
      //       count: prevState.count + 1
      //    }
      // })
      // this.setState({
      //    count: 0
      // });
      // this.setState({
      //    count: this.state.count + 1
      // })

   }
   render(){
      return(
         <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
         </div>
      )
   }
}
// console.log('hey');

ReactDOM.render(<Counter />, document.getElementById('app'));

// const renderCounterApp = () => {

//    let count = 0;
//    const addOne = () => {
//       count++;
//       renderCounterApp();
//       console.log('addOne', count);
//    };

//    const minusOne = () => {
//       count--;
//       renderCounterApp();
//       console.log('minusOne');
//    };

//    const reset = () => {
//       count = 0;
//       renderCounterApp();
//       console.log('reset');
//    };
//    const templateTwo = (
//       <div>
//          <h1>Count: {count}</h1>
//          <button onClick={addOne} className="button">+1</button>
//          <button onClick={minusOne} className="button">-1</button>
//          <button onClick={reset} className="button">reset</button>
//       </div>
//    );

//    ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();