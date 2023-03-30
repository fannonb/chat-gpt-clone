const API_KEY = 'get_your_own_API_KEY';
const submitButton = document.getElementById('submit');
const output = document.getElementById('output');
const inputElement = document.querySelector('input');
const history = document.querySelector('.chat-history');


async function getMessage() {

    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role:"user", content:"Hello"}],
            max_tokens: 4000
        })
    }
    try{
            const response = await fetch('https://api.openai.com/v1/chat/completions', options);
            const data = await response.json()
            console.log(data)
            output.textContent = data.choices[0].message.content
            if (data.choices[0].message.content){
                const pElement = document.createElement('p')
                pElement.textContent = inputElement.value
                history.append(pElement);
            }
    }

    catch (error){
        console.log(error);
    }
}

submitButton.addEventListener('click', getMessage);