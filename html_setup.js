
function startGame() {
  gameState.start();  
}

// ================== Run =====================

$(document).ready(function() {
  startGame();
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.agify.io/?name=JSVikingChess');
  request.send();
  $("#API").html(request.response);
})
