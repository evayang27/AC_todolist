// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#newTodo')
let done = document.querySelector('#my-done')
let all = document.querySelector('#my-all')
let reminder = document.querySelector('#reminder')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}


// write your code here

// 增加項目
function addList() {
  let inputValue = input.value
  // 輸入格不能空白條件設置
  if (inputValue != ``) {
    addItem(inputValue)
    input.value = ''
    reminder.style.display = "none"
  } else {
    reminder.style.display = "block"
  }

}
// 1.btn新增 and Enter新增
addBtn.addEventListener('click', addList);
input.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    addList();
  }
  // console.log(event.keyCode)
});


// 2.刪除清單
all.addEventListener('click', function (event) {
  let parentElement = event.target.parentElement
  // console.log(event.target)
  if (event.target.classList.contains('delete')) {
    // console.log(event.target.parentElement)
    parentElement.remove()
  }

  // 3.完成畫刪除線
  if (event.target.tagName === 'LABEL') {
    // 移動項目
    if (!event.target.classList.contains('checked')) {
      done.appendChild(parentElement)
    } else (
      list.appendChild(parentElement)
    )
    event.target.classList.toggle('checked')
    // console.log(doneElement)
    // console.log(done)
  }



})


