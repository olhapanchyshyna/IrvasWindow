import './slider';
import modal from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    const deadline = '2023-07-23';

    changeModalState(modalState);
    modal(modalState);
    tabs();
    forms(modalState);
    timer('#timer',deadline);
    images();
});