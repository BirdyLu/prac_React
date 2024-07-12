import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {

  return (
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} userName="Birdy"></UserGreeting>
      <List/>
      <Button/><button>default button</button>
      <br/>
      <Card name="魔芋爽" age={30} isStudent={false} />
      <Card name="Counter" TrashTalk={false}/>
      <Card name="Typing..." TrashTalk={false}/>
      <Card name="ColourPicker" TrashTalk={false}/>
      <Card name="ToDoList" TrashTalk={true}/>
      <Card name="DigitalClock" TrashTalk={false}/>
      <Footer/>
    </>
  );
}

export default App
