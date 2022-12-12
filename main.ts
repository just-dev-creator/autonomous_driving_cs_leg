input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    motors.dualMotorPower(Motor.AB, 75)
})
motors.dualMotorPower(Motor.AB, 75)
basic.forever(function () {
    if (input.soundLevel() > 75) {
        motors.motorCommand(MotorCommand.Break)
    }
    if (grove.measureInCentimeters(DigitalPin.C16) < 10) {
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, 100)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 50) {
        basic.setLedColor(0xff0000)
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, 100)
    } else if (pins.analogReadPin(AnalogPin.P2) < 50) {
        basic.setLedColor(0x00ff00)
        motors.dualMotorPower(Motor.A, 100)
        motors.dualMotorPower(Motor.B, 0)
    } else {
        motors.dualMotorPower(Motor.AB, 75)
    }
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
