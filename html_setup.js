function startGame() {
  gameState.start();  
}

// ================== Run =====================
async function api() {
  let response = await fetch('https://api.agify.io/?name=JSVikingChess');
  let data = await response.json();
  return data;
}

$(document).ready(function() {
  startGame();
  api().then(data => {
    console.log(data);
    $("#API").html(JSON.stringify(data));
  });
})
