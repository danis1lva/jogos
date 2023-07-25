    $(document).ready(function(){
      $('.carousel').carousel({
        fullWidth: true,
        indicators: true
      });

      $('next').click(function(){
        $('carousel').carousel('next')
      })  

      setInterval(function(){
        $('.carousel').carousel('next')
      }, 5000);
    });

    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    $(document).ready(function(){
      $('.slider').slider();
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });

    $(document).ready(function(){
      $('.tap-target').tapTarget({
        indicators: false
      });
    });

    $('.chips').chips();
  $('.chips-initial').chips({
    data: [{
      tag: 'Apple',
    }, {
      tag: 'Microsoft',
    }, {
      tag: 'Google',
    }],
  });
  $('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').chips({
    autocompleteOptions: {
      data: {
        'Apple': null,
        'Microsoft': null,
        'Google': null
      },
      limit: Infinity,
      minLength: 1
    }
  });

  function boa() {
    var msg = document.getElementById("nome").value;

    alert("Olá " +msg.toUpperCase()+ ", está conta não foi encontrada.")
  }

  function compra() {
    alert("Para comprar é preciso criar uma conta em nossa loja")
  }