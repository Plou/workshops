# Fabrication d'un zootrope

## Prérequis
Selon votre niveau de connaissance des langages du web, une introduction aux principes de la programmation sera donnée.

Côté technique, un éditeur de texte type [atom](https://atom.io/) ou [Sublime Text](https://www.sublimetext.com/) et un navigateur web récent seront suffisants (cet atelier à été testé avec Chrome 54).

## Introduction à la programmation
Le but de cet atelier et se familiariser avec la programmation. La première partie servira de support à la découverte de la syntaxe du langage et de l'utilisation de méthodes.

## Mise en place
La première étape est la création de notre environnement.  
Nous découvrirons comment créer un fichier html dans lequel nous importerons les fichiers nécessaires au fonctionnement du zootrope avec lequel nous interagirons.

Nous utiliserons les fichiers fournis pour débuter :
- `index.html`, notre page qui sera visionnée avec le navigateur
- Le dossier `js` qui contiendra nos fichiers JavaScript
- `js/zootrope.js`, le zootrope utilisé dans la première partie.
- `js/main.js`, fichier dans lequel nous travaillerons
- `js/zootrope-custom.js` Le fichier dans lequel nous fabriquerons  notre zootrope.
- `readme.md` qui contient ces instructions

### HTML
Le HTML est le langage du web. C'est seul fichier nécéssaire à la création d'une page web, il accueille le contenu.

Il est constitué de balises (*tags*) qui permettrons de donner du sens à nos contenus (la sémantique). Elles sont délimités par les signes `<` et `>`, entre ces caractères nous trouverons le nom de cette balise. Une balise contient souvent un texte qui sera affiché, dans ce cas nous aurons une balise ouvrante `<balise>` et une balise fermante `</balise>`.

Voici quelques exemples :
- `<head> </head>`, La tête de notre page, son contenu ne s'affiche pas, c'est dans cette balise que nous ajouterons des informations à destination du navigateur. Nous y renseignerons l'emplacement de nos scripts.
- `<body> </body>`, Le corps de la page qui accueillera le contenu, c'est la partie visible.
- `<h1> </h1>` Les titres (*headings*), la hiérarchie de titre allant de 1 à 6.
- `<p> </p>` les paragraphes
- `<div> </div>` Une division, une balise neutre nous servant à interagir avec le contenu.

À ces balises nous pouvons ajouter des attributs. Ces attributs pourrons contenir des indications pour le navigateur. Ils peuvent aussi nous permettre d'identifier un élément.

Regardons la structure d'un lien, une des briques élémentaires de ce qui constitue le web :

`<a href="https://fr.wikipedia.org/wiki/World_Wide_Web">World wide web</a>`

Son contenu (entre les balises ouvrante et fermante) sera le texte du lien, le nom de la balise `a` indique au navigateur que c'est un lien (*anchor*) et l'attribut `href` (*Hypertext Reference* ou lien hypertexte) indiquera au navigateur la cible du lien.

Les deux attributs qui nous intéresseront le plus seront `id` (identifiant) et `class`. Ils nous permettrons d'identifier les éléments avec lesquels nous voudrons interagir. Ils servent à nommer un bloc de contenu.

Le html est un language de balisage, il est fait pour structurer les données. Ce n'est pas un langage de programmation, il ne fait que décrire des informations. Les navigateurs ont un affichage par défaut de ces balises, un titre de premier niveau (`<h1>`) sera plus grand et sa graisse sera plus importante. Ce rendu est cependant un peu brut, pour rendre le contenu plus attrayant deux autres outils vont venir se greffer au HTML, le CSS (feuilles de styles) va controller l'aspect graphique et la mise en page tandis que le JavaScript nous permettra de dynamiser tout ça.     


#### Don't panic!
L'essentiel de la page html que nous utiliserons est déjà écrite. Le JavaScript étant le langage de programmation le plus répandu sur le web, il est important de comprendre comment fonctionne le html avant d'interagir avec.



### Le JavaScript ou js pour les intimes
Le js est un language de programmation, il va nous permettre de créer des interactions avec notre contenu.

C'est la dernière étape de notre mise en place, nous allons indiquer à notre navigateur ou aller chercher notre script. Il contiendra toutes nos instructions pour faire fonctionner notre zootrope.

Dupliquons la balise qui inclue le fichier `zootrope.js` pour ajouter notre fichier `main.js`.  
Ouvrons donc ce fichier, il est (presque) vide. Il ne se passe donc rien 😉. Pour tester ce fichier nous allons utiliser une fonction que le navigateur nous fournit : `alert();`. Nous pouvons passer une chaîne de caractère (*string*) en paramètre.

Maintenant que sommes sûr que notre fichier est bien interprété par le navigateur nous allons commencer à programmer !

Pour commencer en douceur, remplaçons l'alerte un peu aggressive par un `console.log();` et découvrons le meilleur ami du développeur : l'Inspecteur.

## Utiliser un programme

### Objectifs
- Comprendre et utliser une API
- Sélectionner un élément HTML
- Écouter un événement (le click de souris)

### Mettons les mains dans le cambouis
Avant de créer notre propre zootrope, nous allons nous familiariser avec le language. Un zootrope est déjà présent et dispose d'une interface de programmation applicative ou API.
C'est une collection de méthodes qui va nous permettre de le contrôler. Pensez à la télécommande d'un robot avec une liste de taches qu'il pourrait accomplir :
- Allumer les bougies
- Commander un repas
- Faire le ménage
Ce que vous faite c'est appuyer sur un bouton et attendre le résultat, vous n'avez pas besoin de savoir vous même comment accomplir ces choses. Cela permet de cacher derrière une commande simple une liste d'instructions plus complexes.

Nous allons donc commencer à utiliser l'API que nous propose le zootrope. L'étape suivante sera de passer de l'autre côté du miroir et de fabriquer cette API. Profitons de cette interface toute prête pour découvrir comment interagir avec notre page.

## Fabriquons notre zootrope

### Objectifs
- Passer par le papier pour concevoir le programme en amont
- Découvrir les objects et les méthodes
- Surcharger un objets
- Comprendre les éléments de l'algorithmique
- Fabriquer un zootrope pardi !

### Conception
Que doit pouvoir faire notre zootrope ?  
Discutons ensemble du but à accomplir. Le but de cette phase est de concevoir le produit, penser en amont à ce que nous allons fabriquer. C'est l'étape la plus importante, une fois que ce sera fait, le travail restant n'est que de la traduction.

### Fabrication
Notre outil de fabrication est le JavaScript, la langue que la machine comprend. Nous allons passer à la pratique, au code. Nous en profiterons pour découvrir les outils que le langage met à notre disposition pour nous aider à obtenir notre zootrope.

# Amusez-vous et restez curieux !
