import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js"
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <>
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
    </>
  );
}

export default App;
