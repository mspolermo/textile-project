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

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Скорость прокрутки
    speedAsDuration: true, // Использовать скорость как длительность прокрутки
  });