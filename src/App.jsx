
import './App.css'
import Hook from './Components/Hook/Hook/Hook'
import Refform from './Components/Refform'
import Reusable from './Components/ReusableForm/Reusable'
import StateForm from './Components/StateForm'

function App() {

   const handleSubmit =data =>{
    


    console.log('sign up data',data)


   }


//   const handleSignUp = e =>{

//     e.preventDefault();
//  }
 

  return (
    <>
    {/* <Hook></Hook> */}
    {/* <Refform></Refform> */}
      {/* <StateForm></StateForm> */}
      <Reusable formTitle={'sign up'} handleSubmit={handleSubmit}></Reusable>
      <Reusable formTitle={'sign in'} handleSubmit={handleSubmit}></Reusable>
    </>
  )
}

export default App
