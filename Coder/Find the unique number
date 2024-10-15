function findUnique(list) {
  const count = {};

  list.forEach((num) => {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  });

  return parseInt(
    Object.keys(count).find(
      (key) => count[key] === 1,
    ),
  );
}
