const api = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo';

fetch(api)
.then(response => response.json())
.then(data => makePage(data));

function getData() {
    fetch(api)
    .then(response => response.json())
    .then(data => makePage(data));
  }
  

  function makePage(data) {
    for(let i=0;i<3;i++) {
      setData('day'+i,dateFormat(data.daily.time[i]));
      setData('weathercode'+i,getWMO(data.daily.weathercode[i]));
      setData('temperature_2m_max'+i,data.daily.temperature_2m_max[i] + '℃');
      setData('temperature_2m_min'+i,data.daily.temperature_2m_min[i] + '℃');
      setData('precipitation_sum'+i,data.daily.precipitation_sum[i] + 'mm');
    }
  

  if ( data.daily.precipitation_sum[0] > 0 ) {
    document.getElementById('body').style.backgroundImage
     = 'linear-gradient(#B0C4DE 15%,  	#F0F8FF	30%)';
  } else {
    document.getElementById('body').style.backgroundImage
     = 'linear-gradient( #FF9966 15%,  #FFDBC9 30%)';
  }
}


function setData(id,data) {
  document.getElementById(id).innerHTML = data;
}

function dateFormat(date, mode) {
    let dateObject = new Date(date);
  
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const hour = addZero(dateObject.getHours());
    const minute = addZero(dateObject.getMinutes());
    const second = addZero(dateObject.getSeconds());
  
    if(mode == 1) {
      return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
    } else {
      return month + '月' + day + '日';
    }
  }

  function addZero(n) {
    if (n < 10 ) {
      return "0" + n;
    } else {
      return n;
    }
  }
       



  function getWMO(w) {
    if (w==0) {
      return '☀️';
    } else if (w==1) {
      return '🌤';
    } else if (w==2) {
      return '⛅️';
    } else if (w==3) {
      return '☁️';
    } else if (w==45) {
      return '霧';
    } else if (w==48) {
      return '霧氷';
    } else if (w==51) {
      return '霧雨';
    } else if (w==53) {
      return '霧雨';
    } else if (w==55) {
      return '霧雨';
    } else if (w==56) {
      return '霧雨';
    } else if (w==57) {
      return '霧雨';
    } else if (w==61) {
        return '☔️';
      } else if (w==63) {
        return '☔️';
      } else if (w==65) {
        return '☔️';
      } else if (w==66) {
        return '氷雨';
      } else if (w==67) {
        return '氷雨';
      } else if (w==71) {
        return '❄️';
      } else if (w==73) {
        return '❄️';
      } else if (w==75) {
        return '❄️';
      } else if (w==77) {
        return '❄️';
    } else if (w==80) {
        return '☔️';
      } else if (w==81) {
        return '☔️';
      } else if (w==82) {
        return '☔️';
      } else if (w==85) {
        return '❄️';
      } else if (w==86) {
        return '❄️';
      } else if (w==95) {
        return '⚡️☔️';
      } else if (w==96) {
        return '⚡️☔️';
      } else if (w==99) {
        return '⚡️☔️';
      } else {
        return w;
      }
    }
    
    function updateScreen() {
        setData('time',dateFormat(new Date(),1));
      }
      
      
setInterval(updateScreen,1000);
setInterval(getData,1000 * 60 * 60);
getData();

  