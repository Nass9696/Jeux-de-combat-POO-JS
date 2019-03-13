# Exercice jeu de combat en POO JavaScript

Il s'agit d'un exercice que j'ai produit dans le cadre de mon poste de formateur en développement web à Simplon Roubaix. Cet exercice est donné aux apprenants afin d'améliorer leur pratique de la programmation orientée objet.Il s'agit d'un classique des exercices de POO, à savoir un jeu de combat type RPG faisant combattre différents personnages.

Au travers de cet exercice, ils apprennent à :
- déclarer des attributs
- déclarer des méthodes
- utiliser le constructeur d'objet   
- modifier les attribut d'un objet via une méthode
- passer un objet en argument d'une méthode d'un autre objet


## Consignes

Dans ce nouvel exercice sur la programmation orientée objet en JavaScript nous allons travailler la notion de constructeur. A la fin de l'exercice, vous aurez réalisé le script d'un mini jeu de combat, rien que ça !

### Partie 1

Créez un constructeur qui permet de créer un guerrier. Ce constructeur initialisera un objet avec les caractéristiques suivantes :
- Un nom (string)
- Une valeur d'attaque (number)
- Une valeur de défense (number)
- Une valeur de santé (number)
- Une méthode combat qui permet de réduire la vie de la cible selon la valeur de l'attaque du combattant. Par exemple si guerrier1 a 10 d'attaque et guerrier 30 de santé, quand guerrier1 attaque guerrier2 sa santé passe à 20. En termes de code vous devriez avoir quelque chose comme :

```
guerrier1.attack(guerrier2);

```

A vous de jouer, testez ce constructeur en créant deux guerriers différents qui s'attaqueront chacun leur tour. Vérifiez ensuite que votre script fonctionne en affichant leur vie respective. Si celle-ci a baissé c'est que tout fonctionne !

### Partie 2

Nous allons améliorer un peu notre jeu et permettre à l'utilisateur de créer un autre type de personnage : le magicien.

Vous allez donc créer un constructeur pour notre magicien qui contiendra les mêmes proriétés et méthodes que notre guerrier. Le magicien disposera en plus :

- D'une propriété mana (number)

- D'une méthode de soin qui consomme 10 de mana mais rajoute 10 de vie au magicien (attention si le mana est inférieur à 10, elle ne doit pas pouvoir être lancée)

Améliorez également un peu vos méthodes de soin et de combat:

- Faites en sorte que la méthode de combat, quand elle est lancée, affiche le nom du personnage qui attaque et de celui qui est attaqué, puis à la fin affiche la vie restante du personnage qui a été attaqué

- La méthode de soin, si le personnage a assez de mana doit afficher que le personnage essaie de se soigner, puis afficher son nouveau niveau de vie. Si le personnage n'a pas assez de mana, elle affiche simplement un message d'erreur.

Pour tester ce nouveau script, créez un magicien, dites à vos deux guerriers de l'attaquer chacun leur tour. Dites ensuite au magicien de se soigner, puis d'attaquer un des deux guerrier.

Normalement si tout fonctionne correctement, vous devriez voir les bonnes valeur de vie s'afficher.

Voilà vous venez de créer un petit jeu en JavaScript, soyons honnête ce n'est le jeu du siècle mais il fait intervenir des concepts fondamentaux de programmation. Nous verrons par la suite comment l'améliorer avec l'héritage car pour l'instant, vous avez dû répéter beaucoup de code !
