const ctxInitial = document.getElementById("chart-initial").getContext("2d");
const dataInitial = [5, 3, 8.5, 85, 25, 25, 35, 35, 2];
const initialeLabels = [
  "Seed",
  "IGO",
  "Liquidity",
  "Play to Earn",
  "Team",
  "Development",
  "Marketing",
  "Strategic Partners",
  "Advisors",
];
const backgroundsInitial = [
  "#FF4444",
  "#FF8214",
  "#EEBF26",
  "#03C17B",
  "#3098F4",
  "#E2498A",
  "#7B69BA",
  "#B69F2F",
  "#1333D5",
];

const ctxSale = document.getElementById("chart-sale").getContext("2d");
const dataSale = [50, 73, 85, 75, 15];
const saleLabels = ["TOKEN1", "Orange", "Yellow", "Green", "Blue"];
const backgroundsSale = ["#FF4444", "#FF8214", "#EEBF26", "#03C17B", "#3098F4"];

Chart.register({
  id: "p1",
  afterDatasetUpdate: function (chart, args, options) {
    if (chart.canvas.id === "chart-initial") {
      document.getElementById("legend-initial").innerHTML = "";

      const ul = document.createElement("ul");
      chart.data.labels.forEach((label, i) => {
        ul.innerHTML += `
          <li>
            <span style="background-color: ${chart.data.datasets[0].backgroundColor[i]}">
            </span>
            <p>${label}</p>
          </li>
        `;
      });

      return document.getElementById("legend-initial").appendChild(ul);
    } else if (chart.canvas.id === "chart-sale") {
      document.getElementById("legend-sale").innerHTML = "";

      const ul = document.createElement("ul");
      chart.data.labels.forEach((label, i) => {
        ul.innerHTML += `
          <li>
            <span style="background-color: ${chart.data.datasets[0].backgroundColor[i]}">
            </span>
            <p>${label}</p>
          </li>
        `;
      });

      return document.getElementById("legend-sale").appendChild(ul);
    }
    return;
  },
});

const chartInitial = new Chart(ctxInitial, {
  type: "doughnut",
  data: {
    dataset: [
      {
        data: [],
        backgroundColor: backgroundsInitial,
        hoverOffset: 15,
        borderWidth: 4,
        borderColor: "#141415",
        hoverBorderWidth: 2,
        hoverBorderColor: "#ffffff",
      },
    ],
    labels: initialeLabels,
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: "p1",
});

const chartSale = new Chart(ctxSale, {
  type: "doughnut",
  data: {
    dataset: [
      {
        data: [],
        backgroundColor: backgroundsSale,
        hoverOffset: 15,
        borderWidth: 4,
        borderColor: "#141415",
        hoverBorderWidth: 2,
        hoverBorderColor: "#ffffff",
      },
    ],
    labels: saleLabels,
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: "p1",
});

let initialWasVisible = false;
let saleWasVisible = false;

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting === true &&
        entry.target.id === "chart-initial" &&
        initialWasVisible === false
      ) {
        let newData = {
          backgroundColor: backgroundsInitial,
          hoverOffset: 15,
          borderWidth: 4,
          borderColor: "#141415",
          hoverBorderWidth: 2,
          hoverBorderColor: "#ffffff",
          data: dataInitial,
        };

        chartInitial.data.datasets = [];
        chartInitial.data.datasets.push(newData);
        chartInitial.update();
        initialWasVisible = true;
      }

      if (
        entry.isIntersecting === true &&
        entry.target.id === "chart-sale" &&
        saleWasVisible === false
      ) {
        let newData = {
          backgroundColor: backgroundsSale,
          hoverOffset: 15,
          borderWidth: 4,
          borderColor: "#141415",
          hoverBorderWidth: 2,
          hoverBorderColor: "#ffffff",
          data: dataSale,
        };

        chartSale.data.datasets = [];
        chartSale.data.datasets.push(newData);
        chartSale.update();
        saleWasVisible = true;
      }
    });
  },
  { threshold: [0.8] }
);

observer.observe(document.querySelector("#chart-initial"));
observer.observe(document.querySelector("#chart-sale"));
