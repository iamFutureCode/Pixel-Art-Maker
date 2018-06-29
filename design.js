var height, width, color;

// function called on click of submission bbutton

$("#sizePicker").submit(function (event) {
event.preventDefault();
height = $('#inputHeight').val();
width = $('#inputWeight').val();
makeGrid(height, width);
});

// grid function to create table row and data based on the Height input
// this is most likely going to create square canvases!

function makeGrid (h, w){ 
    $('tr').remove();
for(var i = 1; i <= h; i++){
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for(var o = 1; o <= h; o++){
        $('#table' + i).append('<td></td>');
        
    }
    
}
    
    //function to add color/remove color of a clicked cell.
$('td').click(function addColor(){
        color = $('#colorPicker').val();
        
        if ($(this).attr('style')){
            $(this).removeAttr('style') 
        }else{
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
