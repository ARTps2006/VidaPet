const ctx = document.getElementById('graficoImpacto');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Animais Resgatados', 'Adoções Realizadas', 'Famílias Felizes'],
datasets: [{
label: 'Impacto da ONG',
data: [120, 90, 50],

backgroundColor: [
'#D56B1D',
'#58692E',
'#BFBF5E'
],

borderColor: [
'#b65512',
'#3f4c1f',
'#9f9f45'
],

borderWidth: 2

}]
},
options: {
scales: {
y: {
beginAtZero: true
}
}
}
});