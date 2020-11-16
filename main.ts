// I does the task forever
basic.forever(function () {
    if (input.lightLevel() < 120) {
        basic.showString("Hello it is bright here")
    } else if (input.lightLevel() < 5) {
        basic.showString("Hello it is pretty dark here")
        basic.pause(100)
        led.plotBrightness(0, 0, 255)
        led.setDisplayMode(DisplayMode.BlackAndWhite)
    }
})
