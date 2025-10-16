// Adresse postale simple

export class Adresse {
  constructor(
    private _rue: string,
    private _ville: string,
    private _codePostal: string
  ) {}

  get rue(): string { return this._rue; }
  set rue(v: string) { this._rue = v; }

  get ville(): string { return this._ville; }
  set ville(v: string) { this._ville = v; }

  get codePostal(): string { return this._codePostal; }
  set codePostal(v: string) { this._codePostal = v; }
}
