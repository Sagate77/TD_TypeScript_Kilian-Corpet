// Personne avec un nom, un sexe et des adresses
import { Adresse } from './Adresse.js';
export class Personne {
    _nom;
    _sexe;
    _adresses;
    constructor(_nom, _sexe, _adresses) {
        this._nom = _nom;
        this._sexe = _sexe;
        this._adresses = _adresses;
    }
    get nom() { return this._nom; }
    set nom(v) { this._nom = v; }
    // Sexe binaire utilisé dans l'exo
    get sexe() { return this._sexe; }
    set sexe(v) { this._sexe = v; }
    // Collection d'adresses associées
    get adresses() { return this._adresses; }
    set adresses(v) { this._adresses = v; }
}
