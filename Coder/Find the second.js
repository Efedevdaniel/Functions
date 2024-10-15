function findSecond(list) {
  list.sort(function(a, b) {
    return b - a;
  });
  return list[1];
}
