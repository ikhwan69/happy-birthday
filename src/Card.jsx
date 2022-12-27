import firli from "./assets/firli.png";
import firli2 from "./assets/firli2.jpg";
import music from "./assets/hbd.mp3";

import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    document.getElementById("song").play().catch((error) => {
      document.addEventListener('click', () => {
        document.getElementById("song").play()
      }, {once: true})
    })
  }, [])
  return (
    <>
      <audio id="song">
        <source src={music} type="audio/mp3" />
      </audio>
      <div className="birthdayCard logo react">
        <div className="cardFront">
          <div className="happy">
            <h3 className="font-medium">Barakallah Fii Umrik</h3>
            <p className="text-[10px] text-slate-200">Klik</p>
          </div>

          <img src={firli} alt="" />
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside px-4 text-center">
          <h3 className="back">Barakallah fii umrik</h3>
          <img
            src={firli2}
            alt="firli2"
            className=" border mx-auto w-28 h-28 rounded-full mb-2 object-cover object-top flex justify-center"
          />
          <p>Dear My Friend</p>
          <p className="font-bold">Muhammad Firliansyah</p>
          <p className="my-2 text-sm">
            "Hari yang indah untuk temanku; <br /> harapan dan impian yang saya
            kirimkan kepadamu. Semoga semua baik dan semua menjadi kenyataan di
            hari yang sangat istimewa ini"
          </p>
          <div className="text-center my-6">
            <p className=" text-md font-bold">Selamat Ulang tahun</p>
            <p className="text-sm">27 Desember 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
