    
        let resultBoard = document.querySelector('.result');
        let resultValue = document.querySelector('.result h3')
        let numberValue = document.getElementById('input-area');
        let error = document.querySelector('.error');
        
            // console.log (resultValue.innerText);



        // Log result to resultboard
        function changeResult(input){
            resultValue.innerText = input;
            // console.log(input);
        }

        //Show resultboard when btn is clicked
        function resultOutput(){
            if (numberValue.value === ''){
                error.classList.remove('d-none');
                resultBoard.classList.add('d-none');
            } else {
            resultBoard.classList.remove('d-none');
            error.classList.add('d-none');
            // console.log(resultBoard.classList);
            }
        }
        
        // Close resultboard when btn is clicked
        function closeResultOutput(){
            resultBoard.classList.add('d-none');
            numberValue.value = '';
            changeResult('');
        }

        // Get value from text field
        numberValue.addEventListener('input', function (number){
            let input = number.target.value;
            convertToRoman(input);
            // changeResult(input);
        });


        // conversion
        function convertToRoman(num){
            let romanToNum = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            }
            let roman = '';
            for (let key in romanToNum) {
                while (num >= romanToNum[key]) {
                    roman += key; 
                    num -= romanToNum[key];
                }
            }
            // console.log(roman);
            changeResult(roman);
        }

