// Mobile menu toggle
function toggleMenu(){
  const el = document.getElementById('menu');
  el.style.display = (el.style.display === 'flex') ? 'none' : 'flex';
}

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      const menu = document.getElementById('menu');
      if(getComputedStyle(menu).position==='absolute'){ menu.style.display='none'; }
    }
  })
})

// Demo Add to Cart buttons
document.querySelectorAll('.prod .btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.textContent = 'Added ✓';
    setTimeout(()=> btn.textContent='Add to Cart', 1500);
  });
});
