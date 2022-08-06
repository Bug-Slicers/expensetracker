module.exports.Segregator = (data) => {
  const segregated = {
    General: 0,
    Fuel: 0,
    Grocery: 0,
    Fun: 0,
    Shopping: 0,
    Travel: 0,
    Food: 0,
  };
  let total = 0;

  data.forEach((item) => {
    segregated[item.category] += parseInt(item.amount.$numberDecimal);
    total += parseInt(item.amount.$numberDecimal);
  });
  return [segregated, total];
};
