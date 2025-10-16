// Regroupe des stagiaires et expose quelques calculs utiles
import { Stagiaire } from './Stagiaire.js';
export class Formation {
    _intitule;
    _nbrJours;
    _stagiaires;
    constructor(_intitule, _nbrJours, _stagiaires) {
        this._intitule = _intitule;
        this._nbrJours = _nbrJours;
        this._stagiaires = _stagiaires;
    }
    get intitule() { return this._intitule; }
    set intitule(v) { this._intitule = v; }
    get nbrJours() { return this._nbrJours; }
    set nbrJours(v) { this._nbrJours = v; }
    get stagiaires() { return this._stagiaires; }
    set stagiaires(v) { this._stagiaires = v; }
    // Moyenne des moyennes des stagiaires
    calculerMoyenneFormation() {
        if (!this._stagiaires.length)
            return 0;
        const s = this._stagiaires.reduce((acc, st) => acc + st.calculerMoyenne(), 0);
        return s / this._stagiaires.length;
    }
    // Index du meilleur (première occurrence)
    getIndexMax() {
        let bestIdx = -1;
        let best = -Infinity;
        this._stagiaires.forEach((st, i) => {
            const m = st.calculerMoyenne();
            if (m > best) {
                best = m;
                bestIdx = i;
            }
        });
        return bestIdx;
    }
    // Nom du meilleur stagiaire (ou null)
    afficherNomMax() {
        const idx = this.getIndexMax();
        if (idx < 0)
            return null;
        const st = this._stagiaires[idx];
        return st ? st.nom : null;
    }
    // Plus petite note du meilleur (ou null)
    afficherMinMax() {
        const idx = this.getIndexMax();
        if (idx < 0)
            return null;
        const st = this._stagiaires[idx];
        return st ? st.trouverMin() : null;
    }
    // Moyenne du premier stagiaire portant ce nom
    trouverMoyenneParNom(nom) {
        const st = this._stagiaires.find(s => s.nom === nom);
        return st ? st.calculerMoyenne() : null;
    }
}
