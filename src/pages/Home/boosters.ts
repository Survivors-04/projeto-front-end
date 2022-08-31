import booster_01 from "../../assets/imgs/boosters/booster_01.png";

interface iBoosters {
  imgUrl: string;
  title: string;
  price: string;
  teste?: object;
}

const boosters: iBoosters[] = [
  {
    imgUrl: booster_01,
    title: "Pacote 01",
    price: "100g",
  },
  {
    imgUrl: booster_01,
    title: "Pacote 02",
    price: "200g",
  },
  {
    imgUrl: booster_01,
    title: "Pacote 03",
    price: "300g",
  },
  {
    imgUrl: booster_01,
    title: "Pacote 04",
    price: "400g",
  },
];

export default boosters;
