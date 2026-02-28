// Кастомний курсор
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Функція перемикання категорій
function showCategory(categoryId, tabId) {
    // Ховаємо весь контент
    document.querySelectorAll('.category-content').forEach(c => c.classList.remove('active'));
    // Знімаємо активність з кнопок
    document.querySelectorAll('.c-tab').forEach(t => t.classList.remove('active'));
    
    // Активуємо потрібне
    const targetCat = document.getElementById('cat-' + categoryId);
    const targetTab = document.getElementById(tabId);
    
    if(targetCat) targetCat.classList.add('active');
    if(targetTab) targetTab.classList.add('active');

    // Скролимо до каталогу, якщо натиснули кнопку в Hero
    if (tabId === 't-tab1' || tabId === 't-tab3') {
        document.querySelector('.catalog-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Скрол анімація
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add("active");
    });
}

// Вхід на сайт
function enterSite() {
    const splash = document.getElementById('welcome-screen');
    const site = document.getElementById('site-wrapper');
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
        site.style.display = 'block';
        setTimeout(() => { 
            site.style.opacity = '1'; 
            window.addEventListener("scroll", reveal);
            reveal(); 
        }, 50);
    }, 600);
}

// Фоновий текст
window.onload = () => {
    const layer = document.getElementById('pattern-layer');
    for (let i = 0; i < 80; i++) {
        const div = document.createElement('div');
        div.className = 'bg-word';
        div.innerText = 'RBK-GROUP';
        layer.appendChild(div);
    }
};