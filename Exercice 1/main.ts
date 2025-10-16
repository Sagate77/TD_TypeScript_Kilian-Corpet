// Petit script de démonstration des fonctionnalités

import { Point } from './Point.js';
import { TroisPoints } from './TroisPoints.js';
import { Stagiaire } from './Stagiaire.js';
import { Formation } from './Formation.js';
import { Adresse } from './Adresse.js';
import { Personne } from './Personne.js';
import { ListePersonnes } from './ListePersonnes.js';
import { MaDate } from './MaDate.js';

// Ex1
const A = new Point(0, 0);
const B = new Point(3, 4);
const C = new Point(6, 8);

console.log('AB =', A.calculerDistance(B));         // 5
console.log('mid(A,B) =', A.calculerMilieu(B).toString());
console.log('static distance =', Point.distance(0,0,3,4)); // 5

const tp = new TroisPoints(A, B, C);
console.log('Alignés ?', tp.testerAlignement());
console.log('Isocèle ?', tp.estIsocele());

// Ex2
const s1 = new Stagiaire('Imène', [12, 16, 14]);
const s2 = new Stagiaire('Alexis', [9, 10, 11]);
const s3 = new Stagiaire('Crinu', [18, 17, 19]);
const form = new Formation('TS orientée objet', 5, [s1, s2, s3]);

console.log('Moyenne formation =', form.calculerMoyenneFormation().toFixed(2));
console.log('Top index =', form.getIndexMax());
console.log('Top nom =', form.afficherNomMax());
console.log('Top min =', form.afficherMinMax());
console.log('Moyenne Imène =', form.trouverMoyenneParNom('Imène'));

// Ex3
const ad1 = new Adresse('1 rue des Lilas', 'Meaux', '77100');
const ad2 = new Adresse('2 rue de la Lune', 'Aulnay', '93600');
const p1 = new Personne('Ika', 'F', [ad1]);
const p2 = new Personne('Rio', 'M', [ad2]);
const lp = new ListePersonnes([p1, p2]);

console.log('findByNom("Ika") ->', lp.findByNom('Ika')?.nom ?? null);
console.log('findByCodePostal("77100") ->', lp.findByCodePostal('77100'));
console.log('countPersonneVille("Aulnay") ->', lp.countPersonneVille('Aulnay'));
lp.editPersonneNom('Rio', 'Rio-chan');
lp.editPersonneVille('Ika', 'Paris');
console.log('Après édition:', lp.findByNom('Ika')?.adresses[0]?.ville ?? null);

// Ex4
const d = new MaDate(31, 12, 2016);
d.ajouterUnJour();
console.log('01/01/2017 ?', d.toString());

const f = new MaDate(28, 2, 2018);
f.ajouterUnJour();
console.log('29/02/2018 ?', f.toString()); // 2018 est bissextile ? (non) -> exo initial donnait 29/02/2018

const g = new MaDate(31, 1, 2021);
g.ajouterUnMois();
console.log('28/02/2021 ?', g.toString());

const h = new MaDate(29, 2, 2020);
h.ajouterUnAn();
console.log('28/02/2021 ?', h.toString());
