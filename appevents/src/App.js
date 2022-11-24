import { WrapperApp } from "./components/Goba/WrapperApp";
import RootNavigator from "./routes/RootNavigator";

function App() {
  return (
    <WrapperApp>
        <div className="wrapperApp">
          <RootNavigator />
      </div>
    
    </WrapperApp>
  );
}

export default App;
