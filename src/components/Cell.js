import phone from "./home-yemeksepeti-apps.png"

function Cell() {
  return (
    <div id="cell">
        <img src={phone} alt="phone" id="phone"/>
        <h3>Yemek ve market ihtiyaçlarının tamamı için hemen indir!</h3>
        <p>Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların dakikalar içinde kapında. Yemeksepeti’ni indir, sepetini oluşturup siparişini ver, online ya da kapıda dilediğin gibi öde.</p>
        <div id='stores'>
            <a href="https://apps.apple.com/tr/app/yemeksepeti-yemek-market/id373034841?l=tr"><div className="store" id='apple'></div></a>
            <a href="https://play.google.com/store/apps/details?id=com.inovel.app.yemeksepeti&hl=en&gl=US"><div className="store" id='google'></div></a>
        </div>
    </div>
  );
}

export default Cell;
