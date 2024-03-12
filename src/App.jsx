import { useState } from 'react'
import './App.css'
import Player from './components/Player';
import Enemy from './components/Enemy';

function App() {

  let[winLose, setWinLose] = useState(false)

  let [randomBot, setRandomBot] = useState((Math.random() * (21 - 17) + 17).toFixed(0))
  let [tabel,setTabel] = useState([]);
  let [enemyTabel,setEnemyTabel] = useState([]);

  const [score,setScore] = useState(0);
  const [enemyscore,setEnemyScore] = useState(0);

  let [cards,setCards] = useState([
    'ПТз ','П2 ','П3 ','П4 ','П5 ','П6 ','П7 ','П8 ','П9 ','П10 ','ПВл ','ПДм ','ПКр ',

    'КТз ','К2 ','К3 ','К4 ','К5 ','К6 ','К7 ','К8 ','К9 ','К10 ','КВл ','КДм ','ККр ',

    'ЧТз ','Ч2 ','Ч3 ','Ч4 ','Ч5 ','Ч6 ','Ч7 ','Ч8 ','Ч9 ','Ч10 ','ЧВл ','ЧДм ','ЧКр ',

    'БТз ','Б2 ','Б3 ','Б4 ','Б5 ','Б6 ','Б7 ','Б8 ','Б9 ','Б10 ','БВл ','БДм ','БКр ',

  ])

// Функция отвечат за то, чтобы при нажатии добавлялась карта на поле и паралельно удалялась из общего числа карт, а так же добавляла значение к счёту очков
  function putCardOnTabel(){

    if (cards.length === 0) {
      return alert('Колода закончилась')
    }

    let minusCard = cards[Math.floor(Math.random() * cards.length)]
    setTabel((oldTabel) => [...oldTabel, minusCard ])

    setCards(cards.filter((card) => card !== minusCard))
    
    let newScore = minusCard[1] + minusCard[2]

    let rlyNewScore = newScore;
    switch (newScore){
      case 'Тз':
        rlyNewScore = 11;
        break;
      case 'Вл':
        rlyNewScore = 2;
        break;
      case 'Дм':
        rlyNewScore = 3;
        break;
      case 'Кр':
        rlyNewScore = 4;
        break;
    }
    rlyNewScore = Number(rlyNewScore)
    setScore((oldScore) => Number([oldScore + rlyNewScore]))
    // Если число больше 21, то ты проиграл
    if( score > 21){
      setWinLose('Вы проиграли');
      setTabel([]);
      setScore(0);
      setEnemyTabel([]);
      setEnemyScore(0)
      setCards([
      'ПТз ','П2 ','П3 ','П4 ','П5 ','П6 ','П7 ','П8 ','П9 ','П10 ','ПВл ','ПДм ','ПКр ',
  
      'КТз ','К2 ','К3 ','К4 ','К5 ','К6 ','К7 ','К8 ','К9 ','К10 ','КВл ','КДм ','ККр ',
  
      'ЧТз ','Ч2 ','Ч3 ','Ч4 ','Ч5 ','Ч6 ','Ч7 ','Ч8 ','Ч9 ','Ч10 ','ЧВл ','ЧДм ','ЧКр ',
  
      'БТз ','Б2 ','Б3 ','Б4 ','Б5 ','Б6 ','Б7 ','Б8 ','Б9 ','Б10 ','БВл ','БДм ','БКр ',
  
      ])
    }

  }

// Эта функция срабатывает только при нажатии кнопки PASS и проверяет очки между игроком и ботом.
// Взависимости от результата появляются разные Alert
  function goToBase(){
    if(enemyscore <= randomBot){
      botAction()
    } else if(enemyscore > 21){
      setWinLose('Вы выйграли');
      fuckGoBack();
    } else{
      if(score > enemyscore){
        setWinLose('Вы выйграли');
        fuckGoBack();
      } else if(enemyscore > score){
        setWinLose('Бот выйграл');
        fuckGoBack();
      } else if(enemyscore === score){
        setWinLose('Ничья');
        fuckGoBack();
      }
    }
    function fuckGoBack(){
    setTabel([]);
    setScore(0);
    setEnemyScore(0);
    setCards([
      'ПТз ','П2 ','П3 ','П4 ','П5 ','П6 ','П7 ','П8 ','П9 ','П10 ','ПВл ','ПДм ','ПКр ',
  
      'КТз ','К2 ','К3 ','К4 ','К5 ','К6 ','К7 ','К8 ','К9 ','К10 ','КВл ','КДм ','ККр ',
  
      'ЧТз ','Ч2 ','Ч3 ','Ч4 ','Ч5 ','Ч6 ','Ч7 ','Ч8 ','Ч9 ','Ч10 ','ЧВл ','ЧДм ','ЧКр ',
  
      'БТз ','Б2 ','Б3 ','Б4 ','Б5 ','Б6 ','Б7 ','Б8 ','Б9 ','Б10 ','БВл ','БДм ','БКр ',
  
    ])
    setEnemyTabel([]);
    setRandomBot((Math.random() * (21 - 17) + 17).toFixed(0))
    }
  }

// Просто функция, которая отвечает за действия бота, они аналогичны игроку
  function botAction(){

    let minusCard = cards[Math.floor(Math.random() * cards.length)]
    setEnemyTabel((oldTabel) => [...oldTabel, 
      minusCard 
    ])

    setCards(cards.filter((card) => card !== minusCard))
    
    let newScore = minusCard[1] + minusCard[2]

    let rlyNewScore = newScore;
    switch (newScore){
      case 'Тз':
        rlyNewScore = 11;
        break;
      case 'Вл':
        rlyNewScore = 2;
        break;
      case 'Дм':
        rlyNewScore = 3;
        break;
      case 'Кр':
        rlyNewScore = 4;
        break;
    }
    rlyNewScore = Number(rlyNewScore);
    setEnemyScore((oldScore) => Number([oldScore + rlyNewScore]));
  }


  return (
    <>
     <div className="container playerField">
      <div className='popUp' style={{opacity: winLose ? 1 : 0, top: winLose ? '50%' : '0%'}} onClick={() => setWinLose(false)}>{winLose}</div>
      <Player tabel={tabel} />

      <label htmlFor=""> Счёт очков: {score}</label>
      <div className="buttons">
        <button 
        className={score > 21 ? 'btn btn-danger button' : 'btn btn-success button'} 
        onClick={() => putCardOnTabel()} 
        disabled={enemyscore >21 ? true : false}
        >{score > 21 ? 'Проигрыш' : 'Взять карту'}</button>

        <button 
        className={enemyscore > 21 ? 'btn btn-success' : 'btn btn-danger'}
        disabled={score >21 ? true : false} 
        onClick={() => goToBase()}
        
        >{enemyscore > 21 ? 'Победа' : 'Пропустить ход'}</button>
      </div>
      <label htmlFor=""> Счёт очков противника: {enemyscore}</label>
      <Enemy enemyTabel={enemyTabel} tabel={console.log(tabel)}/>
     </div>
    </>
  )
}

export default App
