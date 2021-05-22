function rows (counters) {
  return counters.map(counter => `
  <tr>
    <th scope="row">${counter.index}</th>
    <td>${counter.name}</td>
    <td>${counter.bean}</td>
    <td>${counter.count}</td>
  </tr>
  `).join('')
}

function search (counters, query) {
  return counters.filter(counter =>
    counter.name.toLowerCase().includes(query.toLowerCase()) || counter.bean.toLowerCase().includes(query.toLowerCase()))
}

function total (counters) {
  return counters.reduce((total, counter) => (total += counter.count), 0)
}

function order (counters, property) {
  return counters.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    } else if (a[property] > b[property]) {
      return 1
    } else {
      return 0
    }
  })
}
