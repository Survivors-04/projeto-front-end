import booster_01 from "../../assets/imgs/boosters/booster_01.png";

interface iBoosters {
  imgUrl: string;
  title: string;
  price: string;
}

const boosters: iBoosters[] = [
  {
    imgUrl: booster_01,
    title: "Pacote 01",
    price: "100g",
  },
  {
    imgUrl: booster_01,
    title: "Pacote 01",
    price: "100g",
  },
  {
    imgUrl: booster_01,
    title: "Pacote 01",
    price: "100g",
  },
  {
    imgUrl: booster_01,
    title: "Pacote 01",
    price: "100g",
  },
];

export default boosters;
