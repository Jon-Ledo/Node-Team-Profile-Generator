// Because the data incoming from the prompts are arrays likely holding many objects, these helper functions are needed
function parseManagerData(arrayData) {
  const managers = arrayData
    .map((data) => {
      return `
      <!-- START OF CARD -->
      <div class="card col-md-4 col-12">
        <header class="card-header">
          <h2>${data.managerName}</h2>
          <p>Manager</p>
        </header>
        <div class="card-body">
          <p class="card-text">ID: ${data.managerID}</p>
          <p class="card-text">Email: <a href="${data.managerEmail}">${data.managerName}'s Email</a></p>
          <p class="card-text">Office Number: ${data.office}</p>
        </div>
      </div>
      <!-- END OF A CARD -->
    `
    })
    .join('')

  return managers
}

function parseEngineerData(arrayData) {
  const engineers = arrayData
    .map((data) => {
      return `
    <!-- START OF CARD -->
    <div class="card col-md-4 col-12">
      <header class="card-header">
        <h2>${data.engineerName}</h2>
        <p>Engineer</p>
      </header>
      <div class="card-body">
        <p class="card-text">ID: ${data.engineerID}</p>
        <p class="card-text">Email: <a href="${data.engineerEmail}">${data.engineerName}'s Email</a></p>
        <p class="card-text">Github: ${data.github}</p>
      </div>
    </div>
    <!-- END OF A CARD --> 
    `
    })
    .join('')

  return engineers
}

function parseInternData(arrayData) {
  const interns = arrayData
    .map((data) => {
      return `
    <!-- START OF CARD -->
    <div class="card col-md-4 col-12">
      <header class="card-header">
        <h2>${data.internName}</h2>
        <p>Intern</p>
      </header>
      <div class="card-body">
        <p class="card-text">ID: ${data.internID}</p>
        <p class="card-text">Email: <a href="${data.internEmail}">${data.internName}'s Email</a></p>
        <p class="card-text">School: ${data.school}</p>
      </div>
    </div>
    <!-- END OF A CARD -->
    `
    })
    .join('')

  return interns
}

function renderHTML(managerData, engineerData, internData) {
  const manager = parseManagerData(managerData)
  const engineer = parseEngineerData(engineerData)
  const intern = parseInternData(internData)

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="" />
      <script src="" defer></script>
      <title>Team Management System</title>
    </head>
    <body>
      <header class="row bg-primary mb-5">
        <h1 class="text-center m-3">${managerData[0].managerName}'s Team</h1>
      </header>

      <div class="container">
        <main class="row">
          ${manager}

          ${engineer}

          ${intern}
        </main>
      </div>
    </body>
  </html>
  `
}

module.exports = renderHTML
