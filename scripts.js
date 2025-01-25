// 漢堡選單展開/收合
const nav = document.querySelector('.nav');
const toggleButton = document.querySelector('.btn-header');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 表單提交驗證
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('表單已成功提交，我們會盡快與您聯絡！');
});

// 滾動觸發效果
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.2,
    }
);

document.querySelectorAll('.service-card, .about, .contact').forEach((el) => {
    observer.observe(el);
});
