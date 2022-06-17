-- Trouver la destination de tous les clients 
select nom_ville , nom_client , prenom_client from client , voyage , ville , reserver where ville.id_ville = voyage.id_ville_arrivee and 
client.id_client = reserver.id_client and reserver.id_voyage = voyage.id_voyage ;