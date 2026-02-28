function initNavbar() {
    const navHTML = `
    <div class="menu-trigger" id="menuBtn">
        <div class="menu-icon"></div>
    </div>
    <nav id="sidebar">
        <a href="index.html" id="nav-home">Home</a>
        <a href="account.html" id="nav-account">My account</a>
        <a href="dashboard.html" id="nav-dashboard">Dashboard</a>
        <a href="habit-tracker.html" id="nav-habit">Habit Tracker</a>
        <a href="todo-list.html" id="nav-todo">To-do list</a>
        <a href="syllabus-tracker.html" id="nav-syllabus">Syllabus Tracker</a>
        <a href="focus-tracker.html" id="nav-focus">Focus Tracker</a>
    </nav>
    <div id="overlay"></div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menuBtn');

    window.toggleSidebar = function() {
        sidebar.classList.toggle('open');
        menuBtn.classList.toggle('open-icon');
        overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
    };

    menuBtn.onclick = toggleSidebar;
    overlay.onclick = toggleSidebar;

    // Highlight current page and close menu on click
    const page = window.location.pathname.split("/").pop() || 'index.html';
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        if(link.getAttribute('href') === page) link.classList.add('active');
        link.onclick = () => { if(sidebar.classList.contains('open')) toggleSidebar(); };
    });
}

document.addEventListener('DOMContentLoaded', initNavbar);
