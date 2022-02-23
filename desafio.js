
// Variável ampulheta

var ampulheta = (
    `
####################

####################
# ################ #
#  ##############  #
#   ############   #
#    ##########    #
#     ########     #
#      ######      #
#       ####       #
#        ##        #
#        ##        #
#       #  #       #
#      #    #      #
#     #      #     #
#    #        #    #
#   #          #   #
#  #            #  #
# #              # #
##                ##
####################

####################
`)

// Mostrar a ampulheta de inicio ao usuário

console.log(ampulheta);

// Entrada do usuário

var entrada = prompt("Digite um numero para o tamanho da sua Ampulheta: ");

//Erro caso a entrada seja mais que 20.

if (entrada < 20) {
    console.log("Erro, por favor digite um número maior que 20 para vê sua Ampulheta");
}

// Função de mostrar a ampulheta com o tamanho de acordo com o usuário

else {

    console.log("Deu certo, olha sua Ampulheta");

    function showAmpulhetas(n) {

        let contador = 0;
        let ampulheta = ''

        for (let i = 0; i <= n; i++) {

            contador++
            if (i == 0) {
                ampulheta += `${"#".repeat(n - i)}\n`
            } else if (i == 1) {
                ampulheta += `#${"#" + " ".repeat(n - 4)}##\n`
            } else if (i == 2) {
                ampulheta += `# ${"#" + " ".repeat(n - 4 - i)}# #\n`
            } else if (contador % 2 == 0 && contador < n - 3) {
                ampulheta += `#${" ".repeat((contador / 2)) + "#" + " ".repeat(n - 4 - contador) + "#" + " ".repeat((contador / 2))}#\n`
            }

        }

        for (let i = n; i >= 0; i--) {
            contador--
            if (i == 0) {
                ampulheta += `${"#".repeat(n - i)}\n`
            } else if (i == 1) {
                ampulheta += `${"#".repeat(n)}\n`
            } else if (i == 2) {
                ampulheta += `# ${" ".repeat((i / 2) - 1) + "#".repeat(n - i - 2)} #\n`
            } else if (i % 2 == 0 && i < n - 3) {
                ampulheta += `#${" ".repeat((contador / 2)) + "#".repeat((n - contador - 2)) + " ".repeat((contador / 2))}#\n`
            }
        }
        return (ampulheta)

    }

    console.log(showAmpulhetas(entrada));

}