// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Main from './Components/Main'; // Import the Main component
// import Login from './Components/Login';
// import Register from './Components/Register';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Main />} />
//           {/* Add more routes here if needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import Register from './Components/Register';
import { ProfileProvider } from './Context/ProfileContext';

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Main />} />
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
