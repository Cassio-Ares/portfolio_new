window.addEventListener('load', ()=>{
    const btn = document.getElementById('toggle_btn')
    const img = document.getElementById('img_toggle')

    btn.addEventListener('click', ()=>{
        document.querySelector('body').classList.toggle('ligth')

        if(document.body.classList.contains('ligth')){
            img.src = './public/icons/moon.svg';
        }else{
            img.src = './public/icons/sun.svg';
        }
    })
})