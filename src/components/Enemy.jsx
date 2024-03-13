export default function Enemy({enemyTabel}) {
   function checkMasti(Masty){
        if (Masty === 'П'){ return'piki'}
        else if (Masty === 'К'){  return 'crest'}
        else if (Masty === 'Ч'){ return 'chervi'}
        else if (Masty === 'Б'){ return'bybny'}
        
    }   
    function bgCard(tabel){
      let check = 'url(/cards/' + tabel.trim() + '.png)';
      return check;
    }
    


  return (
    <>
    <div className='Enemytabel' htmlFor="">
      {
      enemyTabel.map((tabel) => 
        <div style={{background:bgCard(tabel),
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',}}
        className={'Card'}
         key={tabel} id={tabel}>
          
        </div>
      )
      }
      </div>
    </>
  )
}
