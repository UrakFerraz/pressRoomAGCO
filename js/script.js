let slideTextsWrapper = document.querySelectorAll('.slideTextsWrapper');
let slideImgWrapper = document.querySelectorAll('.slideImgWrapper');
let arrowLeft = document.querySelector('.heroSliderArrowLeftBtns');
let arrowRight = document.querySelector('.heroSliderArrowRightBtns');
let cont = 0;
let fixedBlocksNews =document.querySelectorAll('.fixedBlocksNews');
let slideAtual = fixedBlocksNews.length-1;

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
		slideAtual = fixedBlocksNews.length-1,
		slideTextsWrapper.forEach(el => {
			el.style.transform = `translateY(0%)`;
		}),
		slideImgWrapper.forEach(el => {
			el.style.transform = `translateX(0%)`;
		}),
		fixedBlocksNews.forEach(el => {
			el.style.transform = `translateY(-${slideAtual}00%)`;
		})
	) : (
		cont += 1,
		slideAtual -= 1,
		turnSlides()
	);
};

function prevSlide() {
	cont === 0 ? (
		cont = totalSlides,
		slideAtual = 0,
		turnSlides()
	) : (
		cont -= 1,
		slideAtual += 1,
		turnSlides()
	);
};

function turnSlides() {
	slideTextsWrapper.forEach(el => {
	el.style.transform = `translateY(-${cont}00%)`;
	});
	slideImgWrapper.forEach(el => {
		el.style.transform = `translateX(-${cont}00%)`;
	});
	fixedBlocksNews.forEach(el => {
		el.style.transform = `translateY(-${slideAtual}00%)`;
	});
};

let heroSliderContainer = document.querySelector('.heroSliderContainer');

heroSliderContainer.addEventListener('mouseover', function() {
	clearInterval(autoSlides);
	autoSlides = '';
});

heroSliderContainer.addEventListener('mouseleave', function() {
	clearInterval(autoSlides);
	autoSlides = '';
	let returnAutoSlides = setTimeout(function(){
		clearInterval(autoSlides);
		autoSlides = setInterval(nextSlide, 8000);
	},10000);
});

let autoSlides = setInterval(nextSlide, 8000);

















let headerSearchInputField = document.getElementById('headerSearchInputField');
let headerSearchBtn = document.getElementById('headerSearchBtn');
let headerSearchInput = document.querySelector('.headerSearchInput');

headerSearchBtn.addEventListener('click', openCloseSearch);

function openCloseSearch() {
		headerSearchInput.style.transform = 'translateY(0%)';
	setTimeout(function() {
		headerSearchInput.style.transform = 'translateY(150%)';
	},10000);
};







let headerScrollSearchInputField = document.getElementById('headerScrollSearchInputField');
let headerScrollSearchBtn = document.getElementById('headerScrollSearchBtn');
let headerScrollSearchInput = document.querySelector('.headerScrollSearchInput');

headerScrollSearchBtn.addEventListener('click', headerScrollOpenCloseSearchField);

function headerScrollOpenCloseSearchField() {
		headerScrollSearchInput.style.transform = 'translateY(0%)';
	setTimeout(function() {
		headerScrollSearchInput.style.transform = 'translateY(150%)';
	},10000);
};



















window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headerScroll").style.top = "0";
    document.getElementById("backToTopBtn").style.bottom = "27px";
  } else {
    document.getElementById("headerScroll").style.top = "-250px";
    document.getElementById("backToTopBtn").style.bottom = "-150px";
  }
}