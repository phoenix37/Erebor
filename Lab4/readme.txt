* nalezy sobie zmienić ustawienia z baza itd lub stworzyc baze jesli nie macie
* uruchamiamy standardowo serwer zakichanej symfonii

* potem tym poleceniem dodajemy elementy do bazy:
	 curl -X POST -d "{\"imgUrl\": \"img/smile1.png\", \"date\": \"2014-04-12\", \"description\": \"test\", \"stars\": 3, 	\"evaluated\": true}" http://localhost:8000/api/v1/notes.json --header "Content-Type:application/json" -v

* wyświetlamy ilość elementów tym:
	curl -i -H "Accept:application/json" localhost:8000/api/v1/notes -v
* lub w przegladarce http://localhost:8000/api/v1/notes.json

* po dodaniu kilku elementow np 2,3
* odpalamy plik index.html z katalogu kalendarz2
* powinny wyświetlić się te elementy które dodaliśmy i powinna być możliwość dodania nowych poprzez opcje dodaj wpis

UWAGA: KALENDARZ2 działa tylko na firefox !!!