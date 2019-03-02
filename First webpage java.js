var bodyX = 4;
    var bodyY = 152;

    draw = function() {
        
        background(255, 255, 255);
        
        fill(255, 0, 0);
    textSize(30);
    text("Prizerunner for transport!", 10, 30);
    textSize(10);
    text("Safe money!", 10, 87);
    text("Safe time!", 10, 103);
    text("Find the right connection every time!", 10, 118);

        //exhaust
    fill(15, 14, 14);
    rect(bodyX - 12, bodyY + 61, 21, 7);

    //body of the bus
    fill(247, 255, 0);
    rect(bodyX, bodyY, 188, 72);

    //door
    fill(13, 12, 12);
    rect(bodyX + 82, bodyY + 7, 41, 64); //door
    fill(255, 255, 255);
    rect(bodyX + 85, bodyY + 17, 12, 20); //window
    rect(bodyX + 108, bodyY + 17, 12, 20); //window
    strokeWeight(2);
    stroke(250, 247, 247);
    line(bodyX + 103, bodyY + 71, bodyX + 103, bodyY + 6);


    //windows
    fill(255, 255, 255);
    rect(bodyX + 30, bodyY + 11, 40, 40);
    rect(bodyX + 136, bodyY + 11, 40, 40);

    // wheels
    fill(13, 13, 13);
    ellipse(bodyX + 46, bodyY + 74, 30, 30);
    ellipse(bodyX + 153, bodyY + 74, 30, 30);

     bodyX = bodyX + 2;
        
    };
