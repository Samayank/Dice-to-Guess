const form = document.getElementById('form');
        const player1 = document.getElementById('player1');
        const player2 = document.getElementById('player2');

        form.addEventListener('submit', function(e){
            e.preventDefault();

            const p1 = player1.value;
            const p2 = player2.value;

            localStorage.setItem('player-1', p1);
            localStorage.setItem('player-2', p2);

            window.location.href = "index.html";
})