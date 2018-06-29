var height, width, color;


// A function called on submission of values of Height and Width

$('#sizePicker').submit(function (event) {
  event.preventDefault();
  
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
  
});

// When size is submitted by the user, call makeGrid()

function makeGrid(h,w) {
$('tr').remove(); // to remove any table row incase there was any created before.
  for(var i = 1; i <= h; i++){                                 //--- a loop for creating table rows in the DOM 
    $('#pixelCanvas').append('<tr id=row ' + i + '</tr>');     
    for(var c = 1; c <= h; c++){
      $('#row' + i).append('<td></td>');  //creating table data based on the the input of height
    }
  }
  
  
 // changing color of the picker.
	
  $('td').click(function addColor(){
    color = $('#colorPicker').val();
    
    if($(this).attr('style')){
      $(this).removeAttr('style')
    }else{
      $(this).attr('style' , 'background:' + color);
    }
    

};
               

  
  
