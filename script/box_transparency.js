var Song;
var note_progression;
var counter;


window.onload = function() {
  console.log( "Hello World" );
  Song = null;
  note_progression = [];
  counter = 0;

  var img = document.getElementById("art");
  img.style.visibility = 'hidden';

  var response = jQuery.get("/get_song", "", call_back );




  // for( var i = 0; i < 16; i ++ )
  // {
  //   div = document.getElementById("" + i);
  //   arr = div.className.split(" ");
  //   if (arr.indexOf("transparent_box") == -1) {
  //       div.className = "opaque_box";
  //   }
  // }

}


function call_back( a, b, c )
{
  Song = c.responseJSON;
  note_progression = Song.note_progression;

  var img = document.getElementById("art");
  img.style.visibility = 'visible';

  dimension = Song.type;
  html = document.getElementById( "hid" );
  html.style.gridTemplateColumns = "repeat(" + dimension + ", " + (960/dimension) + "px)";
  html.style.gridTemplateRows = "repeat(" + dimension + ", " + (582/dimension) + "px)";
  for( var r = 0; r < dimension; r ++ )
  {
    for( var c = 0; c < dimension; c ++ )
    {
      var newElem = html.appendChild( document.createElement('div') )
      newElem.style.height = "" + (582/dimension) + "px";
      newElem.style.width = "" + (960/dimension) + "px";
      newElem.id = (r * 4 + c);
      newElem.className = "opaque_box";
      // newElem.innerText = (r * 4 + c);
      // "<div id=" + (r * 4 + c) + ' class="opaque_box">' + (r * 4 + c) + "<

    }
  }
}





function box_fade( note )
{
  if( note == note_progression[counter] )
  {



    var div, arr;
    div = document.getElementById("" + counter);
    arr = div.className.split(" ");
    if (arr.indexOf("transparent_box") == -1) {
        div.className = "transparent_box";
    }
    counter ++;

    if( counter == note_progression.length )
    {
      for( var i = note_progression.length; i < Math.pow( Song.type, 2 ); i ++ )
      {
        console.log( i );
        div = document.getElementById("" + i);
        console.log( div );
        arr = div.className.split(" ");
        if (arr.indexOf("transparent_box") == -1) {
            div.className = "transparent_box";
        }
      }
    }
  }




}
