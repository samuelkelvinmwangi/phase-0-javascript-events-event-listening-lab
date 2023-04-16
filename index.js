function addingEventListener() {
    const input = document.getElementById('main');
    input.addEventListener('Input', (event) => {
      console.log('Input changed:', event.target.value);
    });
  }