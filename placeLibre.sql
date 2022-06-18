-- toutes les places libres
select id_voyage,date_voyage,heure_depart,nombre_places,matricule
from voyage, vehicule
inner join voyage
on vehicule.id_vehicule = voyage.id_vehicule
inner join ville
on ville.id_ville = voyage.id_ville
inner join offre
on voyage.id_offre = offre.id_offre
where nombre_places > 0;