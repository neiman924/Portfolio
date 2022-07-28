const newFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const comment = document.querySelector('#comment').value.trim();

  if (username && email && comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({username, email, comment}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to submit your comment! please fill all requested fileds.');
      document.location.replace('/');
    }
  }else{
    alert('Failed to submit your comment! please fill all requested fileds.');
    document.location.replace('/#contact');
  }
};

document
  .addEventListener('submit', newFormHandler);

