-- Le véhicule utilisé pour un voyage : MEDIUM/HARD : UTILITY 9
select id_véhicule , id_voyage from Véhicules INNER JOIN Voyage ON Véhicules.id_véhicule = Voyage.id_véhicule;