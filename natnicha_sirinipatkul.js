function getMinMove(start,target,brokenTiles){
     const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    function toPositionXY(pos) {
    let x = pos[0].toUpperCase().charCodeAt(0) - 65;
    let y = parseInt(pos[1]) - 1;
    return [x, y];
    }


    let [sx, sy] = toPositionXY(start);
  let [tx, ty] = toPositionXY(target);

let visited = [];
for (let i = 0; i < 8; i++) {
  visited[i] = [];
  for (let j = 0; j < 8; j++) {
    visited[i][j] = false;
  }
}


  

  return -1;
}
console.log(getMinMove("C3", "H8", ["D5", "E4", "F6", "G7"])); 
