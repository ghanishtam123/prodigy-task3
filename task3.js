let currentPlayer = 'X';
let arr = Array(9).fill(null);

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]          
  ];

  for (let [a,b,c] of winPatterns) {
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      alert(`Winner is ${arr[a]}`); 
      return;
    }
  }

  if (!arr.includes(null)) {
    alert("It's a Draw!");
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;

  arr[id] = currentPlayer;
  el.innerText = currentPlayer;

  checkWinner(); 

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
