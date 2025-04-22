
    function calculateCost() {
      const petType = document.getElementById('type-pet').value;
      const months = parseInt(document.getElementById('months').value);
      let costPerMonth = 0;

      switch(petType) {
        case 'dog':
          costPerMonth = 120;
          break;
        case 'cat':
          costPerMonth = 100;
          break;
        case 'rabbit':
          costPerMonth = 80;
          break;
        case 'bird':
          costPerMonth = 50;
          break;
      }

      const totalCost = costPerMonth * months;
      document.getElementById('cost-result').textContent = `Estimated care cost for ${months} month(s): $${totalCost}`;
    }

    document.getElementById('adoptionForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      document.getElementById('form-response').textContent = `Thank you, ${name}! We will contact you soon.`;
      this.reset();
    });
  