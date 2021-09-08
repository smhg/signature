var result;

function isNotWhite (color) {
  return color > 0;
}

function validateInput (event) {
  event.preventDefault();

  var form = document.getElementById('form');
  var threshold = parseInt(document.getElementById('threshold').value, 10);
  var context = document.getElementById('signature').getContext('2d');

  var pixels = Array.from(context.getImageData(0, 0, 400, 400).data);

  var notWhite = pixels.filter(isNotWhite);

  if (!result) {
    result = document.createElement('div');
    result.classList.add('result');
    form.prepend(result);
  }

  if (notWhite.length < threshold) {
    result.classList.toggle('error');
    result.innerHTML = 'Nem elég!';
  } else {
    result.classList.toggle('success');
    result.innerHTML = 'Nagyon jó!';
  }
}

function handleSubmit () {
  var form = document.getElementById('form');

  form.addEventListener('submit', validateInput);
}