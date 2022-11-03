function renderHTML(managerData, engineerData, internData) {
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
      <title>Team Manager</title>
    </head>
    <body>
      <header class="row bg-primary mb-5">
        <h1 class="text-center m-3">My Team</h1>
      </header>

      <div class="container">
        <main class="row">
          <!-- START OF CARD -->
          <div class="card col-md-4 col-12">
            <header class="card-header">
              <h2>Manager Name</h2>
              <p>Manager</p>
            </header>
            <div class="card-body">
              <p class="card-text">ID: 1</p>
              <p class="card-text">Email: <a href="#">email link</a></p>
              <p class="card-text">Office Number: 1</p>
            </div>
          </div>
          <!-- END OF A CARD -->

          <!-- START OF CARD -->
          <div class="card col-md-4 col-12">
            <header class="card-header">
              <h2>Engineer Name</h2>
              <p>Engineer</p>
            </header>
            <div class="card-body">
              <p class="card-text">ID: 2</p>
              <p class="card-text">Email: <a href="#">email link</a></p>
              <p class="card-text">Github: gitlink</p>
            </div>
          </div>
          <!-- END OF A CARD -->

          <!-- START OF CARD -->
          <div class="card col-md-4 col-12">
            <header class="card-header">
              <h2>Engineer Name</h2>
              <p>Engineer</p>
            </header>
            <div class="card-body">
              <p class="card-text">ID: 3</p>
              <p class="card-text">Email: <a href="#">email link</a></p>
              <p class="card-text">Github: gitlink</p>
            </div>
          </div>
          <!-- END OF A CARD -->

          <!-- START OF CARD -->
          <div class="card col-md-4 col-12">
            <header class="card-header">
              <h2>Intern Name</h2>
              <p>Intern</p>
            </header>
            <div class="card-body">
              <p class="card-text">ID: 4</p>
              <p class="card-text">Email: <a href="#">email link</a></p>
              <p class="card-text">School: Bootcamp</p>
            </div>
          </div>
          <!-- END OF A CARD -->
        </main>
      </div>
    </body>
  </html>
  `
}

module.exports = renderHTML
