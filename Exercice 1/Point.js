// Représente un point en 2D
export class Point {
    _abs;
    _ord;
    // Coordonnées internes
    constructor(_abs, _ord) {
        this._abs = _abs;
        this._ord = _ord;
    }
    // Accès/maj des coordonnées
    get abs() { return this._abs; }
    set abs(v) { this._abs = v; }
    get ord() { return this._ord; }
    set ord(v) { this._ord = v; }
    // Distance euclidienne à un autre point
    calculerDistance(p) {
        const dx = this._abs - p._abs;
        const dy = this._ord - p._ord;
        return Math.sqrt(dx * dx + dy * dy);
    }
    // Distance sans créer d'objets
    static distance(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
    // Milieu du segment
    calculerMilieu(p) {
        const mx = (this._abs + p._abs) / 2;
        const my = (this._ord + p._ord) / 2;
        return new Point(mx, my);
    }
    toString() {
        return `(${this._abs}, ${this._ord})`;
    }
}
