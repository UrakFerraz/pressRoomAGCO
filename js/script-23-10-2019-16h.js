let slideTextsWrapper = document.querySelectorAll('.slideTextsWrapper');
let slideImgWrapper = document.querySelectorAll('.slideImgWrapper');
let arrowLeft = document.querySelector('.heroSliderArrowLeftBtns');
let arrowRight = document.querySelector('.heroSliderArrowRightBtns');
let cont = 0;
let fixedBlocksNews =document.querySelectorAll('.fixedBlocksNews');

slideTextsWrapper = Array.from(slideTextsWrapper);
slideImgWrapper = Array.from(slideImgWrapper);
fixedBlocksNews = Array.from(fixedBlocksNews);

fixedBlocksNews.forEach(function(el) {
	el.style.transform = `translateY(-${fixedBlocksNews.length-1}00%)`;
});

const totalSlides = slideTextsWrapper.length -1;

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

function nextSlide() {
	cont === totalSlides ? (
		cont = 0,
		slideTextsWrapper.forEach(el => {
			el.style.transform = `translateY(0%)`;
		}),
		slideImgWrapper.forEach(el => {
			el.style.transform = `translateX(0%)`;
		})
		) : (
		cont += 1,
		slideTextsWrapper.forEach(el => {
			el.style.transform = `translateY(-${cont}00%)`;
		}),
		slideImgWrapper.forEach(el => {
			el.style.transform = `translateX(-${cont}00%)`;
		})
		);
	console.log('left arrow click');
};

function prevSlide() {
	cont === 0 ? (
			cont = totalSlides,
			slideTextsWrapper.forEach(el => {
				el.style.transform = `translateY(-${cont}00%)`;
			}),
			slideImgWrapper.forEach(el => {
				el.style.transform = `translateX(-${cont}00%)`;
			})
		) : (
			cont -= 1,
			slideTextsWrapper.forEach(el => {
				el.style.transform = `translateY(-${cont}00%)`;
			}),
			slideImgWrapper.forEach(el => {
				el.style.transform = `translateX(-${cont}00%)`;
			})
		);
	console.log('right arrow click');
};