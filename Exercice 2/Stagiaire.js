// Élève avec un nom et une liste de notes
export class Stagiaire {
    _nom;
    _notes;
    constructor(_nom, _notes) {
        this._nom = _nom;
        this._notes = _notes;
    }
    get nom() { return this._nom; }
    set nom(v) { this._nom = v; }
    get notes() { return this._notes; }
    set notes(v) { this._notes = v; }
    // Moyenne simple (retourne 0 si pas de notes)
    calculerMoyenne() {
        if (this._notes.length === 0)
            return 0;
        const s = this._notes.reduce((acc, n) => acc + n, 0);
        return s / this._notes.length;
    }
    // Plus grande note (ou null si aucune)
    trouverMax() {
        return this._notes.length ? Math.max(...this._notes) : null;
    }
    // Plus petite note (ou null si aucune)
    trouverMin() {
        return this._notes.length ? Math.min(...this._notes) : null;
    }
}
