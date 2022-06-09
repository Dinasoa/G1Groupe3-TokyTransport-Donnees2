-- Afficher les departs de nuit : BASIC : UTILITY 10
select * from voyage where heure_depart <= '06:00 AM' and heure_depart >= '05:59 PM' ; 