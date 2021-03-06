UT.Expression.ready(function(post) {
  var $background = $('.post-background');
  var $panel = $('.sticker-panel');

  var drawSticker = function(data){
  $('<img class="sticker-giraffe" src="assets/images/giraffe_'+data.name+'.png"/>')
    .appendTo(post.node)
    .utSticker({
      id: data.stickerId
    });
  };

  $background.utImage()
    .on('utImage:change', function(){
      post.size($(this).height());

      $.each(post.storage.stickers, function() {
        drawSticker(this);
      });
    });
});
