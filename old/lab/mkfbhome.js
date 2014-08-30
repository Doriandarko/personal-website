var shortcutsShown = false;
var oTop = 200;
var oLeft = 220;
var bDist = 150;
var pulledS = false;

$(function () {	
  
  
  
  $('#bobble').bind('mousedown', function(e){
    showShortcuts();
    e.preventDefault();
  });
  
  
  $('#bobble').draggable({
    drag: function (event, ui) {
      checkProximity(event, ui);
    }
  });
  
  
  $(document).bind('mouseup', function(e){
    hideShortcuts();
    e.preventDefault();
  });
  
  
  
  $(document).bind('mousemove', function(e){
    // console.log(e.clientX, e.clientY);
  });
  
  
  
});








function showShortcuts() {
  // console.log('showing shortcuts');
  shortcutsShown = true;
  
  $('.shortcut').addClass('active');
  elementSpringTo('#messenger', oLeft-bDist, oTop, [140,8,3]); //stiffness, mass, friction
  elementSpringTo('#apps', oLeft, oTop-bDist, [140,8,3]);
  elementSpringTo('#latest', oLeft+bDist, oTop, [140,8,3]);
}


function hideShortcuts() {
  if (shortcutsShown == true) {
    // console.log('hiding');
    shortcutsShown = false;
    pulledS = false;
    
    $('.shortcut').removeClass('active');
    elementSpringTo('#bobble', oLeft, oTop, [100,9,4]);
    elementSpringTo('#messenger', oLeft, oTop, [140,8,3]);
    elementSpringTo('#apps', oLeft, oTop, [140,8,3]);
    elementSpringTo('#latest', oLeft, oTop, [140,8,3]);
  }
}


function checkProximity(event, ui) {
  var buttonPos = ui.position;
  // console.log(ui);
  var elements = [{name: '#messenger', oX: oLeft-bDist, oY: oTop }, 
                  {name: '#apps', oX: oLeft, oY: oTop-bDist }, 
                  {name: '#latest', oX: oLeft+bDist, oY: oTop }];
  var i;
  
  if (pulledS !== false) {
    
    if (calculateDistanceBetween(buttonPos, {left: elements[pulledS].oX, top: elements[pulledS].oY}) < 100) {
      elementSpringTo(elements[pulledS].name, buttonPos.left + 5, buttonPos.top + 5, [180,8,3]);
      // $(elements[pulledS].name).css('top', buttonPos.top + 5).css('left', buttonPos.left + 5);
      return 0;
    
    } else {
      // $(elements[pulledS].name).removeClass('hidden');
      elementSpringTo(elements[pulledS].name, elements[pulledS].oX, elements[pulledS].oY, [140,8,3]);
      pulledS = false;
      // console.log('reset all');
      return 0;
    }
    
  } else {
    for (i in elements) {
  
      if (calculateDistanceBetween(buttonPos, {left: elements[i].oX, top: elements[i].oY}) < 100) {
        pulledS = i;
        // console.log('pulled', elements[i].name)
        elementSpringTo(elements[i].name, buttonPos.left + 5, buttonPos.top + 5, [180,8,3]);
        // $(elements[i].name).addClass('hidden');
        return 0;
      } 
    }
  }
}


function calculateDistanceBetween(a, b) {
  var dX = Math.abs(a.left - b.left);
  var dY = Math.abs(a.top - b.top);
  var distance = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
  // console.log('distance is', dX, dY, distance);
  return distance;
}


