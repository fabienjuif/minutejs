const morty = {
  firstName: 'Morty', lastName: 'SMITH', age: 14, size: 120,
  lat: 47.218371, long: -1.553621
}

const jobs = {
  morty: 'Student at Harry Herpson High School',
  jerry: 'Advertising agent',
}

const detail = ({ age, size, lat, long, job }) => `
  <div>
    <div>${age} ans</div>
    <div>${size} cm</div>
    <div>${lat} / ${long}</div>
    <div>Métier : ${job}</div>
  </div>
`

const personnage = ({ firstName, lastName, ...det }) => `
  <div>
    <h2>${firstName} ${lastName}</h2>
    ${detail(det)}
  </div>
`

console.log(personnage({ ...morty, job: jobs.morty }))
