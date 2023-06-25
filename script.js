  var email = localStorage.getItem("email");
  var uid = localStorage.getItem("uid");
  var uage = localStorage.getItem("age");
  var uname = localStorage.getItem("name");
  var uPRL = localStorage.getItem("photoURL");
  var usname =  localStorage.getItem("surname");
 
  // Recuperar o centerData do localStorage

 function selectItem(item, event) {
    event.preventDefault(); // Prevent the default link behavior
  
    // Remove the 'selected' class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('selected'));
  
    // Add the 'selected' class to the clicked menu item
    const selectedItem = event.currentTarget;
    selectedItem.classList.add('selected');
  
    const topBar = document.getElementById('topbar');
    topBar.textContent = item;
  
    // Perform DOM layout changes based on the selected item
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Clear the container
  
    if (item === 'Local') {
  
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container');
  
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '300px';
      card.style.height = '100px';
      card.style.paddingLeft = '50px';
  
      const cardTitle = document.createElement('h3');
      cardTitle.textContent = 'Centro X';
      const cardSubtitle = document.createElement('p');
      cardSubtitle.textContent = 'IN: ESMAD';
  
      card.appendChild(cardTitle);
      card.appendChild(cardSubtitle);
      cardContainer.appendChild(card);
      contentContainer.appendChild(cardContainer);

      // Show the modal with some text
      const modal = document.getElementById('customModal');
      const modalText = modal.querySelector('.modal-text');

      // Close button element
      const closeButton = modal.querySelector('.close');

      // Add click event listener to the close button
      closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Hide the modal when the close button is clicked
        modal.style.display = 'none';
      });

      // Add click event listener to the "Centro X" card
      card.addEventListener('click', function(event) {
        event.preventDefault();

        // Clear previous content
        modalText.innerHTML = '';

        // Create separate elements for each line of text
        const lines = [
          'IPP: CAMPUS 2 - ESMAD',
          'Coordenadas GPS: 41.366178, -8.7418871,758',
          'Carro: A28 (Saída 15 - Vila do Conde) A7 / A4 / A42 / N13',
          'Reciclagem:',
          'Plástico (0,10€/kg),',
          'Vidro (0,05€/kg),',
          'Papel e Cartão (0,20€/kg),',
          'Pilhas (0,15€/kg).',
          'Recolha: Tampas de garrafas (plásticas).'
        ];

        // Append each line as a separate <p> element
        lines.forEach(line => {
          const lineElement = document.createElement('p');
          lineElement.innerHTML = line;
          modalText.appendChild(lineElement);
        });

        // Show the modal
        modal.style.display = 'block';
      });

      document.body.appendChild(contentContainer); // Append to the document body

      // Check if the user is an admin
      if (isAdmin) {
        const addCardButton = document.createElement('button');
        addCardButton.textContent = 'Add Card';
        addCardButton.addEventListener('click', function(event) {
          // Perform the action for adding a card here
        });

        contentContainer.appendChild(addCardButton);
      }

    document.body.appendChild(contentContainer); // Append to the document body

  
    } else if (item === 'Recicle') {
  
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container', 'grid', 'gap-3');
  
      // Create the cards for each type of "Eco ponto"
      const ecoPontos = [
        'Eco ponto Amarelo: Plastico/Latas',
        'Eco ponto Azul: Papel/Cartão',
        'Eco ponto Verde: Vidro',
        'Eco ponto Vermelho: Pilhas',
        'Eco ponto Castanho: Óleo Vegetal'
      ];
  
      // Mapping between card names and colors
      const colorMap = {
        'Eco ponto Amarelo': '#f1c40f',
        'Eco ponto Azul': '#3498db',
        'Eco ponto Verde': '#2ecc71',
        'Eco ponto Vermelho': '#e74c3c',
        'Eco ponto Castanho': '#755353'
      };
  
      // Create the cards and add them to the card container
      ecoPontos.forEach(title => {
        const cardLink = document.createElement('a');
        cardLink.href = '';
        cardLink.classList.add('menu-link');
        const card = document.createElement('div');
        card.classList.add('card', 'p-2', 'g-col-6');
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = title;
        card.style.backgroundColor = colorMap[title]; // Set the background color dynamically
  
        card.appendChild(cardTitle);
        cardLink.appendChild(card);
        cardContainer.appendChild(cardLink);
  
        // Add click event listener to each card
        cardLink.addEventListener('click', function(event) {
          event.preventDefault();
  
          // Show the recicle modal and populate it with the card title
          const modal = document.getElementById('recicleModal');
          const modalTitle = modal.querySelector('.modal-title');
          modalTitle.textContent = title;
          modal.style.display = 'block';
        });
      });
  
      contentContainer.appendChild(cardContainer);
  
    } else if (item === 'Cartao') {
      // DOM layout changes for 'Cards' item

        // Create the card div with background image
        const card = document.createElement('div');
        card.classList.add('cards');
        card.style.backgroundImage = "url('cards/card.svg')";
        card.style.backgroundSize = 'cover'; // Adjusts the image size to cover the container

        // Create the ID number element
        const idNumber = document.createElement('div');
        idNumber.textContent = uid;
        idNumber.classList.add('id-number');

        // Append the ID number to the card
        card.appendChild(idNumber);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.appendChild(card);

        const heading = document.createElement('h1');
        heading.textContent = '';

        contentContainer.appendChild(heading);
        contentContainer.appendChild(cardContainer);
        document.body.appendChild(contentContainer); // Append to the document body

        // Add click event listener to the card
        card.addEventListener('click', function(event) {
        event.preventDefault();

        // Show the card modal and populate it with the card title
        const modal = document.getElementById('cardModal');
        const modalTitle = modal.querySelector('.modal-image');
        modalImage.src = 'cards/qrcode.svg'; // Replace with the path to your image
        modal.style.display = 'block';
    });
    } else if (item === 'Ranking') {
      const rankingData = localStorage.getItem('topUsers');
      const ranking = JSON.parse(rankingData);

      const rankingContainer = document.createElement('div');
      rankingContainer.classList.add('ranking-container');

      const heading = document.createElement('h1');
      heading.textContent = 'Ranking';

      rankingContainer.appendChild(heading);

      // Sort the ranking array in descending order
      ranking.sort((a, b) => b.score - a.score);

      // Display the top three entries
      for (let i = 0; i < Math.min(3, ranking.length); i++) {
        const rank = i + 1;
        const entry = ranking[i];

        const entryElement = document.createElement('p');
        entryElement.textContent = `${rank}. ${entry.name}: ${entry.score}`;

        rankingContainer.appendChild(entryElement);
      }

      contentContainer.appendChild(rankingContainer);
      document.body.appendChild(contentContainer);
    
  
    } else if (item === 'User') {
       // DOM layout changes for 'User' item
        const heading = document.createElement('h1');
        heading.textContent = 'User';

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        // Create the user card
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        userCard.style.width = '200px';
        userCard.style.height = '300px';

        // Create the user image element
        const userImage = document.createElement('img');
        userImage.src = 'path/to/user/image.jpg'; // Replace with the path to the user image
        userImage.alt = 'User Image';
        userImage.style.width = '100%';
        userImage.style.height = '200px';

        // Create the UID element
        // const uidElement = document.createElement('p');
        // uidElement.textContent = 'UID: ' + uid;
        // Create the name and surname elements
        const nameElement = document.createElement('p');
        nameElement.textContent = 'Name: ' + localStorage.getItem('name');

        const surnameElement = document.createElement('p');
        surnameElement.textContent = 'Surname: ' + localStorage.getItem('surname');

        // Append the user image and UID element to the user card
        userCard.appendChild(userImage);
        // userCard.appendChild(uidElement);
        // Append the name and surname elements to the card
        userCard.appendChild(nameElement);
        userCard.appendChild(surnameElement);

        // Append the user card to the card container
        cardContainer.appendChild(userCard);

        
        contentContainer.appendChild(cardContainer);

        const logoutIcon = document.createElement('img');
        logoutIcon.src = 'icon/logout.svg';
        logoutIcon.alt = 'Logout';
        logoutIcon.classList.add('logout-icon');

        // Add click event listener to the logout icon
        logoutIcon.addEventListener('click', function() {
          // Perform logout and redirect to login.html
          localStorage.removeItem('name'); // Remove stored name from localStorage
          window.location.href = 'login.html'; // Redirect to login.html
        });

        // Append the heading and logout icon to the content container
        
        contentContainer.appendChild(logoutIcon);
        document.body.appendChild(contentContainer); // Append to the document body
        
    }
  
    // Reset the scroll position to the top of the content container
    contentContainer.scrollTop = 0;
  }
  
  // Default selection
  document.addEventListener('DOMContentLoaded', function() {
    const defaultMenuItem = document.querySelector('.menu-item:nth-child(3)');
    defaultMenuItem.click();
  });
  
  // Get the recicle modal element
  const recicleModal = document.getElementById('recicleModal');
  
  // Get the card modal element
  const cardModal = document.getElementById('cardModal');
  
  // Function to close the recicle modal
  function closeRecicleModal() {
    recicleModal.style.display = 'none';
  }
  
  // Function to close the card modal
  function closeCardModal() {
    cardModal.style.display = 'none';
  }
  
  // Event listener for the recicle modal close button
  recicleModal.querySelector('.close').addEventListener('click', closeRecicleModal);
  
  // Event listener for the card modal close button
  cardModal.querySelector('.close').addEventListener('click', closeCardModal);
  
  // Event listener to close the recicle modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === recicleModal) {
      closeRecicleModal();
    }
  });
  
  // Event listener to close the card modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === cardModal) {
      closeCardModal();
    }
  });