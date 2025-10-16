// Gestion simple d'une date (jour/mois/année) sans lib
export class MaDate {
    _jour;
    _mois;
    _annee;
    constructor(_jour, _mois, _annee) {
        this._jour = _jour;
        this._mois = _mois;
        this._annee = _annee;
    }
    get jour() { return this._jour; }
    set jour(v) { this._jour = v; }
    get mois() { return this._mois; }
    set mois(v) { this._mois = v; }
    get annee() { return this._annee; }
    set annee(v) { this._annee = v; }
    static estBissextile(a) {
        return (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);
    }
    static joursDansMois(mois, annee) {
        switch (mois) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: return 31;
            case 4:
            case 6:
            case 9:
            case 11: return 30;
            case 2: return MaDate.estBissextile(annee) ? 29 : 28;
            default: throw new Error('Mois invalide');
        }
    }
    // Ajoute un jour avec report de mois/année si besoin
    ajouterUnJour() {
        const max = MaDate.joursDansMois(this._mois, this._annee);
        if (this._jour < max) {
            this._jour += 1;
            return;
        }
        // Passage au premier du mois suivant
        this._jour = 1;
        if (this._mois < 12) {
            this._mois += 1;
        }
        else {
            this._mois = 1;
            this._annee += 1;
        }
    }
    // Ajoute n jours (boucle simple)
    ajouterPlusieursJours(n) {
        for (let i = 0; i < n; i++)
            this.ajouterUnJour();
    }
    // Ajoute un mois (rabats sur fin de mois si nécessaire)
    ajouterUnMois() {
        if (this._mois < 12) {
            this._mois += 1;
        }
        else {
            this._mois = 1;
            this._annee += 1;
        }
        const max = MaDate.joursDansMois(this._mois, this._annee);
        if (this._jour > max)
            this._jour = max;
    }
    // Ajoute un an (29/02 -> 28/02 si non bissextile)
    ajouterUnAn() {
        this._annee += 1;
        if (this._mois === 2 && this._jour === 29 && !MaDate.estBissextile(this._annee)) {
            this._jour = 28;
        }
    }
    toString() {
        const jj = String(this._jour).padStart(2, '0');
        const mm = String(this._mois).padStart(2, '0');
        return `${jj}/${mm}/${this._annee}`;
    }
}
