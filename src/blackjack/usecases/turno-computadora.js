import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCarta } from "./crear-carta";

/**
 * 
 * @param {Number} puntosMinimos puntos necesarios que requiere la computadora para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos en pantalla
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if ( !puntosMinimos )
        throw new Error('Los puntos minimos para ganar son necesarios');
    
    if ( !puntosHTML )
        throw new Error('Argumento HTML es necesario');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        crearCarta(divCartasComputadora, carta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}