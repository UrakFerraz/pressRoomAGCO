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