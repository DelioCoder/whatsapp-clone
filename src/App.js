import LoginScreen from "./pages/LoginScreen";
import useLocalStorage from './hooks/useLocalStorage';
import HomeScreen from "./pages/HomeScreen";

function App() {

  const [ id, setId ] = useLocalStorage('id');

  return (
    <div className="App">
      {
        id ? 
        (
          <HomeScreen id={id} />
        ) : (
          
          <LoginScreen onIdSubmit={setId} />
        )
      }
    </div>
  );
}

export default App;
