import React, { useState } from "react";
import Modal from "./Modal";

import Login from "./Login";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div>
      <Header onOpenModal={handleOpenModal} />
      <Body />
      <Footer />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Login />
        </Modal>
      )}
      ;
    </div>
  );
};

export default Home;
