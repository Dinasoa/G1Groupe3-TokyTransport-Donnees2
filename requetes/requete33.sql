SELECT nom_complet, matricule,id_voyage from chauffeur,voyage INNER JOIN vehicules ON vehicules.id_vehicule = 
voyage.id_voyage;