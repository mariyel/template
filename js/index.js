var APIKey = 'da897927906a41c59dd02aa422465e0287127727ce4d87133f38b8d42f5c2f63';

$.getJSON('https://api.unsplash.com/search/photos?query=home&per_page=9&client_id=da897927906a41c59dd02aa422465e0287127727ce4d87133f38b8d42f5c2f63', function(data) {
  console.log(data);
  
  
  var imageList = data.results;
  
  $.each(imageList, function(i, val) {
    
    var image = val;
    var imageURL = val.urls.regular;
    var imageWidth = val.width;
    var imageHeight = val.height;
    
    if (imageWidth > imageHeight) {
      $('.grid').append('<img class="unsplash" src="'+ imageURL +'">');
    }   
    
  });  
});