import ankara from './city-tile-ankara.jpg'
import antalya from './city-tile-antalya.jpg'
import bursa from './city-tile-bursa.jpg'
import istanbul from './city-tile-istanbul.jpg'
import izmir from './city-tile-izmir.jpg'

function Grid() {
    return (
      <div id='grid'>
        <h2>Türkiye'nin her şehrindeyiz!</h2>
    <div><a href="https://www.yemeksepeti.com/city/ankara"><img src={ankara} alt="ankara" className='sehir'/><span className="isim">Ankara</span></a></div>
    <div><a href="https://www.yemeksepeti.com/city/antalya"><img src={antalya} alt="antalya" className='sehir'/><span className="isim">Antalya</span></a></div>
    <div><a href="https://www.yemeksepeti.com/city/bursa"><img src={bursa} alt="bursa" className='sehir'/><span className="isim">Bursa</span></a></div>
    <div><a href="https://www.yemeksepeti.com/city/istanbul"><img src={istanbul} alt="istanbul" className='sehir'/><span className="isim">İstanbul</span></a></div>
    <div><a href="https://www.yemeksepeti.com/city/izmir"><img src={izmir} alt="izmir" className='sehir'/><span className="isim">İzmir</span></a></div>
      </div>
    );
  }
  
  export default Grid;
  