export default function Player({tabel,Masti}) {
    function bgCard(tabel){
      let check = 'url(/cards/' + tabel.trim() + '.png)';
      return check;
    }
  return (
    <>
    <div className='PlayerTabel' htmlFor="">
      {
      tabel.map((tabel) => 
        <div style={{background:bgCard(tabel),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',}} className={'Card'} key={tabel}>
        </div>
      )
      }
      </div>
    </>
  )
}
