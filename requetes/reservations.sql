-- afficher toutes les reservations.
select nom_client,prenom_client,curent_date,ville1.nom_ville as depart,vile2.nom_ville as arrivee 
from client, reserver, ville 
inner join client
on client.id_client = reserver.id_client
inner join voyage
on voyage.id_voyage = reserver.id_voyage
inner join ville
as ville1 on ville1.id_ville = voyage.id_ville_depart
inner join ville
as ville2 on ville2.id_ville = voyage.id_ville_arrivee
where ville2.nom_ville ILIKE 'Antananarivo';