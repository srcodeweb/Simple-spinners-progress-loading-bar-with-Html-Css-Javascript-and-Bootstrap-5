const body = document.body;
const bLoading = body.querySelector('.background-loading');
const sLoading = bLoading.querySelector('.spinner-border');
const pLoading = bLoading.querySelector('.progress > .progress-bar');
const MathRand = Math.random() * 100;

setTimeout(() => {
  bLoading.classList.remove('show-loading')
  bLoading.classList.add('hide-loading')
}, 2000); //Set Timer slide in here

//Random Color
if(MathRand > 0 && MathRand <= 25) {
  sLoading.classList.add('text-success');
  pLoading.classList.add('bg-success');
}

if(MathRand > 25 && MathRand <= 50) {
  sLoading.classList.add('text-danger');
  pLoading.classList.add('bg-danger');
}

if(MathRand > 50 && MathRand <= 75) {
  sLoading.classList.add('text-warning');
  pLoading.classList.add('bg-warning');
}

if(MathRand > 75 && MathRand <= 100) {
  sLoading.classList.add('text-white');
  pLoading.classList.add('bg-dark')
}