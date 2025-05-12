document.getElementById('ConfirmBtn').addEventListener('click', function() {
    const input = document.getElementById('nameInput').value.trim();
    const addInfoText = document.getElementById('AddInfoText');
    const addInfoTextTwo = document.getElementById('AddInfoTextTwo');

    
    if (input === "Я не робот") {
        addInfoText.style.display = 'block';
        addInfoTextTwo.style.display = 'block';

        addInfoText.innerHTML = "Семипалатинск был переименован в Семей в 2007 году в связи с тем, что у многих это название ассоциировалось с ядерным полигоном.";
        addInfoTextTwo.innerHTML = "А вы знали что Семей с древнетюркского переводится как духовное место?"
    } else {
        alert('Пожалуйста, подтвердите, что вы не робот, введя "Я не робот" в поле.');
    }
});

  
