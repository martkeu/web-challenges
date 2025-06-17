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

    form.reset();   
    firstNameField.focus();

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

    console.log(`The age-badness-sum of ${firstName} is ${Number(age) + Number(badness)}.`);
});

