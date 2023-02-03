document.getElementById('color').addEventListener('click', function(){
    document.documentElement.style.setProperty('--color-primario', 'whitesmoke');
    document.documentElement.style.setProperty('--color-secundario', '#db89bd');
    document.documentElement.style.setProperty('--color-terciario', '#98999c');
    document.documentElement.style.setProperty('--color-cuaternario', 'white');
    document.body.style.backgroundColor = ('black')
})

document.getElementById('color-restablecer').addEventListener('click', function(){
    document.documentElement.style.setProperty('--color-primario', '#212529');
    document.documentElement.style.setProperty('--color-secundario', '#373b44');
    document.documentElement.style.setProperty('--color-terciario', '#db89bd');
    document.documentElement.style.setProperty('--color-cuaternario', 'whitesmoke');
    document.body.style.backgroundColor = ('')
})

document.getElementById('ocultar').addEventListener('click', function(){
    document.getElementById('info-p').style.display = 'none';
})

document.getElementById('mostrar').addEventListener('click', function(){
    document.getElementById('info-p').style.display = '';
})

document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('saludo-p').style.opacity = '';
    document.getElementById('saludo-p').style.pointerEvents = '';
})

document.getElementById('abrir').addEventListener('click', function(){
    document.getElementById('saludo-p').style.opacity = '1';
    document.getElementById('saludo-p').style.pointerEvents = 'auto';
})