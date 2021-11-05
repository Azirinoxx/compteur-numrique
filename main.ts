input.onButtonPressed(Button.A, function () {
    NB_de_personne = NB_de_personne + 1
    if (NB_de_personne == 10) {
        basic.showString("Nombre de personne maximal attint")
    }
    basic.showNumber(NB_de_personne)
})
input.onButtonPressed(Button.B, function () {
    NB_de_personne = NB_de_personne - 1
    basic.showNumber(NB_de_personne)
})
let NB_de_personne = 0
NB_de_personne = 0
