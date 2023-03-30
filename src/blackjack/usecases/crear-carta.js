
/**
 * 
 * @param {HTMLElement} divCartas Elemento HTML donde se crean las imagenes de las cartas
 * @param {string} carta Valor de la carta en el deck
 */
export const crearCarta = (divCartas, carta) => {

    if( !carta )
        throw new Error('Es necesario el valor de la carta');
        
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );
}
