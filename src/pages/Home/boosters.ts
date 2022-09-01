import booster_01 from "../../assets/imgs/boosters/booster_01.png";

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
    imgUrl: booster_01,
    title: "Pacote 02",
    price: 200,
  },
  {
    imgUrl: booster_01,
    title: "Pacote 03",
    price: 300,
  },
  {
    imgUrl: booster_01,
    title: "Próxima geração"
  },
];

export default boosters;
