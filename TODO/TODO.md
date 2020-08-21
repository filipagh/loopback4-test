# Requirements

1. Node.js
2. npm

# Navod

1. Naklonovat si repozitar. ```git clone repo```
2. Nainstalovat loopback4. ```npm i -g @loopback/cli```  
3. Nainstalovat vsetky dependency. ```npm i```  
4. Prejst si tutorialy 
    1. https://loopback.io/doc/en/lb4/todo-tutorial.html
    2. https://loopback.io/doc/en/lb4/todo-list-tutorial.html  
5. Spravit si vlastnu branch na gite
6. Vykonat ulohu (nizsie je opisana)
7. Spravit PullRequest na master
 
 

# DB model Product
1. oddelit nazov od Items, tak aby sa vytvorila vlastna tabulka enumov pre nazvy produktov 
2. Vytvorit model vlastny model (nejaky produkt)
    * id 
    * name   (nazov produktu (to ma byt ako Item.name))
3. Pridat relation na tento produkt z modelu item
pridat relation
    * hasOne/BelongTo (kuknut co je lepsie)

* netreba riesit migracie, staci nech je na konci spravna DB struktura
* db bud sql alebo len json dummy


# Api Endpoint 
items/{id}/count/{count}
alebo inu impl, necham na vas


#nieco vlastne







