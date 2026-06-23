
document.getElementById('startBtn').onclick=()=>{
document.getElementById('startScreen').classList.add('hidden');
document.getElementById('characterScreen').classList.remove('hidden');
}

document.getElementById('playBtn').onclick=()=>{
document.getElementById('characterScreen').classList.add('hidden');
document.getElementById('hud').classList.remove('hidden');
}
