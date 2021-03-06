// Generate HTML for Manager card
const generateManager = function (manager) {
    return `
    <div class="card column is-one-quarter">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="">
            <i class="fas fa-user-tie is-2"></i>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${manager.name}</p>
            <a class="subtitle is-6" href="mailto:${manager.email}" target="_blank">${manager.email}</a>
            <p class="subtitle is-6">${manager.getRole()}</p>
          </div>
        </div>
        <div class="content">
          <span>ID: ${manager.id}</span>
          <span>Office Number: ${manager.officeNumber}</span>
        </div>
      </div>
    </div>
    `;
  };
  
  // Generate HTML for Engineer card
  const generateEngineer = function (engineer) {
    return `
    <div class="card column is-one-quarter">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="">
            <i class="fas fa-user-cog"></i>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${engineer.name}</p>
            <a class="subtitle is-6" href="mailto:${engineer.email}" target="_blank">${engineer.email}</a>
            <p class="subtitle is-6">${engineer.getRole()}</p>
          </div>
        </div>
        <div class="content">
          <span>ID: ${engineer.id}</span>
          <a href="https://github.com/${engineer.github}" target="_blank">GitHub: ${engineer.github}</a>
        </div>
      </div>
    </div>
    `;
  };
  
  // Generate HTML for Intern card
  const generateIntern = function (intern) {
    return `
    <div class="card column is-one-quarter">
      <div class="card-content">
        <div class="media">
          <div class="media-right">
            <figure class="">
            <i class="fas fa-user-graduate"></i>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${intern.name}</p>
            <a class="subtitle is-6" href="mailto:${intern.email}" target="_blank">${intern.email}</a>
            <p class="subtitle is-6">${intern.getRole()}</p>
          </div>
        </div>
        <div class="content">
          <span>ID: ${intern.id}</span>
          <span>School: ${intern.school}</span>
        </div>
      </div>
    </div>
    `;
  };
  
  // Process team data and create html cards
  generateHtml = (data) => {
    let pageArray = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
  
      if (role === 'Manager') {
        const managerCard = generateManager(employee);
  
        pageArray.push(managerCard);
      }
  
      if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);
  
        pageArray.push(engineerCard);
      }
  
      if (role === 'Intern') {
        const internCard = generateIntern(employee);
  
        pageArray.push(internCard);
      }
    }
  
    const employeeCards = pageArray.join('');
  
    const generateTeam = generateTeamPage(employeeCards);
  
    return generateTeam;
  
  };
  
  // Function inserts team cards into HTML body
  const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>The A-Team</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"/>
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/34ec37a817.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <header class="has-text-centered m-auto">
            <nav class=' is-centered is-vcentered is-mobile'>
                <span class="is-size-1 has-text-centered has-text-weight-bold"><i class="fa-solid fa-biohazard"></i>The A-Team</span>
            </nav>
        </header>
        <main class="columns is-multiline">
          ${employeeCards}
        </main>
      </body>
    </html>
    `;
  };
  
  module.exports = generateHtml;