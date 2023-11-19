const InputContainer = document.querySelector(".InputContainer");
const btn = document.querySelector(".btn-country");
const backBtn = document.querySelector(".backBtn");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

/// Render country function
const renderCountry = function (data, className) {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

// Render error function
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

// Function to fetch the data
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

// Function to get data about country
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders && data[0].borders[0];

      if (!neighbour) {
        throw new Error("No neighbour found!");
      }

      // Fetch for country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(err);
      renderError(`Something went wrong: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Button to search for countries
btn.addEventListener("click", function () {
  const inputEl = document.getElementById("input");
  let inputValue = inputEl.value;

  getCountryData(inputValue);
  InputContainer.classList.add("input-hidden");
  btn.classList.add("input-hidden");

  backBtn.classList.remove("input-hidden");
});

// Reseting the program
const resetProgram = function () {
  // Clear countriesContainer
  countriesContainer.innerHTML = "";

  // Reset input field
  const inputEl = document.getElementById("input");
  inputEl.value = "";

  // Show the input container and the "Where am I?" button
  InputContainer.classList.remove("input-hidden");
  btn.classList.remove("input-hidden");

  // Hide the back button
  backBtn.classList.add("input-hidden");
};

// Back button to reset the program
backBtn.addEventListener("click", resetProgram);

/////////////////////////////

// Solution for rendering all neighbours with XMLHttpRequest

// const getCountryData = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country

//     data.borders.forEach((neighbour) => {
//       // AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//       request2.send();

//       request2.addEventListener("load", function () {
//         const data2 = JSON.parse(this.responseText);

//         // Render country 2
//         renderCountry(data2, "neighbour");
//       });
//     });
//   });
// };

///////////////////////////

// Solution for rendering all neighbours with fetch

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);

//       // Neighbours
//       const neighbourPromises = data[0].borders.map((neighbour) => {
//         // Fetch for country 2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//           .then((response) => response.json())
//           .then((data2) => {
//             // Render country 2
//             renderCountry(data2, "neighbour");
//           });
//       });

//       return Promise.all(neighbourPromises);
//     })
//     .then(() => {
//       console.log("All neighbour requests completed");
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };
