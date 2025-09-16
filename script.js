const questionEl = document.getElementById('question');
        const optionsEl = document.getElementById('options');
        const resultEl = document.getElementById('result');

        const quiz = {
            question: "Which language runs in a web browser?",
            options: ["Python", "Java", "C", "JavaScript"],
            correct: "JavaScript"
        };

        questionEl.textContent = quiz.question;
        quiz.options.forEach(option => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.onclick = () => {
                if (option === quiz.correct) {
                    resultEl.textContent = "Correct!";
                    resultEl.className = "correct";
                } else {
                    resultEl.textContent = "Wrong!";
                    resultEl.className = "wrong";
                }
                Array.from(document.querySelectorAll('button')).forEach(b => b.disabled = true);
            };
            li.appendChild(btn);
            optionsEl.appendChild(li);
