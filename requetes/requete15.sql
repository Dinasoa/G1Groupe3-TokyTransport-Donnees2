--Afficher les offres les plus fréquemment achetés : MEDIUM : UTILITY : 10 
create view offreFrequent as select type , count(type)
from reserver , offre where reserver.id_offre = offre.id_offre group by type ;
 
select (type) from offreFrequent where count = (select max(count) from offreFrequent);
