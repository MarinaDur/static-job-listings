import Main from "./components/Main";
import { FilterProvider } from "./context/FilterContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <FilterProvider>
        <Main />
      </FilterProvider>
    </>
  );
}

export default App;
