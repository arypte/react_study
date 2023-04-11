import ContactMe from './components/contactMe';
import Footer from './components/footer';
import Header from './components/header';
import Introduce from './components/introduce';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />

        <Portfolio />

        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
