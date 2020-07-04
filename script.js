// 1  завдання . Нумерований плейлист з cool піснями.

var playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  ];

  const ol = document.createElement('ol');
  const list = document.getElementById("list");
  list.append(ol);
  for (let i in playList) {
    const li = document.createElement('li');
    const nameSA = document.createElement('p');
    nameSA.append(playList[i].author);
    nameSA.append(' - ');
    nameSA.append(playList[i].song);
    li.append(nameSA);
    ol.append(li);
  }
  // 2 задача кнопка відкрити і закрити з модальним вікном

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const button = document.getElementById('button');
const wrap = document.getElementById('wrap');

btn.onclick = function () {
  text.style.display = 'block';
  wrap.style.display = 'block';
 button.style.display = 'block';
}

button.onclick = function () {
  text.style.display = 'none';
  wrap.style.display = 'none';
  button.style.display = 'none';
}
text.textContent = 'Привіт!! Закрий вікно.';


// 3 задача світлофор

const trafficbtn = document.getElementById ('trafficbtn');
trafficbtn.textContent = 'НАЖМИ МЕНЕ';

let i = -1;
trafficbtn.onclick = function() {
  i++;
  let color = ['red', 'yellow', 'green'],
  traffic = document.querySelectorAll('.traffic__color');
  if(traffic[i-1]) traffic[i-1].style.backgroundColor = '';
  if(i == color.length) i = 0;
  traffic[i].style.backgroundColor = color[i];
}

