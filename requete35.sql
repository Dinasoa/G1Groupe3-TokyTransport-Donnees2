--afficher les noms des clients qui partent aujourd'hui


select nom_client,prenom_client from client INNER JOIN voyage ON client.id_client = voyage.id_voyage WHERE jour_depart = current_date;