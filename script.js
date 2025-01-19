document.getElementById('generateButton').addEventListener('click', function() {
      const selectedIcon1 = document.querySelector('#section1 .icon-option.selected');
      const selectedIcon2 = document.querySelector('#section2 .icon-option.selected');
      const selectedIcon3 = document.querySelector('#section3 .icon-option.selected');

      const value1 = selectedIcon1 ? selectedIcon1.dataset.value : 'none';
      const value2 = selectedIcon2 ? selectedIcon2.dataset.value : 'none';
      const value3 = selectedIcon3 ? selectedIcon3.dataset.value : 'none';

      console.log('Selected Icon 1:', value1);
      console.log('Selected Icon 2:', value2);
      console.log('Selected Icon 3:', value3);

      alert(`Generated: ${value1}, ${value2}, ${value3}`);
    });

    document.querySelectorAll('.icon-group .icon-option').forEach(option => {
      option.addEventListener('click', function() {
        const parent = this.closest('.icon-group');
        parent.querySelectorAll('.icon-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
