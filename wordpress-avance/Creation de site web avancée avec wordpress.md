# Creation de site web avancée avec wordpress
http://bit.ly/2mINfh0
55zE7o87l#tPXVupzX
Utiliser les outils et environnements professionnels pour concevoir des site sur mesure avec Wordpress. Basé sur le système de templates Timber et les langages front-end sass et es6.

En se concentrant sur la fabrication d'un site avec Timber nous aborderont comment approcher la conception par composants, de la génération du html avec twig et comment cela s'intègre dans une architecture de styles atomique.

L'objectif sera de d'appréhender ces outils et concepts tout en créant un site vitrine de type portfolio personnel.


-  Méthodes pro
-  Timber
-  dev garant de la simplicité
-  Concept de page obsolete
-  Atomic design
-  SOC & DRY (quick)

## Introduction à la conception modulaire

Au delà du bon fonctionnement d'un site, la personne en charge du développement d'un site devra être garant de plusieurs choses. Il lui incombe la tache de rendre son site simple à administrer (utilisateurs-trices), simple à modifier (développeurs-euses ou intégrateurs-trices), et simple à faire évoluer (*designers*). Pour nous aider dans notre mission, il existe plusieurs méthodes qui nous guiderons de la conception à la production de notre site.

Le concept de page qui nous à permis une transition intellectuel du papier au numérique, n'est plus le modèle pertinent. L'avènement du responsive design a fini d'achever le concept de page rigide, aujourd'hui concevoir un site internet en 1024x768 parait invraisemblable (Delta3 :p).

N'ayant plus le contrôle sur la manière dont nos utilisateurs accèdent au site, nous devons permettre aux contenus de s'adapter à tous — ou presque — cas de figure. Les principes de l'**Atomic Design** on pour but de résoudre ce problème (et d'autres). 

Pour reprendre la métaphore de Brad Frost, plutôt que de penser pages, nous penserons atomes, molècules, organismes, templates. Sans aller jusque là ici, nous organiserons les composants de nos interfaces en modules, utilisables quasiment partout. Effet bonus, cela nous simplifia grandement la vie lors du développement et de la phase de recette qualité.

Chaque éléments de l'interface sera pensé et fabriqué de manière indépendante pour fonctionner dans un système qui constituera nos interfaces.

##  Utilisation d'outils professionnels

Pour nous aider dans la fabrication de nos sites nous allons nous appuyer sur différents outils. Le but de ces ateliers sera de découvrir ces outils et de les mettre en oeuvres. Nous aborderons d'abord les outils qui nous aiderons à la mise en place et l'installation de notre site. Lors de votre arrivé dans une nouvelle équipe de dev votre première tache sera de vous familiariser avec les outils utilisé par votre équipe. Il ne sera pas nécessaire d'en comprendre tout de suite tout les rouages, mais d'être rapidement opérationnel. Dans cet esprit nous verrons dans quelle mesure ces outils peuvent accélérer le développement tout en simplifiant le processus de production.

Au semestre dernier nous avons découvert les bases de wordpress, Les concept des hierarchy, de boucle et de contenu. Pendant les 12h qui viennent, nous nous concentrerons sur la pratique, en abordant des concept plus larges que wordpress.


## Préambule : rappel rapide des notions de bases

- Themes, templates et hiérarchie
- post types
- boucles
- ACF
- shortcodes (présentation rapide)

## Déroulé

- Mise en place d'un espace de travail Cloud9
- Utilisation du terminal
- Présentation de wp-cli, composer, gulp
- Installation du theme de base dummy-wordpress
- Présentation de Timber
- Présentation de Sass
- ^ SOC & DRY
- Présentation des composants *tout prêt*
- Au boulot!



Imaginez que vous êtes dans une agence depuis quelques jours et que l'on vous donne un projet a réaliser. Les outils à votre disposition, sont : 

- La documentation fourni (feuille de tp)
- La documentation des outils utilisé (wordpress, timber, sass)
- vos collègues // moi (maitre de stage)

- Le but n'est pas de maitriser la techno, mais de s'y adapter, de réussite à l'utiliser pour attendre votre but, un site web "fonctionnel". 
wp theme install https://github.com/dummy-team/dummy-wordpress/archive/master.zip

## Installation
Accrochez vos ceintures, nous allons aborder en vrac pendant l'installation plusieurs outils. Vous n'avez pas à les maitriser, mais au moins savoir les utiliser "bêtement" dans un premier temps (ex collègue).

### Cloud9
Création du workspace
Installation de wordpress


- https -> http
- Wp toolbar


### Terminal et installation des outils
Installation npm longue, expliquer ce qu'est un gestionnaire de dépendance, composer, npm, yarn, gulp et browser-sync en attendant.


#### wp-cli
Install wp-cli

Install dummy-wordpress

#### composer (php) and npm (javascript)

```
composer install

npm install -g gulp-cli yarn

yarn
```

#### Gulp @ browser-sync 
Vos futures meilleurs amis

Gulp file :
```js

    browserSync.init({
        port: 8082,
    })
```

`gulp`

footer.twig
``` twig
<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:8082/browser-sync/browser-sync-client.js?v=2.18.7'><\/script>".replace("HOST", location.hostname));
//]]></script>
```


 Test avec `_colors.scss`.
 
# PAUSE


## Dumy Worpdress Starter
### Comme tout outils, ils ne sont pas parfait ou universel
Un peu de nettoyage et de préparation:
 
wp-config
define('WP_DEBUG', true);

Comment vc-register shortcodes
Comment remove element 
Comment breadcrumbs
Comment base.twig includes (cookie and analitycs)
Comment footer

### Hierachy 
### Timber
### functions.php
### Assets (sass, js, gulp)


## Préparation au dev, immersion
Check des maquettes
Passage par le papier

### création de contenu
Un peu de texte quelques pages, le menu

Font page

(Add `is_front_page();`)

Couleurs, tailles de polices
fonts 

footer.twig
`<link href="https://fonts.googleapis.com/css?family=Arima+Madurai:400,600|Work+Sans:400,600" rel="stylesheet">`

_fonts.scss
```scss
/// Font family
$arima: 'Arima Madurai', serif;
$work: 'Work sans', Arial, sans-serif;

$font-headings: $arima;
$font-text: $work;

/// Fonts weight
/// They must reflect avalaible weights
$fw-regular: 400;
$fw-bold: 600;
```

reset.scss
headings.scss
body.scss
dimensions.scss

## Header
Install acf
`wp plugin install advanced-custom-fields`
`wp plugin activate advanced-custom-fields`

### Create header fields
Prepare image resizing

Title
Background

### Header html
Edit header.twig partial
`.header[style="background-image:url({{ background }})"] > .header--title + .header--subtitle`



# Création d'un site maquetté

## Travail préparatoire
Extraire les styles globaux, dimensions du site, polices et couleurs

Passer par le papier pour identifier chaque composant:
- Sa fonction et son nom 
- Le modèle de donné, les champs nécessaires
- Le système d'administration pour simplifier l'édition
- La structure html
- Les styles



## Actions à réaliser 
Register post type
Save permalink 
Ajout à ACF header

Duplication de my_shortcode
Renommer en service
Register services

Post Query
 
For service in services


