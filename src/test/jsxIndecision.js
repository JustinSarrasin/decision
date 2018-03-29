console.log('running');

const app = {
   title: 'Indecision app',
   subtitle: 'react',
   options: []
};

const onFormSubmit = (e) => {
   e.preventDefault();

   const option = e.target.elements.option.value;

   if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
   }
}

const reset = () => {
   app.options = [];
   render();
}

// const numbers = [55,101, 1000];

const onMakeDecision = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randomNum];
   alert(option);
   console.log(randomNum);
}

const render = () => {
   const template = (
      <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length > 0 ? 'here are the options' : 'no options'}</p>
         {/* <p>{app.options.length}</p> */}
         <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
         <button onClick={reset}>reset</button>
         {/* {
            numbers.map((number) => {
               return <p key={number}>Number: {number}</p>;
            })
            // [<p key="1">a</p>, <p key="2">b</p>, <p key="3" >c</p>]
         } */}

         <ol>
            {app.options.map((options, i) => {
               return <li key={i}>{options}</li>
            })}
         </ol>
         <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
         </form>
      </div>
   );
   ReactDOM.render(template, appRoot);
}


const appRoot = document.getElementById('app');

render();

// const render = () => {
//     ;




// const user = {
//    name: 'andy',
//    age: 40,
//    location: 'buffalo'
// };

// function getLocation(location){
//    if(location) {
//       return <p>location: {location}</p>
//    } else{
//       return 'unknown';
//    }
// }

// let userName = 'jim';
// let userAge = 26;
// let userLocation = 'canada';


// const template2 = (
//    <div>
//       <h1>{user.name ? user.name : 'anonymous'}</h1>
//       {(user.age && user.age >= 18) && <p>age: {user.age}</p>}

//       {getLocation(user.location)}
//    </div>
// );

