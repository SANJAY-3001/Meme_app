import { catsData } from "./data.js"

const radioEmotions = document.getElementById('radio-emotions')


function getEmotionCatArray()
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

function renderEmotionRadios()
{
    let emotionRadios = ""

    const emotionCatArray = getEmotionCatArray()
    
    for(let emotion of emotionCatArray)
    {
        emotionRadios += `
        <div class="radio-emotion">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            name="emotion"
            value="${emotion}"
            >
        </div>
        `
    }

    radioEmotions.innerHTML = emotionRadios
}

renderEmotionRadios()