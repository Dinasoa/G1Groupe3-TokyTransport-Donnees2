-- afficher les details d'un voyage [jour depart, heure_depart,[ville depart/ville dest] : EASY : UTILITY 8 
select id_voyage , jour_depart , heure_depart , nom_ville from voyage , ville where ville.id_ville = voyage.id_ville_arrivee ;
select id_voyage , jour_depart , heure_depart , nom_ville from voyage , ville where ville.id_ville = voyage.id_ville_depart ;
