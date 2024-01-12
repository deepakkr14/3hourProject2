import Form from "./components/addingForm";
import Cart from "./components/cartButton";
import List from "./components/list";
import ContextProvider from "./Store/contextProvider";
function App() {
  return (
    <ContextProvider>
    <div>
      <h2>MEDI-Buddy</h2>
      <Cart/>
      <Form/>
      <List/>
    </div>
    </ContextProvider>
  );
}

export default App;
