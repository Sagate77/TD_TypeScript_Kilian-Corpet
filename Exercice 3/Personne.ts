// Personne avec un nom, un sexe et des adresses

import { Adresse } from './Adresse.js';

export class Personne {
  constructor(
    private _nom: string,
    private _sexe: 'M' | 'F',
    private _adresses: Adresse[]
  ) {}

  get nom(): string { return this._nom; }
  set nom(v: string) { this._nom = v; }

  // Sexe binaire utilisé dans l'exo
  get sexe(): 'M' | 'F' { return this._sexe; }
  set sexe(v: 'M' | 'F') { this._sexe = v; }

  // Collection d'adresses associées
  get adresses(): Adresse[] { return this._adresses; }
  set adresses(v: Adresse[]) { this._adresses = v; }
}
