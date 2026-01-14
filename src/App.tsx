import "./css/App.css";
import Nav from "./sections/nav";
import Routes from "./components/Routes";
import Footer from "./sections/footer";
import "./css/font.css";

function App() {
  return (
    <div className="app-root">
      <Nav />

      <main className="app-main">
        <Routes />
      </main>

      <Footer />
    </div>
  );
}

export default App;

