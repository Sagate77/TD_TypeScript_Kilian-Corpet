// Représente un point en 2D

export class Point {
  // Coordonnées internes
  constructor(private _abs: number, private _ord: number) {}

  // Accès/maj des coordonnées
  get abs(): number { return this._abs; }
  set abs(v: number) { this._abs = v; }

  get ord(): number { return this._ord; }
  set ord(v: number) { this._ord = v; }

  // Distance euclidienne à un autre point
  calculerDistance(p: Point): number {
    const dx = this._abs - p._abs;
    const dy = this._ord - p._ord;
    return Math.sqrt(dx*dx + dy*dy);
  }

  // Distance sans créer d'objets
  static distance(x1: number, y1: number, x2: number, y2: number): number {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx*dx + dy*dy);
  }

  // Milieu du segment
  calculerMilieu(p: Point): Point {
    const mx = (this._abs + p._abs) / 2;
    const my = (this._ord + p._ord) / 2;
    return new Point(mx, my);
  }

  toString(): string {
    return `(${this._abs}, ${this._ord})`;
  }
}
