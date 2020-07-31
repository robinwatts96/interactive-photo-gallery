baguetteBox.run('.gallery', {
  buttons: 'auto',
  wrapAround: true,
  overlayBackgroundColor: 'white'
});

// search field

let search = $(".search-bar");  
let imgs = $("a");           

search.keyup((event) => {
  let value = search.val().toLowerCase();
  imgs.show();
  if (value !== "") {
    imgs.not(`[data-caption*="${value}"]`).hide();
  } 
});
