<canvas id="simpleBudgetChart"></canvas>
{{-- {{$moneySpentOnDayOfMonth}} --}}
<script>

    // var lastDayOfMonth = moment().endOf('month').format('DD');
    // var eachDayOfMonth = [];
    // var moneySpentOnDayOfMonth = [];
    // for(let i = 1; i <= lastDayOfMonth; i++){
    //     moneySpentOnDayOfMonth.push(Math.floor((Math.random() * 100) + 7));
    //     eachDayOfMonth.push(i);
    // }

    simpleBudgetChart = document.getElementById('simpleBudgetChart');
    new Chart(simpleBudgetChart, {
        type: 'bar',
        data: {
            labels: {!! $eachDayOfMonth !!},
            datasets: [{
                label: '{{ $labelDataset }}',
                data: {!!$moneySpentOnDayOfMonth!!},
                borderWidth: 1,
                backgroundColor: "#30D5C8",
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        }
    });
  </script>
