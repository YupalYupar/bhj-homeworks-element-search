const listImg = Array.from(document.querySelectorAll('.slider__item'))
const prevSlide = document.querySelector('.slider__arrow_prev')
const nextSlide = document.querySelector('.slider__arrow_next')

nextSlide.onclick = () => {
    const activeSlide = document.querySelector('.slider__item_active')
    let index = listImg.findIndex(item => item == activeSlide)
    index < listImg.length -1 ? ( index += 1 ) : ( index = 0 )
    activeSlide.className = 'slider__item',
    listImg[index].classList.add('slider__item_active')
};

prevSlide.onclick = () => {
    const activeSlide = document.querySelector('.slider__item_active')
    let index = listImg.findIndex(item => item == activeSlide)
    index > 0 ? ( index -= 1 ) : ( index = listImg.length - 1 )
    activeSlide.className = 'slider__item',
    listImg[index].classList.add('slider__item_active')
};