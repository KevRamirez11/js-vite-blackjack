
/**
 * Funcion que retorna una carta del deck
 * @param {Array <string>} deck Recibe un deck de cartas tipo arreglo de string
 * @returns {string} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}