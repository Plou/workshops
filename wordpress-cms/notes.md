# CMS
## Système de gestion de contenu

Aujourd’hui une grande partie des sites éditoriaux sont construit avec un CMS, ça permet aux futures administrateurs d’avoir la maitrise de leurs contenus. Ils peuvent ainsi devenir autonomes, et mettre à jour ou enrichir leur site sans faire appel à un webmaster.

Un CMS standard fourni une interface simple, couramment un éditeur de texte, pour créer et modifier les contenus du site. Selon la solution choisie, il sera possible de gérer une arborescence de pages, des menus, de la mise en page avancé, un site de commerce…

Étant complexe à fabriquer, il n’est pas viable d’en developer un pour chaque site, ni même en interne dans une petite ou moyenne entreprise. Cette dernière décennie, plusieurs solutions open sources ont émergées pour devenir les leader du marché: Joomla, Spip, Drupal, Wordpress, Typo3, Ez publish… Avec wordpress en tête.

Avant de rentrer dans le vif du sujet. Le CMS n’est pas la solution magique. Même si des besoins clients particuliers peuvent être comblés par le développement d’un plugin, ce ne sera pas toujours optimal. Les SPA (single page application), fonctionnent maintenant sur une autre modèle. Une API sur mesure, est créée via un frameworks (symfony, Zend, Express…). Puis un front-end sera créé grâce aux contenus et fonctionnalités de cette API. Ces deux modèles couvrent la plupart des cas de développements que vous rencontrerez.


## Wordpress
### A blogging platform

Fabriqué pour installer et administrer rapidement des plateformes de blogs, sa facilité d’accès en a fait le plus utilisé. 16 ans plus tard. Une énorme communauté c’est formé, et a contribué par une multitude de plugins à combler les fonctionnalités manquante. C’est l’avantage principal de wp, tant que le site n’est **pas** fabriqué sur mesure, les thèmes et plugins disponibles sur wp couvrent les besoins les plus communs. Il est ainsi possible de fabriquer un site sans toucher une ligne de code. Cela en fait l’outils de fabrication de site pas chère et à la chaine de prédilection. Le meilleur exemple est wordpress.com qui permet de créer un site wordpress automatiquement. il ne manque plus que les themes, plugins et bien entendu vos contenus.

## Monde professionnel

Le but d’un CMS est donc d’apporter un outils efficace et simple au client.
Pour nous c’est accélérer le développement d’un site. Nous n’aborderons probablement pas ce sujet, mais le but est de partir d’un site pré-configuré que l’on dupliquera pour chaque nouveau projet, afin de ne pas se taper l’installation, et la création de l’environnement à chaque étape.


## Fonctionnement d'internet

Navigateur > DNS > IP > SERVEUR > (PHP + MYSQL) > HTML 