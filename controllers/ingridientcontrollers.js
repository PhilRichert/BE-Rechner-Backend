import futter from "../src/futter.json" assert { type: "json" };

const foodbyId = (req) => {
  try {
    return futter.find((food) => food.id === parseInt(req.params.id));
  } catch (error) {
    return false;
  }
};

const foodbyName = (req) => {
  try {
    return futter.find((food) => food.name === req.params.name);
  } catch (error) {
    return false;
  }
};

const food_all = (req, res) => {
  res.send(futter);
};

const food_id = (req, res) => {
  res.send(
    foodbyId(req) ?? `Its not a correct id take between 1 and ${futter.length}`
  );
};
const food_name = (req, res) => {
  res.send(
    foodbyName(req) ??
      `The ingriedient you are looking for is not in the Database`
  );
};

const food_name_info = (req, res) => {
  const food = foodbyName(req);
  res.send(food[req.params.info] ?? "use base, name or type");
};

export { food_all, food_id, food_name_info, food_name };
