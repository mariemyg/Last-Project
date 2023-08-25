// script.js
document.addEventListener("DOMContentLoaded", () => {
  const reservationTable = document.querySelector(".reservation");
  const nombreTerrains = 20;

  function reserverTerrain(heure, terrain) {
    const cell = document.getElementById(`heure${heure}-terrain${terrain}`);
    if (cell.classList.contains("disponible")) {
      cell.textContent = "Réservé";
      cell.classList.remove("disponible");
      cell.classList.add("reserve");
      cell.innerHTML = "<span>Réservé</span>";
    } else {
      cell.textContent = "";
      cell.classList.remove("reserve");
      cell.classList.add("disponible");
      cell.innerHTML = '<span class="ball">⚽</span>';
    }
  }

  // Générer les en-têtes des terrains
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Heure</th>";
  for (let terrain = 1; terrain <= nombreTerrains; terrain++) {
    headerRow.innerHTML += `<th>Terrain ${terrain}</th>`;
  }
  reservationTable.querySelector("thead").appendChild(headerRow);

  // Générer les lignes du tableau
  for (let heure = 9; heure <= 18; heure++) {
    const row = document.createElement("tr");
    const heureCell = document.createElement("td");
    heureCell.textContent = heure + ":00";
    row.appendChild(heureCell);

    for (let terrain = 1; terrain <= nombreTerrains; terrain++) {
      const terrainCell = document.createElement("td");
      terrainCell.id = `heure${heure}-terrain${terrain}`;
      terrainCell.classList.add("disponible");
      terrainCell.innerHTML = '<span class="ball">⚽</span>';

      terrainCell.addEventListener("click", () => {
        reserverTerrain(heure, terrain);
      });

      row.appendChild(terrainCell);
    }

    reservationTable.querySelector("tbody").appendChild(row);
  }
});
