window.addEventListener('load', () => {
    const btn = document.getElementById('toggle_btn');
    const img = document.getElementById('img_toggle');
    
    // Recupera a preferência do tema do localStorage para manter o theme escolhido 
    const theme = localStorage.getItem('theme');
    
    if (theme === 'light') {
        document.body.classList.add('ligth');
        img.src = './public/icons/moon.svg';
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('ligth');
        
        // Verifica o estado atual e salva no localStorage 
        if (document.body.classList.contains('ligth')) {
            localStorage.setItem('theme', 'light');
            img.src = './public/icons/moon.svg';
        } else {
            localStorage.setItem('theme', 'dark');
            img.src = './public/icons/sun.svg';
        }
    });
});
