// Regroupe des stagiaires et expose quelques calculs utiles

import { Stagiaire } from './Stagiaire.js';

export class Formation {
  constructor(
    private _intitule: string,
    private _nbrJours: number,
    private _stagiaires: Stagiaire[]
  ) {}

  get intitule(): string { return this._intitule; }
  set intitule(v: string) { this._intitule = v; }

  get nbrJours(): number { return this._nbrJours; }
  set nbrJours(v: number) { this._nbrJours = v; }

  get stagiaires(): Stagiaire[] { return this._stagiaires; }
  set stagiaires(v: Stagiaire[]) { this._stagiaires = v; }

  // Moyenne des moyennes des stagiaires
  calculerMoyenneFormation(): number {
    if (!this._stagiaires.length) return 0;
    const s = this._stagiaires.reduce((acc, st) => acc + st.calculerMoyenne(), 0);
    return s / this._stagiaires.length;
  }

  // Index du meilleur (première occurrence)
  getIndexMax(): number {
    let bestIdx = -1;
    let best = -Infinity;
    this._stagiaires.forEach((st, i) => {
      const m = st.calculerMoyenne();
      if (m > best) { best = m; bestIdx = i; }
    });
    return bestIdx;
  }

  // Nom du meilleur stagiaire (ou null)
  afficherNomMax(): string | null {
    const idx = this.getIndexMax();
    if (idx < 0) return null;
    const st = this._stagiaires[idx];
    return st ? st.nom : null;
  }

  // Plus petite note du meilleur (ou null)
  afficherMinMax(): number | null {
    const idx = this.getIndexMax();
    if (idx < 0) return null;
    const st = this._stagiaires[idx];
    return st ? st.trouverMin() : null;
  }

  // Moyenne du premier stagiaire portant ce nom
  trouverMoyenneParNom(nom: string): number | null {
    const st = this._stagiaires.find(s => s.nom === nom);
    return st ? st.calculerMoyenne() : null;
  }
}
