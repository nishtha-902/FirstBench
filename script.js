// Accuracy Chart
const ctxAccuracy = document.getElementById('accuracyChart').getContext('2d');
const accuracyChart = new Chart(ctxAccuracy, {
    type: 'bar',
    data: {
        labels: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        datasets: [{
            label: 'Accuracy (%)',
            data: [75, 65, 80, 70],
            backgroundColor: [
                '#f6ad55',
                '#63b3ed',
                '#9ae6b4',
                '#ed64a6'
            ],
            borderColor: [
                '#dd6b20',
                '#4299e1',
                '#48bb78',
                '#d53f8c'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Time Taken Chart
const ctxTime = document.getElementById('timeChart').getContext('2d');
const timeChart = new Chart(ctxTime, {
    type: 'line',
    data: {
        labels: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
        datasets: [{
            label: 'Time (sec)',
            data: [30, 45, 25, 50, 40],
            backgroundColor: 'rgba(246, 173, 85, 0.2)',
            borderColor: '#f6ad55',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
