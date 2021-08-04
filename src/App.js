import LoginScreen from "./pages/LoginScreen";
import useLocalStorage from './hooks/useLocalStorage';
import HomeScreen from "./pages/HomeScreen";
import { ContactsProvider } from "./contexts/ContactsProvider";

function App() {

  const [ id, setId ] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <HomeScreen id={ id } />
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
