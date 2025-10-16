// Élève avec un nom et une liste de notes

export class Stagiaire {
  constructor(private _nom: string, private _notes: number[]) {}

  get nom(): string { return this._nom; }
  set nom(v: string) { this._nom = v; }

  get notes(): number[] { return this._notes; }
  set notes(v: number[]) { this._notes = v; }

  // Moyenne simple (retourne 0 si pas de notes)
  calculerMoyenne(): number {
    if (this._notes.length === 0) return 0;
    const s = this._notes.reduce((acc, n) => acc + n, 0);
    return s / this._notes.length;
  }

  // Plus grande note (ou null si aucune)
  trouverMax(): number | null {
    return this._notes.length ? Math.max(...this._notes) : null;
  }

  // Plus petite note (ou null si aucune)
  trouverMin(): number | null {
    return this._notes.length ? Math.min(...this._notes) : null;
  }
}
