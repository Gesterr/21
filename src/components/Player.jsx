export default function Player({tabel,Masti}) {
    function checkMasti(Masty){
        if (Masty === 'П'){ return 'piki'}
        else if (Masty === 'К'){ return 'crest'}
        else if (Masty === 'Ч'){ return 'chervi'}
        else if (Masty === 'Б'){ return 'bybny'}
      }
  return (
    <>
    <div className='PlayerTabel' htmlFor="">
      {
      tabel.map((tabel) => 
        <div className={'Card ' +  checkMasti(tabel[0])} key={tabel}>{tabel[1] + tabel[2]}
        </div>
      )
      }
      </div>
    </>
  )
}
