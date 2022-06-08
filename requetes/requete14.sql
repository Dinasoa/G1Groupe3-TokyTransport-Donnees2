--Afficher les depenses du jour 
 select sum(cout) from requerir , maintenance , vehicules where requerir.id_vehicule = vehicules.id_vehicule 
 and requerir.id_maintenance = maintenance.id_maintenance and date_maintenance = current_date ;

