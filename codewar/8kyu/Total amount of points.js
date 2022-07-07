function points(games) {
  // your code here

  let results = 0;
  games.forEach((game) => {
    const game_point = game.split(":");
    const x = game_point[0];
    const y = game_point[1];
    x > y ? (results += 3) : x < y ? (results += 0) : (results += 1);
  });
  return results;
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);
