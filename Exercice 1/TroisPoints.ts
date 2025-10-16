// Utilitaires autour de trois points (alignement, isocèle)

import { Point } from './Point.js';

export class TroisPoints {
  constructor(
    private _premier: Point,
    private _deuxieme: Point,
    private _troisieme: Point
  ) {}

  // Accesseurs simples
  get premier(): Point { return this._premier; }
  set premier(p: Point) { this._premier = p; }

  get deuxieme(): Point { return this._deuxieme; }
  set deuxieme(p: Point) { this._deuxieme = p; }

  get troisieme(): Point { return this._troisieme; }
  set troisieme(p: Point) { this._troisieme = p; }

  // Tolérance pour compenser les imprécisions flottantes
  private eq(a: number, b: number, eps = 1e-9): boolean {
    return Math.abs(a - b) <= eps;
  }

  // Alignés si le plus grand côté = somme des deux autres
  testerAlignement(): boolean {
    const A = this._premier, B = this._deuxieme, C = this._troisieme;
    const AB = A.calculerDistance(B);
    const AC = A.calculerDistance(C);
    const BC = B.calculerDistance(C);
    // Tri pour éviter les soucis d'ordre (plus grand côté d'abord)
    const sides = [AB, AC, BC].sort((x, y) => y - x);
    const biggest = sides[0] ?? 0;
    const rest1 = sides[1] ?? 0;
    const rest2 = sides[2] ?? 0;
    // Colinéarité: plus grand = somme des deux autres
    return this.eq(biggest, rest1 + rest2);
  }

  // Isocèle si au moins deux longueurs égales
  estIsocele(): boolean {
    const A = this._premier, B = this._deuxieme, C = this._troisieme;
    const AB = A.calculerDistance(B);
    const AC = A.calculerDistance(C);
    const BC = B.calculerDistance(C);
    return this.eq(AB, AC) || this.eq(AB, BC) || this.eq(AC, BC);
  }
}
