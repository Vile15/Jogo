//acessos
const OB1 = document.querySelector('.OB1')
var RE = document.querySelector('.start') 
const koku = document.querySelector('#koku')
const G = document.querySelector('.G')
     
     //tela inicial
     

     
       function hide(){
           RE.style.visibility = 'hidden'
           OB1.style.animationPlayState = 'running'
       
       
       
           
       }
     
      //coordenar comando
document.addEventListener('touchstart', jump) 

//adicionar comando

function jump() {
   koku.classList.add('jump')
   
   setTimeout(() => {

    koku.classList.remove('jump')
    },500)
    }
        //colisão 
  const GO = setInterval(() => {
      
      const positionVictorGabrielFolha= OB1.offsetLeft
      
     const positionkoku =  +getComputedStyle(koku).bottom.replace('px', '') 
      //game over
if (positionVictorGabrielFolha <= 20 && positionVictorGabrielFolha > 0 && positionkoku < 70) {
      
      OB1.style.animation = 'none'
      OB1.style.left = `${positionVictorGabrielFolha}px`
     
      koku.style.animation = 'none'
      koku.style.bottom = `${positionkoku}px`
      
      koku.src = 'gameover.png'
      koku.style.height = '130px'
      koku.style.marginLeft = '-40px'
      koku.style.bottom = '0px'
      
      G.style.visibility = 'visible'
      
      }
       
   },10)

