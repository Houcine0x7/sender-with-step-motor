input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("A")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("B")
})
radio.setGroup(1)
