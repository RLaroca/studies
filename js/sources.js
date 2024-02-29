const arrayLinks = [
    {name: 'GitHub', path: 'https://github.com/RLaroca'},
    {name: 'Linkedin', path: 'https://www.linkedin.com/in/rafaellaroca/'},
    {name: 'Instagram', path: 'https://www.instagram.com/rafael_laroca/'}
]

const links = document.getElementById("socialLink");
console.log(links)

arrayLinks.forEach((obj) => {
    links.innerHTML +=`
    <li><a href="${obj.path}" target='_blank'>${obj.name}</a></li>
    `

    console.log(obj)

})












