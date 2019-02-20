const currentUserWhishlist = 'Amsterdam,Barcelona,London,Prague';

const userWhishlists = `
U1,Amsterdam,Barcelona,London,Prague\n
U2,Shanghai,Hong Kong,Moscow,Sydney,Melbourne\n
U3,London,Boston,Amsterdam,Madrid\n
U4,Barcelona,Prague,London,Sydney,Moscow`;

/*
Expected return value:
[‘U1’, ‘U4’, ‘U3’]
*/

function getWhishlistMatches() {
  const lines = userWhishlists.split('\n').filter(x => x);
  const users = [];

  lines.forEach(line => {
    const cities = line.split(',');
    const user = cities.shift();
    let count = 0;

    cities.forEach(city => {
      if (currentUserWhishlist.includes(city)) {
        count++;
      }
    });

    if (count > 0) {
      users.push({ user, count });
    }
  });

  users.sort((a, b) => a.count < b.count);

  const result = users.map(user => user.user);
  console.log(result);
}

getWhishlistMatches();
