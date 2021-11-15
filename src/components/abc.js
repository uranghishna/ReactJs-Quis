// import React from "react";
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";
// import Title from "./components/Title";

// const App = () => {

//   let title = "Belajar Vue";
//   title = "Belajar React"

//   const description = "Uranghishna"

//   function showHello(){
//     const sum = 1+2;
//     return "Hello World !!! "+sum;
//   };

//   const showHello2 = () =>{
//     return "Hello uranghishna";
//   };

//   const showHello3 = (params) => {
//     return params;
//   };
  
//   const alertTitle = () =>{
//     alert("Hello dari parent")
//   };

//   const profile = 
//     {
//     id: 1,
//     name: "hishna",
//     location: "indonesia"
//     };
  
//   const profiles = [
//     {
//     id: 1,
//     name: "hishna",
//     location: "indonesia"
//     },
//     {
//     id: 2,
//     name: "difa",
//     location: "bandung"
//     },
//     {
//     id: 3,
//     name: "ismail",
//     location: "garut"
//     }
//   ];

//   const isShow = false;

//   return(
//     <div>
//     {isShow? (
//       <h1>Hallo ini dari conditional rendering</h1>
//     ) : (
//       <h1>wah ga boleh</h1>
//     ) }
//     <Header />
//     <Title title={title} alertTitle={alertTitle} profile={profile} profiles={profiles}/>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//     <h2>{showHello()}</h2>
//     <h2>{showHello2()}</h2>
//     <h2>{showHello3("ini params")}</h2>
//     <Content>
//     <h1>ini adalah app bb</h1>
//     <h1>ini adalah app bb</h1>
//     </Content>
//     <Footer />
//     </div>
//   );
// };

// export default App;

