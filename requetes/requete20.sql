-- Afficher l'essence , maintenance des vehicules : MEDIUM : UTILITY : 10
select vehicules.id_vehicule , nom_maintenance , cout from requerir , maintenance , vehicules where requerir.id_vehicule = vehicules.id_vehicule 
and requerir.id_maintenance = maintenance.id_maintenance ;
