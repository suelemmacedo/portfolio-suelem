function ativaLetra(elemento){
  const arrTexto = elemento.innerText.split('');
  elemento.innerText = '';
  arrTexto.forEach((letra, i)=>{
    setTimeout(()=>{
      elemento.innerText += letra;
    }, 75 * i);
  });
}

const title = document.querySelector('.digitando');
ativaLetra(title);


// visto no canal codigo tech https://www.youtube.com/watch?v=R6anx5i8AOQ

const button = document.getElementById('button');
button.addEventListener('click', function(){
  window.location.href = "Contatos.html";
});
