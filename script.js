
document.addEventListener('DOMContentLoaded', function(){
  // Simple mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', function(){ nav.style.display = nav.style.display === 'block' ? '' : 'block' });
  }
})

function handleSubmit(e){
  e.preventDefault();
  alert('Order submitted (demo). Replace with server-side form for production.');
  e.target.reset();
}
