import './styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SmoothScroll from 'smooth-scroll';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//скролл

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Скорость прокрутки
    speedAsDuration: true, // Использовать скорость как длительность прокрутки
  });


  //модалка

  document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Закрытие модального окна при нажатии на клавишу Esc
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });