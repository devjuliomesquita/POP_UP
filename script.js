document.querySelector('.conteiner__btn--open').onclick = () => {
    document.querySelector('.pop_up-box').classList.add('active');
};

document.querySelector('.btn--closed').onclick = () =>{
    document.querySelector('.pop_up-box').classList.remove('active');
};