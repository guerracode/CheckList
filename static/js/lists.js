console.log('Its Working!');

// createTask.onsubmit = async (e) => {
//   e.preventDefault();

//   console.log('sumit');
//   try {
//     const input = document.getElementById('taskName');
//     const response = await axios.post('/createTask', { text: input.value, done: false });

//     return response;
//   } catch (error) {
//     alert('ERROR' + error);
//   }
// };

function deleteTask(index) {
  axios
    .delete(`/deleteTask/?id=${index}`)
    .then((res) => (window.location = '/'))
    .catch((err) => console.log(err));
}
function taskDone(index) {
  axios
    .put(`/taskDone/?id=${index}`)
    .then((res) => (window.location = '/'))
    .catch((err) => console.log(err));
}
