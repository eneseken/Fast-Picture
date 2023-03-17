

function getPicture() {
  const width = document.getElementById("widthInput").value;
  const height = document.getElementById("heightInput").value;
  const pictureUrl = `https://picsum.photos/${width}/${height}`;
  const pictureDiv = document.getElementById("picture");
  const picture = `<img src="${pictureUrl}" alt="Random picture">`;
  pictureDiv.innerHTML = picture;
}
