const xLables=[];
const yLables=[];
getData();
async function getData(){
   const response= await fetch ('/test.csv');
   const data= await response.text();
   const row =data.split('\n').slice(1);
   row.forEach(elt=>{
    const col= elt.split(',');
    year= col[0];
    xLables.push(year);
    temp= col[1];
    yLables.push(parseFloat(temp) + 1);
    console.log(year, temp);
   });
   
}

const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xLables,
        datasets: [{
            label: 'Global Average Temparature',
            data: yLables,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});