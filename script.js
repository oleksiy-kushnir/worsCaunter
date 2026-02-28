const langData = {
  uk: {
    welcome: "YO! ВАС ВІТАЄ РБК-ГРУП", enter: "↑<br>УВІЙТИ НА САЙТ",
    cat: "КАТАЛОГ", comp: "КОМПАНІЯ", collab: "СПІВПРАЦЯ", cont: "КОНТАКТИ",
    hero: "Партнерська програма для забудовників",
    f1: "Власне виробництво", f2: "Виготовлення під замовлення",
    f3: "Умови для забудовників", f4: "Великий склад",
    catTitle: "Каталог продукції", t1: "Бруківка", t2: "Бордюри", t3: "Блоки", t4: "Дизайн"
  },
  en: {
    welcome: "YO! WELCOME TO RBK-GROUP", enter: "↑<br>ENTER THE SITE",
    cat: "CATALOG", comp: "COMPANY", collab: "COLLABORATION", cont: "CONTACTS",
    hero: "Partner Program for Developers",
    f1: "Own production", f2: "Custom manufacturing",
    f3: "Terms for developers", f4: "Big warehouse",
    catTitle: "Product Catalog", t1: "Paving", t2: "Borders", t3: "Blocks", t4: "Design"
  }
};

// Функція перемикання категорій
function showCategory(categoryId, btn) {
    // 1. Приховати весь контент категорій
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Зняти клас active з усіх кнопок табів
    const tabs = document.querySelectorAll('.c-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 3. Показати потрібну категорію
    const targetCategory = document.getElementById('cat-' + categoryId);
    if(targetCategory) targetCategory.classList.add('active');

    // 4. Активувати кнопку
    if (btn) {
        btn.classList.add('active');
    } else {
        // Якщо натиснуто через меню, знайти кнопку
        const tabMap = { 'paving': 't-tab1', 'borders': 't-tab2', 'blocks': 't-tab3', 'design': 't-tab4' };
        const tabBtn = document.getElementById(tabMap[categoryId]);
        if(tabBtn) tabBtn.classList.add('active');
        document.querySelector('.catalog-section').scrollIntoView({ behavior: 'smooth' });
    }
}

function changeLang(lang) {
  document.getElementById('t-welcome').innerText = langData[lang].welcome;
  document.getElementById('t-enter-btn').innerHTML = langData[lang].enter;
  document.getElementById('t-nav-cat').innerText = langData[lang].cat;
  document.getElementById('t-nav-comp').innerText = langData[lang].comp;
  document.getElementById('t-nav-collab').innerText = langData[lang].collab;
  document.getElementById('t-nav-cont').innerText = langData[lang].cont;
  document.getElementById('t-hero-h1').innerText = langData[lang].hero;
  document.getElementById('t-f1').innerText = langData[lang].f1;
  document.getElementById('t-f2').innerText = langData[lang].f2;
  document.getElementById('t-f3').innerText = langData[lang].f3;
  document.getElementById('t-f4').innerText = langData[lang].f4;
  document.getElementById('t-cat-title').innerText = langData[lang].catTitle;
  document.getElementById('t-tab1').innerText = langData[lang].t1;
  document.getElementById('t-tab2').innerText = langData[lang].t2;
  document.getElementById('t-tab3').innerText = langData[lang].t3;
  document.getElementById('t-tab4').innerText = langData[lang].t4;
  document.getElementById('active-lang').innerText = lang.toUpperCase();
}

function enterSite() {
  const splash = document.getElementById('welcome-screen');
  const site = document.getElementById('site-wrapper');
  splash.style.transition = '0.8s';
  splash.style.opacity = '0';
  setTimeout(() => {
    splash.style.display = 'none';
    site.style.display = 'block';
    setTimeout(() => { site.style.opacity = '1'; }, 50);
  }, 800);
}