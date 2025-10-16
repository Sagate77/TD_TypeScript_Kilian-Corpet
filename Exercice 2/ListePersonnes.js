// Opérations de recherche et édition sur une liste de personnes
import { Personne } from './Personne.js';
export class ListePersonnes {
    _personnes;
    constructor(_personnes) {
        this._personnes = _personnes;
    }
    get personnes() { return this._personnes; }
    set personnes(v) { this._personnes = v; }
    // Premier match exact sur le nom
    findByNom(s) {
        return this._personnes.find(p => p.nom === s) ?? null;
    }
    // Vrai si une adresse possède ce code postal
    findByCodePostal(cp) {
        return this._personnes.some(p => p.adresses.some((a) => a.codePostal === cp));
    }
    // Nombre de personnes ayant au moins une adresse dans la ville
    countPersonneVille(ville) {
        return this._personnes.filter(p => p.adresses.some((a) => a.ville === ville)).length;
    }
    // Remplace tous les noms oldNom par newNom
    editPersonneNom(oldNom, newNom) {
        this._personnes.forEach(p => { if (p.nom === oldNom)
            p.nom = newNom; });
    }
    // Change la ville sur chaque adresse de la personne ciblée
    editPersonneVille(nom, newVille) {
        this._personnes
            .filter(p => p.nom === nom)
            .forEach(p => p.adresses.forEach((a) => a.ville = newVille));
    }
}
