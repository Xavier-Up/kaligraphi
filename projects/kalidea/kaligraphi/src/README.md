#INPUT

####ATOME

* Doit afficher la valeur du form control
* Doit afficher un input en fonction du type donnée en paramètre (input, select, checkbox)
* Doit formatter la valeur en fonction du type donné (number, string, currency, percent)
* Doit afficher un placeholder
* Doit retourner la valeur lorsque celle ci a été modifiée
* Doit envoyer un événement lorsqu'on clique sur ENTER
* Doit limiter le nombre de caractère en fonction de la valeur donnée en paramètre
* Doit avoir un Min lorsque le champ est de type nombre
* Doit avoir un Max lorsque le champ est de type nombre

####MOLECULE

* Doit pouvoir ajouter une icone permettant de vider le champ
* Doit pouvoir compter le nombre de caractères inséré
* Doit ajouter une icone dans le champ à la position voulu
* Doit afficher une liste déroulante en fonction des informations sur la liste données en paramètre
* Doit pouvoir afficher un template à côté du champ

#BOUTON

* Doit envoyer un événement lorsqu'on appuie sur le bouton
* Doit afficher un libellé dans le bouton lorsque celui ci est renseigné
* Doit bloquer le clique sur le bouton lorsqu'il est disabled
* Doit enlever le tabIndex lorsque le bouton est disabled
* Doit générer automatiquement un tabIndex

#SELECT

* Doit afficher la liste d'éléments donnée
* Doit pouvoir séléctionner une valeur dans la liste
* Doit pouvoir séléctionner plusieurs valeurs
* Doit pouvoir avoir un label par défaut
* Doit pouvoir personnalisé le label par défaut
* Doit pouvoir contenir un template personnalisé
* Doit retourner `null` lorsqu'aucune valeur n'est séléctionnée
* Doit pouvoir selectionné une valeur lorsqu'on utilise les flèches
* Doit pouvoir fermer le select lorsqu'on clique en dehors de celui ci
* Doit séléctionner la première valeur lorsqu'il n'y a qu'un seul élément

#ICON

* Doit ajouter une icone personnalisée en svg

#PROGRESS BAR

####Atome

* Doit changer la class en fonction de la couleur demandée
* Doit afficher l'état de la progession

####Molécule

* Doit afficher une valeur Min
* Doit afficher une valeur Max
* Doit pouvoir personnaliser un template pour l'affichage de la valeur de l'état actuelle
* Doit pouvoir personnaliser un template pour l'affichage de la valeur Min de la progress bar
* Doit pouvoir personnaliser un template pour l'affichage de la valeur Max de la progress bar

#SLIDER

* Doit afficher les étapes du slider
* Doit pouvoir bloquer à une limite donné du slider
* Doit ajouter une class de létat actuelle jusqu'à la limite donnée
* Doit bloquer le slide lorsque le slider est disabled
* Doit changer la valeur lorsqu'on slide

######MEME SPECS QUE LA PROGRESS BAR

* Doit afficher une valeur Min
* Doit afficher une valeur Max
* Doit changer la class en fonction de la couleur demandée
* Doit afficher l'état de la progession
* Doit pouvoir personnaliser un template pour l'affichage de la valeur de l'état actuelle
* Doit pouvoir personnaliser un template pour l'affichage de la valeur Min du slider
* Doit pouvoir personnaliser un template pour l'affichage de la valeur Max du slider

#RATER

* Doit afficher le nombres d'étoiles en fonction de la valeur donnée en paramètre
* Doit séléctionner un nombre d'étoile en fonction de la valeur donnée en paramètre
* Doit retourner le nombre d'étoiles séléctionnées
* Doit ajouter une class CSS en fonction de la couleur donnée
* Doit pouvoir configurer les icones en fonction de la valeur donnée en paramètre

#TAB PANEL

* Doit afficher les onglets en fonction d'une liste donnée
* Doit afficher le template en fonction de l'id de l'onglet
* Doit bloquer le clique sur les onglets contenant l'id donnée en paramètre
* Doit afficher sélectionner l'onglet par défaut
* Doit ajouter les classes en fonction des couleurs données en paramètre

#EXPANSION PANEL

* Doit afficher le header donné
* Doit afficher le contenu donné
* Doit être ouvert par défaut
* Doit être fermer par défaut
* Doit recupérer la valeur de l'état lorsqu'il est ouvert
* Doit recupérer la valeur de l'état lorsqu'il est fermer
* Doit ajouter les classes en fonction des couleurs données en paramètre
* Doit s'ouvrir lorsqu'on clique sur ESPACE et qu'on survole le header
* Doit s'ouvrir lorsqu'on clique sur ENTER et qu'on survole le header

#STEPER

* Doit afficher la liste d'étape donnée
* Doit gérer la couleur en fonction de l'étape selectionnée
* Doit pouvoir bloquer l'accès à une étape
* Doit gérer un enchainement linéaire
* Doit gérer le positionnement du STEPER
* Doit afficher le contenu lié à l'étape séléctionnée
* Doit connaitre le nombre d'étape
* Doit retourner l'étape séléctionnée
* Doit accéder à l'étape sur laquelle on a cliqué

#DATEPICKER

* UTILISER LE DATEPICKER DE LA VUP

#LISTITEM

* Utiliser directement un composant
