import { useState } from "react";
import Form from "./components/form/Form";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import SideDrawer from "./components/sider-drawer/SideDrawer";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const showDrawerHandler = () => {
    setShowDrawer(true);
  };

  const hideDrawerHandler = () => {
    setShowDrawer(false);
  };
  return (
    <>
      {showDrawer && <SideDrawer onClose={hideDrawerHandler} />}
      <Header onClick={showDrawerHandler} />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
