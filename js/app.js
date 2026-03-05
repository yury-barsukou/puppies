const app = document.getElementById('app');

function updateTime() {
    const now = new Date().toLocaleString();
    app.textContent = `Current time: ${now}`;
}

updateTime();
setInterval(updateTime, 1000);
