function countVocalescontilde(string) {
    let count = 0;
    const vocalescontilde = "áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõÃÕäëïöüÄËÏÖÜçÇ";

    for (let i = 0; i < string.length; i++) {
        if (vocalescontilde.includes(string[i])) {
            count++;
        }
    }

    return count;
}

// Pruebas de numero de tildes
console.log(countVocalescontilde("Hola, ¿cómo estás?")); //debería dar 2
console.log(countVocalescontilde("¿Por qué se metió él pingüino si iré a jugar con él?")); //debería dar 5
console.log(countVocalescontilde("Iré al súper y compraré agua para todos"));