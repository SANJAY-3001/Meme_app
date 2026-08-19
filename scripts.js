import { catsData } from "./data.js"

const radioEmotions = document.getElementById('radio-emotions')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const getImageBtn = document.getElementById('get-image-btn')
const modalInner = document.getElementById('modal-inner')
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')


radioEmotions.addEventListener('change' , highlightCheckedOption)
getImageBtn.addEventListener('click' , renderCats)


modalCloseBtn.addEventListener('click' , function()
{
    modal.style.display = 'none'
})


function highlightCheckedOption(e)
{
    const radios = document.getElementsByClassName('radio-emotion')

    for (let radio of radios)
    {
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}



function renderCats()
{
    const catObject = getSingleCatObject()

    modalInner.innerHTML = `
    <img src="images/${catObject.image}" 
    alt = "${catObject.alt}"
    class="meme-img">
    `
    modal.style.display = 'block'
}


function getSingleCatObject()
{
    const catsArray = getEmotionMatchingArray()

    if (catsArray.length == 1) 
    {
        return catsArray[0]
    }
    else
    {
        const radomIndex = Math.floor(Math.random() * catsArray.length)
        return catsArray[radomIndex]
    }
}


function getEmotionMatchingArray()
{
    if(document.querySelector('input[type="radio"]:checked'))
    {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGifSelected = gifsOnlyOption.checked

        const matchingCatsArray = catsData.filter(function(cat)
        {
            if (isGifSelected)
            {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else
            {
                return cat.emotionTags.includes(selectedEmotion)
            }
        })

        return matchingCatsArray
    }
}


function getEmotionCatArray(catsData)
{
    let emotionCatArray = []

    for (let cat of catsData)
    {
        for (let emotion of cat.emotionTags)
        {
            if (!emotionCatArray.includes(emotion))
            {
                emotionCatArray.push(emotion)
            }
        }
    }

    return emotionCatArray

}

function renderEmotionRadios(cats)
{
    let emotionRadios = ""

    const emotionCatArray = getEmotionCatArray(cats)
    
    for(let emotion of emotionCatArray)
    {
        emotionRadios += `
        <div class="radio-emotion">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            name="emotions"
            value="${emotion}"
            >
        </div>
        `
    }

    radioEmotions.innerHTML = emotionRadios
}

renderEmotionRadios(catsData)