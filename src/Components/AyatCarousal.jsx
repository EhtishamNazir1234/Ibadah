import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import img17 from "../assets/ayat.png";

const ayats = [
 
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship [comes] ease. (94:6)",
  },
  {
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    translation: "Allah is the Light of the heavens and the earth. (24:35)",
  },
  {
    arabic: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
    translation: "And say, 'My Lord, increase me in knowledge.' (20:114)",
  },
];

const AyatCarousel = () => {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {ayats.map((ayat, index) => (
          <div
            key={index}
            className="p-6 bg-#fff7cd rounded-xl shadow-md"
            style={{ backgroundColor: "#fff7cd" }}
          >
            <p className="text-2xl text-center font-semibold text-gray-800 mb-2">
              {ayat.arabic}
            </p>
            <p className="text-center text-gray-600 italic">
              {ayat.translation}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AyatCarousel;
