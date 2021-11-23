class UI {


    //Displays a Custom Message
    printMessage(message, className) {
        const div = document.createElement('div');

        //Add the HTML
        div.innerHTML = `
            <div class"alert alert-dismissible alert-${className}">
                <button type"button" class"close" data-dismiss="alert">x</button>
                ${message}
            </div>
        `;

        //Insert Before
        const reference = document.querySelector('.jumbotron h1');
        const parentNode = reference.parentElement;
        parentNode.insertBefore(div, reference);

        //Remove After 3sec
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}