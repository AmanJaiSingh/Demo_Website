import React from "react";
import Header from "../Boilerplate/Header";
import Footer from "../Boilerplate/Footer";
import Card from "../Boilerplate/Card";

const indian = [
  [
    "Malai Kofta (Paneer Balls in a Thick Sauce)",
    "Malai means cream and Kofta are fried dumpling balls.",
    "₹200",
    "https://www.thespruceeats.com/thmb/0OqhTGqIogJlG6YYpoFs3IKc_8U=/2396x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malai-kofta-vege-balls-in-a-thick-sauce-1957964_hero-01-474bc099313944668d3b2c68b88549d5.jpg",
  ],
  [
    "Mutter Paneer (Peas and Cottage Cheese)",
    "A popular Indian Curry dish made with green peas and Indian cottage cheese",
    "₹250",
    "https://www.thespruceeats.com/thmb/0akbs0HbQ4S6sGxlB5Cnvsu9S2U=/2200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mutter-paneer-peas-cottage-cheese-curry-1957971-hero-01-fe2c40de95ce41358589b3a7f01b2d97.jpg",
  ],
  [
    "Gobi Makhani (Whole Roasted Butter Cauliflower)",
    "Shallow fried cauliflower florets cooked in a buttery silky tomato based gravy.",
    "₹100",
    "https://www.thespruceeats.com/thmb/8o291qBNmQUTP6yXxXNOZ9dNVek=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Step_17-Whole_Roasted_Cauliflower_Butter_Chicken_Style-5a2b31914e46ba0036bc221e.jpg",
  ],
  [
    "Chole (Chickpea Curry)",
    "chole or chholay, is a dish originating from the Indian subcontinent.",
    "₹180",
    "https://www.thespruceeats.com/thmb/9a_DPB7DQ4jr-Z7upSu-ocHduGE=/1940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chole-chickpea-curry-1957946-hero-01-a740af2e2b984ddca9e93096d6bc4c89.jpg",
  ],
  [
    "Fried Paneer Pakora",
    "Paneer pakora is a popular evening snack from North Indian cuisine.",
    "₹150",
    "https://www.thespruceeats.com/thmb/mWuI1M6aYxew4KzLBvI4ZqVBPrg=/983x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FriedPaneerCheesePakora-TheSpruce-AhlamRaffii-cb0ffdcc344447e08c71dbef2f39a330.jpg",
  ],
];

const italian = [
  [
    "Eggplant Rollatini",
    "Eggplant Rollatini Tips Eggplant rollatini is a dish consisting of thin slices of eggplant",
    "₹180",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/Eggplant-Rollatini_EXPS_THCA19_41566_B08_07_1b-6.jpg",
  ],
  [
    "Homemade Ravioli",
    "Homemade ravioli is healthier and tastier when compared with pasta.",
    "₹200",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps41527_CS143613B11_11_8b-4.jpg",
  ],
  [
    "Linguine with Fresh Tomatoes",
    "This garlic and basil linguine is a perfect way to use up your late-summer tomato harvest.",
    "₹280",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/Linguine-with-Fresh-Tomatoes_EXPS_SDAS17_15594_C04_06_6b.jpg",
  ],
  [
    "Grilled Bruschetta",
    "Dijon mustard, mayonnaise and oregano make a savory spread for chopped tomatoes, garlic and fresh basil in this fun twist on a favorite appetizer.",
    "₹200",
    "https://www.tasteofhome.com/wp-content/uploads/2019/05/Grilled-Bruschetta_EXPS_THJJ19_190766_C02_19_6b-2.jpg",
  ],
  [
    "Make-Ahead Spinach Manicotti",
    "Recipe for make ahead spinach manicotti using uncooked manicotti shells, part of a large collection of party food recipes from Photo Party Favors.",
    "₹400",
    "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps9869_SD153208B08_14_3b-2.jpg",
  ],
];

const chinese = [
  [
    "Steamed Vermicelli Rolls",
    " In this dish, rice is spread across a multi-layered box or cloth to steam and then enhanced with meat, fish or shrimp.",
    "₹300",
    "https://images.chinahighlights.com/allpicture/2019/07/de7f1d22786c4acfa0a80695_894x596.jpg",
  ],
  [
    "Braised Pork Balls in Gravy",
    "This delicious meat must be minced to the rice size, and according to the particular ratio, three fat types of meat: seven lean meats",
    "₹500",
    "https://images.chinahighlights.com/allpicture/2019/11/a47d9323b7ae409ba96e628d_894x596.jpg",
  ],
  [
    "Dumplings",
    "Dumpling is a broad class of dishes that consist of pieces of dough wrapped around a filling, or of dough with no filling.",
    "₹400",
    "https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_894x596.jpg",
  ],
  [
    "Chow Mein",
    "Chow mein are Chinese stir-fried noodles with vegetables and sometimes meat or tofu; the name is a romanization of the Taishanese chāu-mèn.",
    "₹150",
    "https://images.chinahighlights.com/allpicture/2018/03/10725167158a4b8589bf3140_894x596.jpg",
  ],
  [
    "Hotpot",
    "Typical hot pot ingredients include thinly sliced meat, leaf vegetables, mushrooms, vermicelli, sliced potatoes, bean products, egg dumplings, tofu, and seafood.",
    "₹999",
    "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.jpg",
  ],
];

const thai = [
  [
    "Vegan Larb",
    "hai-Inspired Vegan Larb is a quick, meat-free take on the traditional dish.",
    "₹400",
    "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/09/29260280701_eb1b0b32e9_k.jpg",
  ],
  [
    "Pad Phak (Stir-Fried Vegetables)",
    "Ruam mit means 'everything mixed together'. And it is what the Thai call their stir-fried mix vegetables.",
    "₹300",
    "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/09/vegetable-1133090_1920.jpg",
  ],
  [
    "Pak Boong (Morning Glory)",
    "Seasoned with soy bean paste, garlic, chilies, soy sauce, and oyster sauce, the salty-spicy-sour-and-crunchiness of Pad Pak Boong ",
    "₹700",
    "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/09/2373312196_c898c374b2_b.jpg",
  ],
  [
    "Som Tum (Papaya Salad)",
    "A delicious Thai salad, Som Tam is a green papaya salad that combines all four tastes - sour, chilli, sweet and salty. A healthy and tasty treat for brunch, lunch or a casual dinner.",
    "₹500",
    "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/09/vegetables-1548479_1920.jpg",
  ],
  [
    "Tao Hoo Song Kreung (Mixed Tofu)",
    "The word Song Kreung in Thai is used in many meaning involving dressing up in everything - foods, clothes, even hair styles.",
    "₹800",
    "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/09/29466156576_1bfe3f5ce6_k.jpg",
  ],
];

const french = [
  [
    "Ratatouille",
    "Ratatouille is a French Provençal stewed vegetable dish, originating in Nice, and sometimes referred to as ratatouille niçoise",
    "₹250",
    "https://www.thespruceeats.com/thmb/HgkLdvxQHWqDO_nzMnrDCjpNKmo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ratatouille-recipe-1375502-11-5b3fd43246e0fb003716c8c3.jpg",
  ],
  [
    "Spinach Soufflé ",
    "This Stouffer's Spinach Soufflé copycat is the perfect side dish for the holidays or a weeknight meal made with frozen spinach",
    "₹650",
    "https://www.thespruceeats.com/thmb/NBylei50HYaS3QZt51hfc9a1yjg=/2396x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/no-fear-easy-spinach-souffle-recipe-1375570-hero-01-5343a73c0d8a44d6b9041d4cc458c52d.jpg",
  ],
  [
    "Cauliflower Gratin ",
    "Cauliflower cheese is a traditional British dish. It can be eaten as a main course, for lunch or dinner, or as a side dish.",
    "₹450",
    "https://www.thespruceeats.com/thmb/p7OUwEyfBUk4M0kePjRKyCl9VVk=/1729x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-best-cauliflower-cheese-recipe-435733-20-5b1fef31a474be00387a8fb7.jpg",
  ],
  [
    "Roquefort and Carmelized Onion Tart",
    "These caramelized onion tarts are loaded with sweet fig jam and tangy crumbled blue cheese and are SO quick and easy to make!",
    "₹350",
    "https://www.thespruceeats.com/thmb/s_WMvwPBb5MNQABZojI_Ktv9T24=/2123x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-157610395-581617635f9b581c0bf17e79.jpg",
  ],
  [
    "Truffled French Fries ",
    "Homemade Truffle Fries, oven baked french fries with truffle oil, Parmesan, and parsley.",
    "₹500",
    "https://www.thespruceeats.com/thmb/_rhUxh1Zri-q4vWVi4trhsm8yzM=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-homemade-truffle-fries-recipe-1375725-6420_preview-5b1989fa8e1b6e003698aa87.jpeg",
  ],
];

export default function Cart() {
  return (
    <div>
      <Header />

      <div class="text-5xl mt-10 ml-10">Indian</div>
      <div class="flex flex-wrap pl-10">
        {indian.map((e) => {
          return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]} />;
        })}
      </div>
      <div class="text-5xl mt-10 ml-10">Italian</div>
      <div class="flex flex-wrap pl-10">
        {italian.map((e) => {
          return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]} />;
        })}
      </div>

      <div class="text-5xl mt-10 ml-10">Chinese</div>
      <div class="flex flex-wrap pl-10">
        {chinese.map((e) => {
          return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]} />;
        })}
      </div>

      <div class="text-5xl mt-10 ml-10">Thai</div>
      <div class="flex flex-wrap pl-10">
        {thai.map((e) => {
          return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]} />;
        })}
      </div>

      <div class="text-5xl mt-10 ml-10">French</div>
      <div class="flex flex-wrap pl-10">
        {french.map((e) => {
          return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
