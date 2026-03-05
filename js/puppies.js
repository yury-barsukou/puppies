const gallery = document.getElementById('gallery');
const reloadBtn = document.getElementById('reload-btn');
const PUPPY_COUNT = 9;

async function fetchPuppies() {
    gallery.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Fetching puppies…</p>
        </div>`;
    reloadBtn.disabled = true;

    try {
        const res = await fetch(
            `https://dog.ceo/api/breeds/image/random/${PUPPY_COUNT}`
        );
        const data = await res.json();

        gallery.innerHTML = '';
        data.message.forEach((url, i) => {
            const card = document.createElement('div');
            card.className = 'puppy-card';
            card.style.animationDelay = `${i * 60}ms`;

            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Cute puppy';
            img.loading = 'lazy';

            card.appendChild(img);
            gallery.appendChild(card);
        });
    } catch {
        gallery.innerHTML = '<p class="error">😿 Could not load puppies. Check your connection!</p>';
    } finally {
        reloadBtn.disabled = false;
    }
}

reloadBtn.addEventListener('click', fetchPuppies);
fetchPuppies();
