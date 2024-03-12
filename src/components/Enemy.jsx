export default function Enemy({enemyTabel},tabel) {
   function checkMasti(Masty){
        if (Masty === 'П'){ return'piki'}
        else if (Masty === 'К'){  return 'crest'}
        else if (Masty === 'Ч'){ return 'chervi'}
        else if (Masty === 'Б'){ return'bybny'}
        
    }   

    


  return (
    <>
    <div className='Enemytabel' htmlFor="">
      {
      enemyTabel.map((tabel) => 
        <div className={'Card ' + checkMasti(tabel[0])} key={tabel} id={tabel} tabel={tabel}>{tabel[1] + tabel[2]}
        </div>
      )
      }
      </div>
    </>
  )
}
