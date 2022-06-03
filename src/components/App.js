import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../services/api';
import Modal from './Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/App.css';
import Loader from './Loader/Loader';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImage] = useState([]);
  const [modalImg, setModalImg] = useState('');

  const formSubmitHandler = query => {
    if (query.trim() === '') {
      return toast.error('image not found', 2000);
    }
    setQuery(query);
    setIsPending(true);
    setImage([]);
    setPage(1);
  };
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleToggleModal = image => {
    setIsModalOpen(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalImg: image,
    }));
    setModalImg(image);
  };

  useEffect(() => {
    if (!query || !page) {
      return;
    }

    fetchImages(query, page).then(img => {
      if (img.length === 0) {
        toast.error('no pictures');
      }

      setIsPending(false);
      setImage(prev => [...prev, ...img]);
    });
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    setIsPending(true);
  };

  return (
    <div>
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery handleToggleModal={handleToggleModal} images={images} />
      {images.length >= 12 && (
        <Button handleLoadMore={handleLoadMore.bind(this)} />
      )}

      {isPending && <Loader />}
      {isModalOpen && <Modal modalImg={modalImg} onClose={closeModal} />}
      <ToastContainer />
    </div>
  );
}
