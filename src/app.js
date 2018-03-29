
class IndecisionApp extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         options: []
      }
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
   }
   handleDeleteOptions(){
      this.setState(() => {
         return {
            options: []
         };
      });
   }
   handlePick(){
      this.setState(() => {
         const randomNum = Math.floor(Math.random() * this.state.options.length)
         const option = this.state.options[randomNum];
         alert(option);
         console.log(randomNum);
         alert('do this')
      })
   }
   handleAddOption(option){
      if(!option){
         return 'Enter item';
      } else if (this.state.options.indexOf(option) > -1) {
         return 'already exists'
      }
      this.setState((prevState) => {
         return {
            options: prevState.options.concat(option)
         }
      })
   }
   render(){
      const title = "indecision";
      const subtitle = 'let computer make a decision for you';

      return(
         <div>
            <Header title={title} subtitle={subtitle}
            />
            <Action 
               hasOptions={this.state.options.length > 0}
               handlePick={this.handlePick}
            />
            <Options 
               options={this.state.options}
               handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption 
               handleAddOption={this.handleAddOption}
            />
         </div>
      );
   }
}

class Header extends React.Component {
   render(){

      return(
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
         </div>
      );
   }
}

class Action extends React.Component {
   render(){
      return (
         <div>
            <button 
               onClick={this.props.handlePick}
               disabled={!this.props.hasOptions}>what should i do</button>
         </div>
      );
   }
}


class Options extends React.Component {
   // constructor(props){
   //    super(props);
   //    this.removeAll = this.removeAll.bind();
   // }
   // removeAll() {
   //    console.log(this.props.options)
   //    // alert('remove');
   // }
   render(){
      return(
         <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {this.props.options.length}
            {this.props.options.map((option, i) => <Option key={i} optionText={option}/>
            )}
         </div>
      );
   }
}

class Option extends React.Component {
   render(){
      return (
         <div>
            {this.props.optionText}
         </div>
      )
   }
}

class AddOption extends React.Component {
   constructor(props){
      super(props); 
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
         error: undefined
      }
   }
   // handles input 
   handleAddOption(e){
      e.preventDefault();
      // grabs the details from the form element
      const option = e.target.elements.option.value;
      const error = this.props.handleAddOption(option);
      
      this.setState(() => {
         return {
            error: error
         }
      })
   }
      // if(option){
      //    this.props.handleAddOption(option);
         // app.options.push(option);
         // e.target.elements.option.value = '';
      
   

   render(){
      return(
         <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
               <input type="text" name="option"/>
               <button>add option</button>
            </form>
         </div>
      );
   }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));