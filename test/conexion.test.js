/**
 * @jest-environment jsdom
 */

const getDataCards = require('./connction')

describe ('Game_of_Coders', () => {
    
    test ('getDataCards', () => {  
        
        const data={"0":{nombre:"Entrenador de Campoardiente",url:"https://media.wizards.com/2019/eld/sp_a8C2hEIHHm.png",correo:"yutrouyograuti-2303@yopmail.com",numero:"117",rareza:"Infrecuentes",descripcion:"Cuando el Entrenador de Campoardiente entre al campo de batalla, otro Caballero objetivo que controlas obtiene +2/+2 y gana las habilidades de arrollar y prisa hasta el final del turno.",precio:"4,68€",id:0},"1":{nombre:"Vaca vendida",url:"https://media.wizards.com/2019/eld/sp_kbumrT9KHw.png",correo:"hihigasseprou-7504@yopmail.com",numero:"006",rareza:"Comunes",descripcion:"Cuando la Vaca vendida muera o cuando la descartes, crea una ficha de Comida. Este artefacto: Ganas 3 vidas.",precio:"1,5€",id:1},"2":{nombre:"Revoltosa del pantano",url:"https://media.wizards.com/2019/eld/sp_w7LffVhfQ7.png",correo:"crejadequopi-4394@yopmail.com",numero:"080",rareza:"Infrecuentes",descripcion:"Sacrificar una Comida: La criatura objetivo obtiene -3/-3 hasta el final del turno.",precio:"4,68€",id:2},"3":{nombre:"Acechabrujas feroz",url:"https://media.wizards.com/2019/eld/sp_PQVkbdQIvh.png",correo:"frecilluzenne-2501@yopmail.com",numero:"154",rareza:"Comunes",descripcion:"Cuando el Acechabrujas feroz entre al campo de batalla, crea una ficha de Comida. Este artefacto: Ganas 3 vidas.",precio:"3€",id:3},"4":{nombre:"Caballero de la fortaleza",url:"https://media.wizards.com/2019/eld/sp_1fZu7ye6qz.png",correo:"caprusoukisu-8105@yopmail.com",numero:"019",rareza:"Comunes",descripcion:"¿De qué nos sirve ser leales a la corona si no servimos también a aquellos más infortunados? Yo lucho por todos nosotros",precio:"1,8€",id:4},"5":{nombre:"Arconte armonioso",url:"https://media.wizards.com/2019/eld/sp_9gAgwpi1gE.png",correo:"wureuffisseuxi-6143@yopmail.com",numero:"017",rareza:"Rara Mítica",descripcion:"Las criaturas que no sean Arconte tienen una fuerza y resistencia base de 3/3. Cuando el Arconte armonioso entre al campo de batalla, crea dos fichas de criatura Humano blancas 1/1.",precio:"5,7€",id:5},"6":{nombre:"Hada de la animación",url:"https://media.wizards.com/2019/eld/sp_FyW1R9dFHB.png",correo:"socromussaudo-6244@yopmail.com",numero:"038",rareza:"Infrecuentes",descripcion:"El artefacto objetivo que no sea criatura que controlas se convierte en una criatura artefacto 0/0. Pon cuatro contadores +1/+1 sobre ella.",precio:"1,5€",id:6}};

        const expected = JSON.stringify(Object.values(data))
                   
        getDataCards(data);

        const result = localStorage.getItem('object')

        expect(result).toStrictEqual(expected);
    });

});