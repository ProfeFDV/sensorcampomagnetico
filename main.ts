basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
