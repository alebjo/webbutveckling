document
  .getElementById("hashForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Förhindra att formuläret skickas och sidan laddas om

    // Hämta lösenordet från inmatningsfältet
    const password = document.getElementById("password").value;
    // Definiera URL:en till API:et med lösenordet som parameter
    const url = `https://api.hashify.net/hash/md5/hex?value=${password}`;

    // Gör en GET-förfrågan med fetch
    fetch(url)
      .then((response) => {
        // Kontrollera om förfrågan var framgångsrik
        if (!response.ok) {
          throw new Error("Nätverksfel: " + response.status);
        }
        // Omvandla svaret till JSON
        return response.json();
      })
      .then((data) => {
        // Hantera den JSON-data som returnerades av API:et
        document.getElementById("output").innerHTML = "Så här skulle ditt lösenord se ut med hjälp av MD5 hashning: " + data.Digest;
      })
      .catch((error) => {
        // Hantera eventuella fel
        console.error("Det uppstod ett fel:", error);
      });
  });
