import { Clients, Features, Footer, Frame, Header, Hero, Pana, Stats, Tesla } from "./Components"

function App() {
  return (
     <div className=" min-h-screen overflow-x-hidden relative z-0">
       <div className=" sticky top-0 z-10">
            <Header/>
       </div>
       <Hero/>
       <Clients/>
       <Features/>
       <Frame/>
       <Stats/>
       <Pana/>
       <Tesla/>
       <Footer/>
     </div>
  )
}

export default App
