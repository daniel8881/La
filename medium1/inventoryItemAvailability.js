function transactionsFor(id, transaction) {
  return transaction.filter(item => {
    return item.id === id;
  })
}


function isItemAvailable(inventory, transactions) {
    var total = 0;
    var selected = transactionsFor(inventory, transactions);
    selected.forEach(item => {
        if(item.movement === 'in') {
            total += item.quantity;
        }else if(item.movement === 'out') {
            total -= item.quantity;
        }
    })

    return total > 0;
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));