IrRemote.onPressEvent(RemoteButton.NUM9, function () {
    magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, 150)
    basic.pause(4000)
    magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M2, -150)
    basic.pause(4000)
})
IrRemote.onPressEvent(RemoteButton.D, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
})
IrRemote.onPressEvent(RemoteButton.Ok, function () {
    magicbit.MotorStopAll()
})
IrRemote.onPressEvent(RemoteButton.NUM0, function () {
    magicbit.Servo(magicbit.Servos.S2, 0)
    music.playMelody("E B C5 A B G A F ", 120)
    magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M2, 150)
    basic.pause(10000)
    magicbit.MotorStopAll()
    magicbit.Servo(magicbit.Servos.S2, 180)
    basic.pause(1000)
    magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, -150)
    basic.pause(5000)
    magicbit.MotorStopAll()
    magicbit.Servo(magicbit.Servos.S2, 0)
    magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M2, -255)
    basic.pause(5000)
    magicbit.MotorStopAll()
})
IrRemote.onPressEvent(RemoteButton.UP, function () {
    magicbit.MotorRunDual(magicbit.Motors.M1, -255, magicbit.Motors.M2, 255)
})
IrRemote.onPressEvent(RemoteButton.A, function () {
    magicbit.Servo(magicbit.Servos.S2, 180)
})
IrRemote.onPressEvent(RemoteButton.Right, function () {
    magicbit.MotorRunDual(magicbit.Motors.M1, 90, magicbit.Motors.M2, 90)
    basic.pause(100)
    magicbit.MotorStopAll()
})
IrRemote.onPressEvent(RemoteButton.NUM5, function () {
    basic.showString("Do you want to play with me, Kevin?")
})
IrRemote.onPressEvent(RemoteButton.Left, function () {
    magicbit.MotorRunDual(magicbit.Motors.M1, -90, magicbit.Motors.M2, -90)
    basic.pause(100)
    magicbit.MotorStopAll()
})
IrRemote.onPressEvent(RemoteButton.B, function () {
    magicbit.Servo(magicbit.Servos.S2, 0)
})
IrRemote.onPressEvent(RemoteButton.Down, function () {
    magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M2, -255)
})
IrRemote.init(Pins.P1)
basic.showIcon(IconNames.Happy)
