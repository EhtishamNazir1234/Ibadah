import React, { useState } from "react";
import Modal from "./Modal";
import Register from "./Register";
import Login from "./Login";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
    setRegister(false);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setRegister(false);  
  };

  const handleOpenRegister = () => {
    setRegister(true);
  };
  return (
    <div>
      <Header onOpenModal={handleOpenModal} />
      <Body />
      <Footer />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {isRegister ? (
            <Register onOpenModal={handleOpenModal} />
          ) : (
            <Login onOpenRegister={handleOpenRegister} />
          )}
        </Modal>
      )}
      
    </div>
  );
};

export default Home;
