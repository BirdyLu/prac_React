import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'

function App() {

  return (
    <>
      <Header/>
      <Food/>
      <Button/><button>default button</button>
      <br/>
      <Card/><Card/><Card/><Card/><Card/>
      <Footer/>
    </>
  );
}

export default App
