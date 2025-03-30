// import Dish from "./dish";

const Dish = () => {
  return (
    <div className=" xs:w-36 sm:w-72 md:w-auto bg-slate-950">
      <div>689 р</div>
      <div>Мясная бомба</div>
      <div>520 г</div>
      <button>Добавить</button>
    </div>
  );
};
// export default Dish;

const DishSection = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto ">
        <div className="flex">
          <div className=" xl:static xs:absolute mt-6 mr-4 w-72 h-32  bg-slate-600">Корзина</div>
          <div className="xs:mt-40 xl:mt-0 container mx-auto">
            <h2> Бургеры</h2>
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishSection;
