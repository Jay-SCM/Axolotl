// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AppLauncher from '../components/AppLauncher';
// import Notepad from '../components/Notepad';
// import Spotify from '../components/Spotify';
// import styles from '../styles/Home.module.scss';

// const Home: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/callback" element={<Spotify />} />
//       </Routes>
//     </Router>
//   );
// };

// const Main: React.FC = () => {
//   return (
//     <div className={styles['home-container']}>
//       <div className={styles['main-content']}>
//         <div className={styles['app-launcher']}>
//           <AppLauncher />
//         </div>
//         <div className={styles['notepad']}>
//           <Notepad />
//         </div>
//       </div>
//       <div className={styles['spotify']}>
//         <Spotify />
//       </div>
//     </div>
//   );
// };

// export default Home;






import React from 'react';
import AppLauncher from '../components/AppLauncher';
import Notepad from '../components/Notepad';
import Spotify from '../components/Spotify';
import styles from '../styles/Home.module.scss'; 

const Home: React.FC = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['main-content']}>
        <div className={styles['app-launcher']}>
          <AppLauncher />
        </div>
        <div className={styles['notepad']}>
          <Notepad />
        </div>
      </div>
      <div className={styles['spotify']}>
        <Spotify />
      </div>
    </div>
  );
};

export default Home;

