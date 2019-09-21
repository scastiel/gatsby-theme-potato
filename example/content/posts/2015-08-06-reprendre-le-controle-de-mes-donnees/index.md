---
title: 'Comment j’ai l’intention de reprendre le contrôle de mes données'
date: '2015-08-06'
lang: 'fr'
category: 'life'
cover: './cover.jpg'
---

À l’occasion du (fantastique) dernier [BreizhCamp](http://www.breizhcamp.org/), j’ai eu le plaisir d’assister à la keynote du fondateur et ex-président de Mozilla Europe, Tristan Nitot : _Pourquoi reprendre le contrôle de nos données_ (la transcription est disponible [sur son blog](http://standblog.org/blog/post/2015/07/02/Pourquoi-reprendre-le-controle-de-nos-donnees)).

L’idée est simple : avec l’avènement des réseaux sociaux, messageries dans le cloud (Gmail étant le meilleur exemple), stockages de fichiers dans le cloud, etc., nous avons tout simplement perdu le contrôle de nos données. Comprendre par là que les données qui nous semblaient encore les plus privées il y a quelques années sont maintenant quelque part sur des serveurs à l’autre bout du monde. Et des sociétés/gouvernements s’en servent. Le pire : nous avons donné notre accord (lorsque nous avons coché la case “Accepter” après avoir passé trois heures à lire et comprendre les CGU de chaque service).

Après, vous n’avez peut-être rien à cacher… Mais comme le dit Tristan Nitot dans cette conférence :

> Vous ne faites rien d’illégal dans vos toilettes, normalement, et puis c’est chez vous, mais il y a quand même un loquet à votre porte de toilettes.

Je ne m’attarde pas plus sur ce débat, d’autres le font mieux que moi, mais tout ça pour dire que cette conférence a peut-être été la petite motivation qu’il me manquait pour franchir le cap : j’ai décidé de “reprendre le contrôle de mes données”, petit à petit. Et ce n’est pas forcément facile, surtout lorsqu’on est un grand adepte du cloud comme moi ! C’est pourquoi j’ai décidé d’y aller par étapes, sans espérer tout basculer en un mois.

## Ma boîte mail

Première étape et pas la plus facile : la boîte mail. Comme beaucoup de monde, j’ai ma boîte mail hébergée chez Gmail. Et avec une adresse @gmail.com, ce qui ne facilite pas les choses : je n’ai pas le choix, je vais devoir changer d’adresse mail.

Parce que pour simplifier, lorsque vous créez une adresse mail, vous avez plusieurs possibilités :

- La créer chez votre fournisseur d’accès à Internet : [très mauvaise idée](http://korben.info/ladresse-email-de-son-fai-cest-le-mal.html), à moins de vouloir rester à vie chez ce fournisseur (et d’espérer qu’il ne disparaisse jamais).
- La créer sur un service gratuit : Gmail, Yahoo, Outlook, etc. L’avantage : c’est simple, ça marche tout de suite, et probablement pendant de très nombreuses années. De plus l’ergonomie des webmails est généralement excellente (j’ai toujours été fan de Gmail, et maintenant de Inbox). L’inconvénient : on ne sait pas où sont les mails, ni à quels fins ils sont utilisés. C’est la solution que j’essaie de quitter, donc.
- Héberger vous-même sur votre propre machine (un NAS par exemple) votre serveur mail, sur lequel pointe le nom de domaine que vous aurez préalablement acheté. L’avantage : tout est chez vous, vous avez tout le contrôle. L’inconvénient : ça demande un peu de connaissance pour la mise en place, mais surtout si votre serveur tombe (crash, panne de courant ou de connexion…), vous risquez de perdre des mails.
- Utiliser une boîte mail avec un nom de domaine personnalisé, en profitant des boîtes mails proposées par l’hébergeur. C’est la solution intermédiaire que j’ai retenue.

Pour cette dernière solution, il suffit d’acheter un nom de domaine (ça coûte environ 15 €/an, mais en cherchant on trouve des promos pour la première année), et généralement il y a une ou plusieurs adresses mail de comprises, avec un peu de stockage pour les mails.

Par exemple chez [Gandi](http://gandi.net/) (que j’ai choisi), il y a jusqu’à 5 boîtes mails comprises, et 1 Go de stockage (partagé entre les 5 adresses). Ce qui suffit largement pour un usage normal, au moins dans un premier temps.

Mais bien sûr, comme je le disais, je change donc d’adresse e-mail. Ce qui veut dire, à terme, de changer mon adresse mail sur tous les sites où je suis inscrit (ou en profiter pour me désinscrire de ceux que je n’utilise plus tiens…), mais surtout de prévenir tous les contacts que je change d’adresse mail.

Évidemment cela ne se fait pas en un jour ; ça se saurait si on maintenait rigoureusement les adresses mail de ses contacts à jour. Je m’attends donc à recevoir encore des mails sur mon adresse Gmail dans les prochains mois, ou les prochaines années.

Cela suppose donc de conserver l’adresse Gmail, pour rediriger tous les mails entrants vers ma nouvelle adresse. Je me demande si d’ici quelques mois je ne mettrais pas en place un répondeur, type “Je ne consulte plus les mails à cette adresse. Merci de m’écrire à {ma nouvelle adresse}.”

Quant à la récupération des mails existants (il ne faudrait pas perdre 10 ans d’archives de mails), ça se fait assez facilement avec IMAP : il suffit d’installer Thunderbird (par exemple), d’y configurer les deux comptes e-mails, et de glisser déposer l’ensemble des mails d’un compte à l’autre. Easy :)

## Mes fichiers

Il faut bien reconnaître que lorsque DropBox est apparu, il a créé une sacré révolution dans la manière de stocker et partager ses documents. Les cas d’utilisation sont nombreux ; pour ma part j’utilise DropBox et Google Drive pour stocker :

- mes documents, afin de les retrouver sur toutes mes machines ;
- mes photos, afin de les sauvegarder ;
- les photos que je souhaite partager pour une courte durée (suite à un voyage par exemple).

L’utilisation n’est pas vraiment optimale. Notamment ce qui me pose problème actuellement (sans même parler de protection de la vie privée), c’est que mon dossier Google Drive (et Dropbox) prend de la place, à cause de toutes mes photos particulièrement. Alors que je n’ai pas besoin d’accéder à toutes mes photos sur tous mes postes de travail.

### Un cloud personnel avec ownCloud

J’ai choisi de mettre en place une solution [ownCloud](https://owncloud.org/), qui permet comme son nom l’indique d’héberger son propre cloud. Et ce qu’il y a de bien, c’est qu’il peut être [installé sur un NAS Synology](http://www.gameoverblog.fr/tuto-serveur-cloud-sur-synology/) (ça tombe bien c’est ce que j’ai dis donc). Comme ça la seule limite de place, c’est la taille de mon disque dur. Côté rapidité, malgré la faiblesse de mon NAS (de l’entrée de gamme), les débits sont tout à fait corrects, d’autant que pour ma part ce n’est pas vraiment un critère.

Bien évidemment ownCloud gère la synchronisation depuis plusieurs machines (clients Windows, Mac, Linux), propose une interface Web et des applications mobiles. Je n’ai pas encore testé les fonctionnalités de partage, mais a priori il fait aussi le boulot, donc je ne m’inquiète pas trop.

Ce qu’il y a de pas mal, c’est que je peux choisir quels répertoires synchroniser. Donc je peux décider de mettre ma collection de photos, puis une fois que c’est transféré, enlever le répertoire des dossiers synchronisés. Les photos ne sont donc plus que sur mon NAS.

### Quid de la sauvegarde ?

Et le jour où mon NAS crame me demandez-vous ? Bien sûr ça peut arriver, et pour ça j’ai la solution : [Amazon Glacier](https://aws.amazon.com/fr/glacier/).

![“Aletschgletscher-Eggishorn” by Tobias Alt, Tobi 87 — Own work. Licensed under GFDL via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aletschgletscher-Eggishorn.jpg#/media/File:Aletschgletscher-Eggishorn.jpg)

Il s’agit d’un service de sauvegarde “à froid”, c’est-à-dire destiné aux données “rarement consultées et pour lesquelles un délai d’extraction de plusieurs heures reste acceptable” (dixit le site d’Amazon).

L’avantage, c’est que ça ne coûte presque rien. Pour mes 15 Go de photos ça m’a coûté 2 $ le premier mois, et maintenant environ 0,18 $/mois. Pas besoin de casser mon PEL donc ;).

Là où ça coûte un peu plus, c’est si vous avez besoin de récupérer vos données ; pour mes 15 Go c’est estimé à environ 1,35 $…

Le seul inconvénient de cette solution, c’est qu’elle n’est pas forcément facile à mettre en place pour quelqu’un qui n’y connaît rien. Il faut réussir à s’y retrouver sur le site d’AWS (Amazon Web Services), destiné avant tout aux entreprises. Heureusement d’autres ont fait le travail et [partagent leur expérience](http://furie.be/news/42/15/backup-de-mon-Synology-sur-Amazon-Glacier.html).

Une fois le compte créé, la mise en place sur mon NAS Synology a été relativement aisée, grâce à l’application Glacier. Encore une fois [un petit tutoriel est toujours appréciable](http://blog.e-nnov.fr/synology-dsm/glacier/) ;)

## Mes contacts et calendriers

Bonne nouvelle à ce niveau-là : ownCloud gère également la synchronisation des contacts et des calendriers, grâce aux protocoles CardDAV et CalDAV. Certes je n’ai pas encore testé, mais je ne m’en fais pas trop à ce niveau là.

Sinon, les NAS de Synology (et les autres aussi sûrement) permettent cette fonctionnalité, ce qui permet encore une fois d’avoir toutes ses données hébergées chez soi.

## Et la suite ?

Les mails, c’est fait. Les fichiers aussi, les contacts également, ainsi que les calendriers. Qu’est-ce qu’il reste ?

### Les réseaux sociaux

Oui je suis sur Facebook, Twitter, Google+… Et oui il existe des alternatives bien meilleure pour garantir la sécurité des données privées. Par exemple [Diaspora](https://joindiaspora.com/) est un réseau social décentralisé (c’est-à-dire que n’importe qui peut héberger son propre serveur tout en étant connecté aux autres, un peu comme l’e-mail finalement) et open source.

Bon il faudra peut-être que je m’y intéresse, mais pour l’instant remplacer Facebook par Diaspora, ce serait un peu comme vouloir abandonner ses euros pour tout payer en bitcoins… ;)

Donc pas de migration prévue pour les réseaux sociaux pour l’instant.

### La messagerie instantanée

C’est pas mal lié aux réseaux sociaux. J’utilise principalement Google Talk et Facebook Messenger, et si je veux continuer à discuter avec mes contacts, je ne peux pas en sortir. Un jour peut-être !

### Le moteur de recherche

Pas vraiment de stockage de données à proprement parler, mais concernant la protection de la vie privée, on peut quand même mieux faire qu’utiliser Google…

J’ai relevé deux alternatives intéressantes :

- [Duckduckgo](https://duckduckgo.com/) : moteur de recherche ultra-minimaliste réputé pour le fait de ne pas sauvegarder les recherches des utilisateurs (pas de tracking donc) ;
- [Qwant](https://www.qwant.com/) : moteur de recherche très riche en contenus, français, auquel [Korben a consacré un très bon article](http://korben.info/qwant-mon-retour-apres-1-mois-de-test.html). J’ai un peu du mal avec leur page bordélique hyper-méga-remplie, mais ça vaut peut-être le coup de s’y habituer…

## À propos de Cozy

Il y a peu, j’entendais parler pour la première fois de [Cozy](https://cozy.io/). Ce sympathique projet open source créé par une startup française (Cozy Cloud) permet d’héberger soi-même un environnement web complet : webmail, contacts, calendrier, fichiers, etc. Le mieux : non seulement c’est open source, mais ils font en sorte de rendre très facile la création d’applications tierces : prise de notes, gestion de budget, [bureau Windows à distance](https://github.com/citronneur/mstsc.js)…

Sur le papier, que du très bon, donc. Et pourtant je n’y suis pas passé. La raison : pour moi cette solution manque un peu de maturité. La mise en place est extrêmement simple, mais les applications de base sont tout de même très minimalistes. Le webmail peut éventuellement dépanner, mais je ne suis pas sûr qu’il convienne à un usage quotidien. De même pour le calendrier. Tout cela manque encore un peu d’ergonomie, même si on sent qu’il y a beaucoup d’efforts faits là-dessus.

Mais il n’est pas question pour autant d’abandonner complètement Cozy : je continuerai à suivre son évolution de très près, et pourquoi pas même contribuer, en créant des applications par exemple. Le projet est vraiment sympa, et nul doute qu’il évoluera très rapidement.

## En conclusion

J’espère grâce à cet article vous avoir donné envie de quitter progressivement les Gmail, DropBox et autres Microsoft. Ou au moins de vous avoir donné un retour d’expérience intéressant.

Bien évidemment tout cela ne se fait pas en un jour, et il sera difficile de trouver des alternatives à certains services, par exemple aux outils d’édition de Google Drive ou aux réseaux sociaux.

Mais inutile de mettre la charrue avant les bœufs, chaque étape réussie est un nouveau challenge de relevé. Et comme on dit, ce qui est dans notre poche (nos données) n’est pas dans la leur ;)
