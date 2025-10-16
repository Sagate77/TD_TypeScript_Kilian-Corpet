// Adresse postale simple
export class Adresse {
    _rue;
    _ville;
    _codePostal;
    constructor(_rue, _ville, _codePostal) {
        this._rue = _rue;
        this._ville = _ville;
        this._codePostal = _codePostal;
    }
    get rue() { return this._rue; }
    set rue(v) { this._rue = v; }
    get ville() { return this._ville; }
    set ville(v) { this._ville = v; }
    get codePostal() { return this._codePostal; }
    set codePostal(v) { this._codePostal = v; }
}
