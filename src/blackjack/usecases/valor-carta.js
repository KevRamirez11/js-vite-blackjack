
/**
 * Funcion encargada de determinar el valor numerico de una carta
 * @param {string} carta Recibe una carta
 * @returns {number} Regresa el valor de la carta
 */
export const valorCarta = ( carta ) => {

    if ( carta.length === 0)
        throw new Error('Debe de recibir una carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}