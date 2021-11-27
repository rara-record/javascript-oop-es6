

// 순차적으로 실행할때 유용하다~!
// 버튼을 누르면 성공 판정을 하는 promise 
// 성공시 '성공했어요' 출력
const promise = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'dd') {
      resolve()
    } else {
      reject('실패')
    }
  })
})

async function onClickButton() {
  try {
    await promise;
  } catch {
    const result = await promise;
    console.log(result)
  }
}

onClickButton();

