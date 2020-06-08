// {
//  id: 'ALkjdaklsdj-asdkj',
//  nombre: 'Fernando',
//  sala :'Video juegos'
// }

class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        //busca en el arreglo la persona Id
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;
    }

    getPersonas() {
        // Regresa todas las personas conectadas al chat
        return this.personas;
    }

    getPersonasPorSala(sala) {
        // Regresa todas las personas conectadas a una sala en especifico
        //filto que recibe cmo argumento la persons y regresa lo que viene en la condicion
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        //retorna todas las personas cuya persona.id sea dif a id 
        //Es decir si encuantra el Id lo elimina y retorna el restante       
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;
    }
}

module.exports = { Usuarios }