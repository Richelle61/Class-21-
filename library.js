function bounceOff(object01,object02){
    if (object01.x -object02 .x < object02.width/2+ object01.width/2
      && object02.x - object01.x < object02.width/2 + object01.width/2) {
        object01.velocityX = object01.velocityX * (-1);
        object02.velocityX = object02.velocityX * (-1);
  }
  if (object01.y - object02.y < object02.height/2 + object01.height/2
    && object02.y - object01.y < object02.height/2 + object01.height/2){
      object01.velocityY = object01.velocityY * (-1);
      object02.velocityY = object02.velocityY * (-1);
  }
  
  
  
  
  
  
  
  
  
  }