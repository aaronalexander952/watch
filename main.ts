input.onButtonPressed(Button.A, function () {
    string += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(steps)
    basic.pause(2000)
    basic.showNumber(minutes)
})
radio.onReceivedString(function (receivedString) {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    basic.showString(receivedString)
    basic.showNumber(minutes)
})
input.onButtonPressed(Button.B, function () {
    if (string == 1) {
        radio.sendString("Dance!")
    } else if (string == 2) {
        radio.sendString("Attack!")
    } else if (string == 3) {
        radio.sendString("Tell joke!")
    } else if (string == 4) {
        radio.sendString("Stop!")
    } else {
        radio.sendString("Tell fact!")
    }
    basic.showNumber(minutes)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    led.stopAnimation()
})
let minutes = 0
let string = 0
let steps = 0
radio.setGroup(1)
steps = 0
string = 0
minutes = 0
basic.showNumber(minutes)
loops.everyInterval(60000, function () {
    minutes += 1
})
basic.forever(function () {
    if (string > 5) {
        string = 1
    }
})
basic.forever(function () {
    if (string == 1) {
        basic.showString("Dance!")
    } else if (string == 2) {
        basic.showString("Attack!")
    } else if (string == 3) {
        basic.showString("Tell joke!")
    } else if (string == 4) {
        basic.showString("Stop!")
    } else {
        basic.showString("Tell fact!")
    }
})
