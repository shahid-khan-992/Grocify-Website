import React, { useState } from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


const Category = () => {
  const [cardData, setCardData] = useState(category);

  return (
    <section>
      <div className="py-20 max-w-[1200px] mx-auto px-10">
        <Heading highlight="Shop" heading="by Category" />

        <div className="flex flex-wrap gap-10 md:mt-15">
          {cardData.map((curElem) => {
            const { id, title, description, image, path } = curElem;
            return (
              <>
                {/* CARD */}
                <div key={id} className="flex-1 basis-[300px]">
                  {/* CARD IMAGE */}
                  <div className="w-full min-h-[25vh] relative -mb-9">
                    <img src={image} alt="img" className="absolute bottom-0" />
                  </div>

                  {/* CARD CONTENT */}
                  <div className="bg-zinc-200 pt-15 p-8 rounded-xl">
                    <h3 className="text-zinc-800 text-2xl font-bold">
                      {title}
                    </h3>
                    <p className="text-zinc-600 my-5">{description}</p>
                    <Link to={path}>
                      <Button content="See All"/>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      'The mango is a juicy, sweet tropical fruit known as the "king of fruits." It has a rich golden-yellow flesh with a unique aroma and flavor, packed with vitam.',
    image: FruitsCat,
    path: '/fruits' 
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Apples are crisp, sweet or tangy fruits with smooth skin, commonly red, green, or yellow. They are rich in fiber and antioxidants, making them a healthy snack.",
    image: DairyCat,
    path: '/dairy' 
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "Bananas are soft, sweet fruits with a yellow peel and creamy interior. They are a great source of potassium and energy, often eaten as a quick, healthy snack.",
    image: SeaFoodCat,
    path: '/seafoods' 
  },
];
