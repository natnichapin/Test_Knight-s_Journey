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

  let visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  let broken = brokenTiles.map(t => t.toUpperCase());


  

  return -1;
}
console.log(getMinMove("C3", "H8", ["D5", "E4", "F6", "G7"])); 
