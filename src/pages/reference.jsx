import '../styles/reference.css';
import LeftSideMenu from '../components/Reperence/Lists';
import RightSection from '../components/Reperence/RightSection';
import Footer from '../components/Footer';
function App() {
  return (
    <>
    {/* <Navbar /> */}
      <div className="Reference_main">
      <LeftSideMenu className="Reperence_left" />
      <RightSection className="Reperence_right" />
      </div>
      <Footer />
    </>
  );
}

export default App;
