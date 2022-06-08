-- Les clients qui ont choisis tel offre pour tel voyage : EASY : UTILITY 8 
select nom_client , prenom_client , type , voyage.id_voyage from client , reserver , offre , voyage
where client.id_client = reserver.id_client and offre.id_offre = reserver.id_offre and voyage.id_voyage = reserver.id_voyage ;
