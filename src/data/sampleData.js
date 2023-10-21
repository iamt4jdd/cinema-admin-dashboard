const sampleData = {
    users: [],
    movies: [],
    showtimes: [],
    tickets: [],
};

for (let i = 1; i <= 50; i++) {
    sampleData.users.push({ accountId: i, username: 'user' + i, nickname: 'User ' + i, balance: 100, email: 'user' + i + '@example.com' });
    sampleData.movies.push({ movieid: i, title: 'Movie ' + i, cost: 10, genre: 'Action', region: 'USA', runTime: '2h30m' });
    sampleData.showtimes.push({ showtimeid: i, movieid: i, showingdate: '2023-10-25', starttime: '18:00', endtime: '20:30', currentquantity: 100 });
    sampleData.tickets.push({ ticketId: "aohfaoiwefoi12" + i, accountId: i, showtimeId: i, seatnumber: 1 });
}

export default sampleData