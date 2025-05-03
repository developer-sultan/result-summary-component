/*
===============================
Summary stats dynamic function
===============================
*/

const summaryStats = () => {
    const statsContainer = document.querySelector(".summary-stat_container");
    statsContainer.innerHTML = data.map((stat) => {
        return `<div class="summary-card_stat ">
        <div>
          <img src="${stat.icon}">
          <span>${stat.category}</span>
        </div>
        <div>
          <span>${stat.score}</span>
          <span>/ 100</span>
        </div>
       </div>`;

    }).join("");
}

summaryStats();
