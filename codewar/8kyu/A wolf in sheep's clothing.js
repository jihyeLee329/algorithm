function warnTheSheep(queue) {
  const sheep_num = queue.reverse().indexOf("wolf");
  return sheep_num === 0 ? `Oi! Sheep number ${sheep_num}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep";
}

warnTheSheep(["sheep", "sheep", "wolf"]);
