import { heroes } from '../data/heroes';

export const callbacksComponent = (element) => {
  
    const id = '5d86371f1efebc31def272e2';
    findHero(id, (error, hero)=>{
        // element.innerHTML = hero?.name || 'Heroe no encontrado';

        if (error){
            element.innerHTML = error;
            return;
        }

        element.innerHTML = hero?.name;
    });

}

/**
 * Encontrar un heroe en el listado en base a su id
 *
 * @param {string} id - El id del heroe.
 * @param {(error?: String, hero: Object)=>void} callback - La funcion de callback.
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`Heroe id: ${id} no encontrado`);
        return; 
    }


    callback(null, hero);
}