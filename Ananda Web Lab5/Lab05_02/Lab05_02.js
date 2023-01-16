var countdown;
      function startTimer() {
        clearInterval(countdown);
        var minutes = document.getElementById("minutes").value;
        var seconds = minutes * 60;
        countdown = setInterval(function() {
          seconds--;
          if (seconds <= 0) {
            clearInterval(countdown);
            
          } else {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            if(min<10) min = "0"+min;
            if(sec<10) sec = "0"+sec;
            document.getElementById("timer").innerHTML = min + ":" + sec;
          }
        }, 1000);
      }
  function resetTimer() {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = document.getElementById("minutes").value + ":00";
    document.getElementById("minutes").value = document.getElementById("minutes").value;
  }