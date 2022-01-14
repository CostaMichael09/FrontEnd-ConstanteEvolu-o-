(function($) {
    $.fn.temporizador = function (opcoes){
       const opcoesFinais = $.extend({
           mensagem: 'Em breve',
           horario: '23:59:59'
       }, opcoes)

       const horaDezena = $('<span class="digito">').html('0')
       $(this).addClass('temporizador')

    }
})(jQuery)