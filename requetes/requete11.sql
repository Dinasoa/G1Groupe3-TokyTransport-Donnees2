--Combien de clients n'ont pas encore effectués leur paiement en totalité ? : MEDIUM : UTILITY 10
select count(nom_client) from client , offre ,reserver where client.id_client = reserver.id_client 
and offre.id_offre = reserver.id_offre and montant_paye < tarif ;
