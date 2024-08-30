import { heroes } from "../data/heroes"


export const asyncComponent = (element) => {
  
    const id1 = '5d86371f1efebc31def272e2';

    findHero(id1)
        .then(name=> element.innerHTML = name)
        .catch(error => element.innerHTML = error);

}

const findHero = async(id) => {

    const hero = heroes.find( hero => hero.id === id );
    if(!hero) throw `El heroe con el id: ${id} no existe`;
    return hero.name;
}