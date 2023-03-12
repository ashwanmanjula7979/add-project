// const div = document.querySelector('#container')
// let cont2 = document.querySelector('.container2')
// let image = document.querySelector('.image')
// const countryName = []
const div = document.querySelector('.dropdown')
const allCountriesCardContainer = document.querySelector('.allCountries-cards')
const singleCountriesCardContainer = document.querySelector('.singleCountry-card')

function countriesName() {
    // const country = document.querySelector('#sub-container')
    // const cont = document.querySelector('container2')
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const selectTag = document.createElement('select')
            selectTag.classList.add('select')

            const optionTag = document.createElement('option')
            optionTag.innerHTML = "Select country"
            optionTag.selected = 'true'
            selectTag.appendChild(optionTag)

            data.forEach(val => {
                const optionTag = document.createElement('option')
                optionTag.innerHTML = val.name.official
                selectTag.appendChild(optionTag)
            });
            div.appendChild(selectTag)

            singleCountriesCardContainer.classList.remove('hide')
            var selectClass = document.querySelector('.select');
            selectClass.addEventListener('change', function() {
                specificCountriesCard(this.value)
            }, false);
        })
}

function countriesCard(){
    allCountriesCardContainer.classList.remove('hide')
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data)
        data.forEach((country) =>{
            const div1 = document.createElement('div')
            div1.classList.add("countries-data")

            const img = document.createElement('img')
            img.src = country.flags.png
            img.width ='150'

            const h2 = document.createElement('h2')
            h2.innerHTML = country.name.common

            const capital = document.createElement('p')
            capital.innerHTML = country.capital;

            const population = document.createElement('p')
            population.innerHTML = country.population;

            div1.appendChild(img)
            div1.appendChild(h2)
            div1.appendChild(capital)
            div1.appendChild(population)

            allCountriesCardContainer.appendChild(div1)
        })
    })
}

function specificCountriesCard(countryName){
    allCountriesCardContainer.classList.add('hide')
    
     if(singleCountriesCardContainer.childElementCount > 0){
        singleCountriesCardContainer.removeChild(singleCountriesCardContainer.firstElementChild);

    }
    const newUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(newUrl)
    .then((response) => {
        return response.json();
    })
    .then((country) => {
            console.log(country[0])
             const div2 = document.createElement('div')
            div2.classList.add("countries-data")

            const img = document.createElement('img')
            img.src = country[0].flags.png
            img.width ='150'

            const h2 = document.createElement('h2')
            h2.innerHTML = country[0].name.common

            const capital = document.createElement('p')
            capital.innerHTML = country[0].capital;

            const population = document.createElement('p')
            population.innerHTML = country[0].population;

            div2.appendChild(img)
            div2.appendChild(h2)
            div2.appendChild(capital)
            div2.appendChild(population)

            singleCountriesCardContainer.appendChild(div2)
    })
}

countriesCard();
countriesName();
