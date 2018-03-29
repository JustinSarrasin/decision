console.log('hello')
// const app = {
//    title: Toggle
// }
let visibility = false;

const toggleItem = () => {
   visibility = !visibility;
   render();
}

const render = () => {
   const template = (
      <div>
         <h1>Toggle</h1>
         <button onClick={toggleItem}>
            {visibility ? 'hide details' : 'Show details'}
         </button>
         {visibility && (
            <div>
               <p>hey these are details</p>
            </div>
         )}
         
      </div>

   );
   console.log();

   ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render();