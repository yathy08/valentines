let songPlayed = false;

function handleYesClick() {
  if (!songPlayed) {
    const songUrl = "https://cf-media.sndcdn.com/sCvH69rw8C11.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vc0N2SDY5cnc4QzExLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA3ODk5Njg0fX19XX0_&Signature=KKmndDO~knHtsYmFqEpQWvOfC1fRf8b~BIPYFLj~YAA8KVC3t1s5O0lLYAHad7Ty4qR5xrbz0pf1oJTs6sK5DCtQ1JnvnIWjt2JE1YMdmppicl5HWoQSPW2~de0g7lDFzZSRglaZ0J81q6hQ2phkbl8u0EeUS3CGI46pTb9W6DWN0RowCDu3GFv2AmydqgvEPLIKY9Aj9t4IyRvrOmorFqYFb6GF3sqZeiK4iIeq-JPFdChjgnYZKjYALAJM4i3ocd3WNwGV1CNYc9Q6ysotho-DDevEvza-DZpWmt5W-WYyM92IstEzk0QP-jl8jv3Mbw7L88-KI1fZvjRLvjqe4w__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ";
    const audioElement = new Audio(songUrl);
    audioElement.play();
    songPlayed = true;
  }

  const yesGifs = [
    "https://media.giphy.com/media/9G0AdBbVrkV3O/giphy.gif?cid=790b7611k6zqv9hivfhrna7cnp7jyua7fbd3k7eqw4tt7rjj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/zrxazUScjhxo4/giphy.gif?cid=ecf05e47cku4wnolviyq5mh60dd80lbbz0duxi67dezqmx3y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/HJZblxmxHb7CbZtmNy/giphy.gif?cid=ecf05e47ft69yrzgcz9n4nox9csrcv0qukxgdxsiva4jfvz1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/1b2jHmppt3Ky09Zkqh/giphy.gif?cid=ecf05e47qwnhdcijebbzi1pbgiz82af9j4xxtzeuk6dt1nd6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/QTaesEFq1uxqEepIVI/giphy.gif?cid=ecf05e47h8l7y78fhd2tizexxy8lzhva4i1oo6jvj12ewojc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/wcvSBLMPdIPHP8VQkD/giphy.gif?cid=ecf05e47qwnhdcijebbzi1pbgiz82af9j4xxtzeuk6dt1nd6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/QBosWy0XVrehzTJ2pF/giphy.gif?cid=ecf05e472dhuk2li2v23oc2qwpdotcoj3rwi0vr9t8xesms8&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/SjclmHRVzjgwcbOQsk/giphy.gif?cid=ecf05e472nplzr8ixovf4zqysv1g8malb61gu059yu1zq4a5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/LQk1bIyKAuDulFrVd7/giphy.gif?cid=ecf05e471z2ziw77jn2iwdwmfa0qygi06uab1zupgy8mjoly&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/85gOm7p1lTXob8Qb2b/giphy.gif?cid=ecf05e47ft69yrzgcz9n4nox9csrcv0qukxgdxsiva4jfvz1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/GYXA22DqvoRjtDlgNK/giphy.gif",
    "https://media.giphy.com/media/5kW52OOQeTrqqXN1tc/giphy.gif?cid=ecf05e47trt29p4dtaqcvhkhvvquszu8txq4w9e513sngsrf&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  ];

  const randomGifIndex = Math.floor(Math.random() * yesGifs.length);
  const giphyUrl = yesGifs[randomGifIndex];

  document.querySelector('.valentine-container img').src = giphyUrl;

  const phrases = [
    "Yay! You're the best!",
    "You're amazing!",
    "My heart is dancing!",
    "You made my day!",
    "My Valentine's dream came true!",
    "You're the sweetest!",
    "Incredible! You said yes!",
    "I'm on cloud nine!",
    "You're my Valentine hero!",
    "You're a star!",
    "My heart sings for joy!",
    "I'm so happy you said yes!",
    "You're the cutest!",
    "My heart is overflowing with joy!",
    "You're the best thing ever!"
  ];

  const randomPhraseIndex = Math.floor(Math.random() * phrases.length);
  const yesButtonText = phrases[randomPhraseIndex];

  document.querySelector('.yes-button').textContent = yesButtonText;

  document.querySelector('.no-button').style.display = 'none';
}

function handleNoMouseOver() {
  const noButton = document.querySelector('.no-button');
  const maxX = window.innerWidth - noButton.clientWidth;
  const maxY = window.innerHeight - noButton.clientHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  noButton.style.position = 'absolute';
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
}

function handleNoClick() {
  
}

document.querySelector('.no-button').addEventListener('mouseover', handleNoMouseOver);
document.querySelector('.no-button').addEventListener('click', handleNoClick);
