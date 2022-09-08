import booster_01 from "../../assets/imgs/boosters/booster_01.png";
import booster_02 from "../../assets/imgs/boosters/booster_02.png";
import booster_03 from "../../assets/imgs/boosters/booster_03.png";
import booster_04 from "../../assets/imgs/boosters/booster_04.png";


interface iBoosters {
  imgUrl: string;
  title: string;
  price?: number;
}

const boosters: iBoosters[] = [
  {
    imgUrl: booster_01,
    title: "Pacote 01",
    price: 100,
  },
  {
    imgUrl: booster_02,
    title: "Pacote 02",
    price: 200,
  },
  {
    imgUrl: booster_03,
    title: "Pacote 03",
    price: 300,
  },
  {
    imgUrl: booster_04,
    title: "Próxima geração"
  },
];

export default boosters;
