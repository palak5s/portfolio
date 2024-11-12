// const resumeBtns=document.querySelectorAll('.resume-btn')
// resumeBtns.forEach((btn,idx)=>{
//     btn.addEventListener('click',()=>{
//         resumeBtns.forEach(btn=>{
//             btn.classList.remove('active');
//         });
//         btn.classList.add('active')
//     })
// })
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.resume-btn');
    const sections = document.querySelectorAll('.resume-detail');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            buttons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            sections[index].classList.add('active');
        });
    });
});
