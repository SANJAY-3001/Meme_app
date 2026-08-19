import { catsData } from "./data.js"

const radioEmotions = document.getElementById('radio-emotions')


radioEmotions.addEventListener('change' , highlightCheckedOption)


function highlightCheckedOption(e)
{
    const radios = document.getElementsByClassName('radio-emotion')

    for (let radio of radios)
    {
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
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