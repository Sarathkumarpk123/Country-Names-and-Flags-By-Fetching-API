fetch('https://restcountries.com/v3.1/all')
.then(response=>
{
    console.log('API 1 RESPONSE',response)
    return response.json()
}
)
.then(data=>{
    const container=document.body
    data.map(countriesdetails=>{
        const article=document.createElement('article')
        const countriesName=document.createElement('h2')
        const countriImage=document.createElement('img')

        countriesName.textContent=countriesdetails.name.common
        countriImage.src=countriesdetails.flags.svg
        countriImage.alt=`the name of the country flag is: ${countriesdetails.name.common}`

        article.appendChild(countriesName)
        article.appendChild(countriImage)
        container.appendChild(article)

    }

    )
})
.catch(error => console.error('error fetching data:',error))