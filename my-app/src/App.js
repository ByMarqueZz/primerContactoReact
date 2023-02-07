import './App.css';

// 1.2
// function App() {
//   const customer = {
//     first_name: 'Bob',
//     last_name: 'Dylan'
//   };
//   return (
//     <div className="App">
//       <h1>My name is {customer.first_name}</h1>
//       <h2>My last name is {customer.last_name}</h2>
//     </div>
//   );
// }

// 1.3
// function App() {
//   const data = {
//     image: "../../.learn/assets/Dylan.png?raw=true",
//     cardTitle: "Bob Dylan",
//     cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
//     button: {
//       url: "https://en.wikipedia.org/wiki/Bob_Dylan",
//       label: "Go to wikipedia"
//     }
//   };
//   return (
//     <div class="card m-5">
//       <img class="card-img-top" src={data.image} alt="Card image cap" />
//       <div class="card-body">
//         <h5 class="card-title">{data.cardTitle}</h5>
//         <p class="card-text">{data.cardDescription}</p>
//         <a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
//       </div>
//     </div>
//   );
// }

// 1.4
// function App() {
//   const namesInHTML = [
//     <li class="nav-item"><a class="nav-link" href="#">Link to google.com</a></li>,
//     <li class="nav-item"><a class="nav-link" href="#">Link to facebook.com</a></li>,
//     <li class="nav-item"><a class="nav-link" href="#">Link to amazon.com</a></li>,
//   ];
//   return (
//     <div class="card m-5">
//       <ul class="nav">
//         {namesInHTML}
//       </ul>
//     </div>
//   );
// }

// 2
// function App() {
//   const animals = [ 'Horse', 'Turtle', 'Elephant', 'Monkey' ];
//   const namesInHTML = animals.map((animal) => <li>{animal}</li>);
//   return (
//     <div>
//       <ul>
//         {namesInHTML}
//       </ul>
//     </div>
//   );
// }

// 2.1
// function App() {
//   const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephant' }, { label: 'Monkey' } ];
//   const namesInHTML = animals.map((animal) => <li>{animal.label}</li>);
//   return (
//     <div>
//       <ul>
//         {namesInHTML}
//       </ul>
//     </div>
//   );
// }

// 2.2
// function App() {
//   const originalData = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];

//   const mappingFunction = (item, index) => {
//     // return something in JSX.
//     return <li key={index}>{item}</li>
//   };
  
//   const htmlList = originalData.map(mappingFunction);
//   // the htmlList variable now contains a new array.
//   return (
//     <div>
//       <ul>
//         {htmlList}
//       </ul>
//     </div>
//   );
// }

// 3
function App() {
  const originalData = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];

  const mappingFunction = (item, index) => {
    // return something in JSX.
    return <li key={index}>{item}</li>
  };
  
  const htmlList = originalData.map(mappingFunction);
  // the htmlList variable now contains a new array.
  return (
    <div>
      <ul>
        {htmlList}
      </ul>
    </div>
  );
}

export default App;
