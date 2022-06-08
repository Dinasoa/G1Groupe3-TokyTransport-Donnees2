--Afficher les gains du jour 
select sum(montant_paye) from reserver , offre , client where reserver.id_client = client.id_client and reserver.id_offre = offre.id_offre and date_reservation = current_date;

