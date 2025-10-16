// Opérations de recherche et édition sur une liste de personnes

import { Personne } from './Personne.js';

export class ListePersonnes {
  constructor(private _personnes: Personne[]) {}

  get personnes(): Personne[] { return this._personnes; }
  set personnes(v: Personne[]) { this._personnes = v; }

  // Premier match exact sur le nom
  findByNom(s: string): Personne | null {
    return this._personnes.find(p => p.nom === s) ?? null;
  }

  // Vrai si une adresse possède ce code postal
  findByCodePostal(cp: string): boolean {
    return this._personnes.some(p => p.adresses.some((a: { codePostal: string }) => a.codePostal === cp));
  }

  // Nombre de personnes ayant au moins une adresse dans la ville
  countPersonneVille(ville: string): number {
    return this._personnes.filter(p => p.adresses.some((a: { ville: string }) => a.ville === ville)).length;
  }

  // Remplace tous les noms oldNom par newNom
  editPersonneNom(oldNom: string, newNom: string): void {
    this._personnes.forEach(p => { if (p.nom === oldNom) p.nom = newNom; });
  }

  // Change la ville sur chaque adresse de la personne ciblée
  editPersonneVille(nom: string, newVille: string): void {
    this._personnes
      .filter(p => p.nom === nom)
      .forEach(p => p.adresses.forEach((a: { ville: string }) => a.ville = newVille));
  }
}
