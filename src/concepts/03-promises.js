import { heroes } from "../data/heroes"


export const promisesComponent = (element) => {
  
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name} </h3>
            <h3>${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error: </h1>
            <h3>${error}</h3>
        `;
    }
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    Promise.all([
        findHero(id1), 
        findHero(id2)
    ]).then(([hero1, hero2])=>{renderTwoHeroes(hero1, hero2)})
    .catch(renderError);

    //findHero(id).catch(renderError).then(renderHero);

/*  let hero1;

    findHero(id1)
        .then(hero1 => {
            findHero(id2)
                .then(hero2 => {
                    renderTwoHeroes(hero1, hero2);
                })
                .catch(renderError);
    }).catch(renderError); */

}

/**
 * Finds a hero from the list of heroes based on the provided id.
 *
 * @param {number} id - The id of the hero to find.
 * @return {Promise} A promise that resolves with the hero object if found, or rejects with an error message if not found.
 */
const findHero = (id) =>{

    return new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);
        if (hero){
            resolve(hero);
            return;
        }
        reject(`El heroe con el id: ${id} no existe`);
    });

}