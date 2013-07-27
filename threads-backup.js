/*




// Process Orchestra Primitives  -- Matt Vaughan - Mar 5, 2013
Process.prototype.doConnect = function (host) {
    connect(host);
};

Process.prototype.doSendExpr = function (expr) {
    send(expr);
};

Process.prototype.doSendNote = function(note, duration) {
    var cmd = "(noteOn (+ (nm) (* (beat) " + orchbeat + " )) (myChannel) " + note + " 127)(noteOff (+ (nm) (* (beat) " + (orchbeat + duration) + ")) (myChannel) "+ note + " 127)";
    orchCmd = orchCmd + cmd;
    orchbeat += duration;
};

Process.prototype.doEndMeasure = function() {
    send(orchCmd);  
    orchCmd = "";   // empty the command buffer
    orchbeat = 0;   // reset the next note pause
};



    if (isReporter) {