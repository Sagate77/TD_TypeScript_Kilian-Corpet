// Utilitaires autour de trois points (alignement, isocèle)
import { Point } from './Point.js';
export class TroisPoints {
    _premier;
    _deuxieme;
    _troisieme;
    constructor(_premier, _deuxieme, _troisieme) {
        this._premier = _premier;
        this._deuxieme = _deuxieme;
        this._troisieme = _troisieme;
    }
    // Accesseurs simples
    get premier() { return this._premier; }
    set premier(p) { this._premier = p; }
    get deuxieme() { return this._deuxieme; }
    set deuxieme(p) { this._deuxieme = p; }
    get troisieme() { return this._troisieme; }
    set troisieme(p) { this._troisieme = p; }
    // Tolérance pour compenser les imprécisions flottantes
    eq(a, b, eps = 1e-9) {
        return Math.abs(a - b) <= eps;
    }
    // Alignés si le plus grand côté = somme des deux autres
    testerAlignement() {
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
    estIsocele() {
        const A = this._premier, B = this._deuxieme, C = this._troisieme;
        const AB = A.calculerDistance(B);
        const AC = A.calculerDistance(C);
        const BC = B.calculerDistance(C);
        return this.eq(AB, AC) || this.eq(AB, BC) || this.eq(AC, BC);
    }
}
