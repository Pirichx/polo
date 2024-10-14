// Функция для создания падающих сердец
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Случайная позиция для сердец по горизонтали
    heart.style.left = Math.random() * window.innerWidth + 'px';

    // Добавляем сердце в контейнер
    document.querySelector('.hearts-container').appendChild(heart);

    // Удаляем сердце через 5 секунд, чтобы не засорять DOM
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Каждые 500 мс создаем новое сердце
setInterval(createHeart, 500);
