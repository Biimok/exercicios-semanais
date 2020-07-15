var cronometro = ( function() {
    var ss = 0;
    var mm = 0;
    var hh = 0;
    var cron;
    var temporizador = document.getElementById('temporizador');
    var iniciarButton = document.getElementById('iniciar');
  
    function iniciar() {
      cron = setInterval(() => {
                timer(); 
              }, 1000);
      iniciarButton.disabled = true;
    }

    function parar() {
      clearInterval(cron);
      iniciarButton.disabled = false;
    };

    function zerar() {
      clearInterval(cron);
      hh = 0;
      mm = 0;
      ss = 0;
      iniciarButton.disabled = false;

      _atualizarTempo();
    }

    function timer() {
      ss++

      if(ss == 59) {
        ss = 02;
        mm++;
      };
      if (mm == 59) {
        mm = 0;
        hh++;
      }
      _atualizarTempo();
    }

    function _atualizarTempo() {
      temporizador.textContent = retornarTempoAtualizado();
    }

    function retornarTempoAtualizado () {
      var segundos = (ss < 10) ? "0" + ss : ss;
      var minutos = (mm < 10) ? "0" + mm : mm;
      var horas = (hh < 10) ? "0" + hh : hh;

      return `${horas}:${minutos}:${segundos}`
    }

    return {
      iniciar, 
      parar, 
      zerar,
      retornarTempoAtualizado
    }

})()