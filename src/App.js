import LoginScreen from "./pages/LoginScreen";
import useLocalStorage from './hooks/useLocalStorage';
import HomeScreen from "./pages/HomeScreen";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationProvider } from "./contexts/ConversationProvider";

function App() {

  const [ id, setId ] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <ConversationProvider>
        <HomeScreen id={ id } />
      </ConversationProvider>
    </ContactsProvider>
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
