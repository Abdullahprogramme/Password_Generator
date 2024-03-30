import React from "react";
import Header from "./Components/Header";
import Generator from "./Components/Generator";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#E9F6FF] w-full min-h-screen">
      <Header />
      <Generator />
      <Footer />
    </div>
  );
}

export default App;
