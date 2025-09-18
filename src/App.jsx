import Header from './components/Header';
import Object from './components/Object';
import Subject from './components/Subject';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="container">
      <Header />
      <img src="banner.png" alt="FPT Aptech Banner" style={{ width: '100%', margin: '32px 0' }} />
      <Object />
      <Subject />
      <Footer /></div>
    </>
  );
}

export default App;