import LoginScreen from "./pages/LoginScreen";
import useLocalStorage from './hooks/useLocalStorage';
import HomeScreen from "./pages/HomeScreen";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationProvider } from "./contexts/ConversationProvider";
import SocketProvider from "./contexts/SocketProvider";

function App() {

  const [ id, setId ] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id} >
      <ContactsProvider>
        <ConversationProvider id={id} >
          <HomeScreen id={ id } />
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <div className="App">
      {
        id ? 
        (
          dashboard
        ) : (
          
          <LoginScreen onIdSubmit={setId} />
        )
      }
    </div>
  );
}

export default App;
