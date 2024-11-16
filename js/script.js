document.addEventListener("DOMContentLoaded", function() {

    // Load navbar.html
    fetch("web/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            setActiveNavLink();
            updateGreeting();
            setInterval(updateGreeting, 60000); // Update setiap 60 detik
    });

    // Load footer.html
    fetch("web/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

    // Function untuk mengupdate greetings
    function updateGreeting() {
        const iconElement = document.getElementById('greetings-icon');
        const messageElement = document.getElementById('greetings-msg');
        const now = new Date();
        const hour = now.getHours();

        let iconClass;
        let message;

        if(hour >= 5 && hour < 12) {
            iconClass = 'fa-cloud-sun'; 
            message = 'Good Morning!';
        } else if(hour >= 12 && hour < 18) {
            iconClass = 'fa-sun'; 
            message = 'Good Afternoon!';
        } else if(hour >= 18 && hour < 22) {
            iconClass = 'fa-cloud-moon'; 
            message = 'Good Evening!';
        } else {
            iconClass = 'fa-moon'; 
            message = 'Good Night!';
        }

        if(iconElement) {
            iconElement.classList.remove('fa-cloud-sun', 'fa-sun', 'fa-cloud-moon', 'fa-moon');
            iconElement.classList.add(iconClass);
        } 

        if(messageElement) {
            messageElement.textContent = message;
        }
    }

    // Function untuk menampilkan teks tersembunyi saat tombol toggle diklik
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const hiddenTexts = document.querySelectorAll('.hidden-text');

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => toggleHiddenText(index));
    });

    function toggleHiddenText(index) {
        const hiddenText = hiddenTexts[index];
        if (hiddenText) {
            // Toggle tampilan teks tersembunyi
            if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
                hiddenText.style.display = 'block';
            } else {
                hiddenText.style.display = 'none';
            }
        }
    }

    // Function untuk mengubah kelas 'active' pada elemen nav-link yang diklik
    function setActiveNavLink() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                localStorage.setItem('activeNavLink', this.href);
                window.location.href = this.getAttribute('href');
            });
        });

        // Untuk memeriksa apakah ada link yang sebelumnya aktif
        const activeNavLink = localStorage.getItem('activeNavLink');
        if (activeNavLink) {
            navLinks.forEach(link => {
                if (link.href === activeNavLink) {
                    link.classList.add('active');
                }
            });
        }

        updateActiveLinkByCurrentURL();
    }

    // Function untuk memperbarui kelas aktif berdasarkan URL saat ini
    function updateActiveLinkByCurrentURL() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentURL = window.location.href; 
        
        navLinks.forEach(link => {
            if (currentURL === link.href) { 
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

});
