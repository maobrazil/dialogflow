let date = new Date ();
let time = date.toLocaleString( 'pt-BR' ,{timeZone: 'America/Sao_Paulo', hour: 'numeric' , hour12: false});
function welcome(agent){

if (time < 12) {
  agent.add(`Bom dia`);
} else if (time >= 12 && time <=17) {
  agent.add(`Boa tarde`);
} else {
  agent.add(`Boa noite`);
}
}
