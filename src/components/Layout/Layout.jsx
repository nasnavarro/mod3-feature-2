import {Outlet} from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import BackendStatusBanner from '../BackendStatusBanner/BackendStatusBanner.jsx';

function Layout() {
  return (
    <>
      <BackendStatusBanner />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;