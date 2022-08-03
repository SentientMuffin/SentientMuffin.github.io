
function startGame() {
  gameState.start();  
}

// ================== Run =====================
async function api() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.agify.io/?name=JSVikingChess');
  request.send();
  $("#API").html(request.response); 
}

$(document).ready(function() {
  startGame();
  api();
})
