
function convertToVnd() {
    let radios = document.getElementsByName('genderS');
    for (let i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            callApi(radios[i].value);
            break;
        }  
    }
}   

function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://free.currconv.com/api/v7/convert?q=' + currency + '&compact=ultra&apiKey=5385e5268427e1e8fc44');
    xhr.onload = function() {
        if (xhr.status === 200) {
            updateResults(JSON.parse(xhr.responseText));
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}
  
function updateResults(response) {
    let radios = document.getElementsByName('genderS');
    for (let i = 0, length = radios.length; i < length; i++)
    {
        let number = document.getElementById('amount').value;
        if (radios[i].checked)
        {
            let result;
            if(radios[i].value == "USD_VND")
            {
                result = number*response.USD_VND;
                document.getElementById('result').innerHTML = result;
            }
            else if(radios[i].value == "EUR_VND")
            {
                result = number*response.EUR_VND;
                document.getElementById('result').innerHTML = result;
            }
        }  
    }
}