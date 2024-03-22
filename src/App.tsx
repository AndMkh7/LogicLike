import { ThemeProvider } from "./context/context";
import Home from "./components/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
        }}
      >
        <header>
          <div>
            <Home />
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
