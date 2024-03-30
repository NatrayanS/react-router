
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import All from './components/All';
import Top from './components/TopNavbar';
import Fullstack from './components/Fullstack';
import Datascience from './components/Datascience';
import Cybersecurity from './components/Cybersecurity';
import Career from './components/Career';
import {dataList} from './data'

function App() {

  return (
    <div className='container-fluid m-0 p-0' >
      <BrowserRouter>
        <Top />
        <Routes>
          
            <Route path="/" element={<All data={dataList} />} />
            <Route path="/fullstack" element={<Fullstack data={dataList}  />} />
            <Route path="/data-science" element={<Datascience data={dataList} />} />
            <Route path="/cybersecurity" element={<Cybersecurity data={dataList} />} />
            <Route path="/career" element={<Career data={dataList} />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;