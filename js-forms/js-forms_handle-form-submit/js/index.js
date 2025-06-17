console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameField = document.querySelector('#first-name');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    const firstName = formElements.firstName.value;
    const lastName = formElements.lastName.value;
    const age = formElements.age.value;
    const email = formElements.email.value;
    const complaint = formElements.complaint.value;
    const details = formElements.details.value;
    const badness = formElements.badness.value;
    const orderDate = formElements.orderDate.value;
    const tos = formElements.tos.value;

    console.log({
        firstName,
        lastName,
        age,
        email,
        complaint,
        details,
        badness,
        orderDate,
        tos
    });

    form.reset();
    firstNameField.focus();

    console.log(`The age-badness-sum of ${firstName} is ${Number(age) + Number(badness)}.`);


    /*-----------------------------------------------------------------------------mk--
    | Alternativ
    |----------------------------------------------------------------------------------
    | 
    */
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    // console.log(data);
    // console.log(`The age-badness-sum of ${data.firstName} is ${Number(data.age) + Number(data.badness)}.`);
});
